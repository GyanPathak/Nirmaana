import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const email = typeof body.email === "string" ? body.email.trim().toLowerCase() : "";

    if (!emailPattern.test(email)) {
      return NextResponse.json({ error: "Enter a valid email address." }, { status: 400 });
    }

    const client = await clientPromise;
    const database = client.db(process.env.MONGODB_DB ?? "nirmaana");

    await database.collection("waitlist").insertOne({
      email,
      createdAt: new Date(),
    });

    return NextResponse.json({ message: "You're on the list — we'll be in touch." }, { status: 201 });
  } catch (error) {
    console.error("Waitlist signup failed", error);
    return NextResponse.json({ error: "We could not save your email. Please try again." }, { status: 500 });
  }
}
