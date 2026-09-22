import WaitlistForm from "./WaitlistForm";
import TeamMemberImage from "./TeamMemberImage";
import { Hero } from "@/components/ui/animated-hero";

const problemStats = [
  {
    figure: "27%",
    desc:
      "of Indian adults are estimated to be financially literate — most people have a bank account and a demat account, but not a framework for using either.",
    src: "NCFE Financial Literacy & Inclusion Survey, 2019",
  },
  {
    figure: "12M → 23.5M",
    desc:
      "is the projected growth of India's gig and platform workforce by 2029-30 — a generation earning on income that doesn't arrive in equal monthly instalments.",
    src: "NITI Aayog / Economic Survey 2025-26, via Outlook Money reporting",
  },
  {
    figure: "68%",
    desc:
      "of surveyed gig-economy workers report having no emergency savings at all, despite income that can swing month to month.",
    src: "Freelancer financial-behaviour research, 2025",
  },
];

const flowSteps = [
  {
    n: "01",
    title: "Understand you",
    desc:
      "Income, expenses, debt and goals, gathered the way they actually are — including income that moves month to month, not just a salary slip.",
  },
  {
    n: "02",
    title: "See your financial health",
    desc:
      "A plain picture of where things stand before anything is recommended — emergency fund, debt load, savings, all in one view.",
  },
  {
    n: "03",
    title: "Set real priorities",
    desc:
      "Emergency fund, high-interest debt, short-term goals, long-term goals — in the order that actually protects you, not the order that's easiest to sell.",
  },
  {
    n: "04",
    title: "Get a plan, not a tip",
    desc:
      "A roadmap in plain language, with the reasoning shown alongside it — never a recommendation with no explanation attached.",
  },
  {
    n: "05",
    title: "Talk to someone qualified, if you need to",
    desc:
      "A connection to SEBI-registered advisers when the plan calls for it — no commission steering, no pressure.",
  },
];

export default function Home() {
  return (
    <main id="top" className="pt-[76px]">
      {/* NAV */}
      <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/15 bg-black/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-[1080px] flex-wrap items-center justify-between gap-x-6 gap-y-3 px-7 py-5">
          <a href="#top" aria-label="Go to the top of the page">
            <img
              src="/Asset1.png"
              alt="Product logo"
              className="h-auto w-[150px] transition-opacity hover:opacity-80 sm:w-[190px]"
            />
          </a>
          <span className="font-fraunces text-[15px] italic text-on-dark-dim">
            an early-stage concept
          </span>
        </div>
      </nav>

      {/* HERO */}
      <Hero />

      {/* PROBLEM */}
      <section className="border-b border-rule-light bg-paper py-[5.5rem] text-on-paper">
        <div className="mx-auto max-w-[1080px] px-7">
          <p className="mb-2.5 font-fraunces text-[15px] italic text-green">
            The problem
          </p>
          <h2 className="mb-11 max-w-[22ch] font-fraunces text-[clamp(1.7rem,3vw,2.3rem)] font-medium text-on-paper">
            Most people get access to financial products long before they get
            a way to think about them.
          </h2>

          <div>
            {problemStats.map((s, i) => (
              <div
                key={s.figure}
                className={`flex flex-col gap-1.5 border-t border-rule-light py-[1.375rem] sm:flex-row sm:items-baseline sm:gap-7 ${
                  i === problemStats.length - 1 ? "border-b" : ""
                }`}
              >
                <div className="min-w-[150px] shrink-0 font-plex-mono text-[clamp(1.6rem,3vw,2.1rem)] text-green">
                  {s.figure}
                </div>
                <div>
                  <p className="text-[1.02rem]">{s.desc}</p>
                  <span className="mt-1.5 block text-[13px] text-on-paper-dim">
                    {s.src}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOLUTION */}
      <section className="bg-black py-[5.5rem]">
        <div className="mx-auto max-w-[1080px] px-7">
          <p className="mb-2.5 font-fraunces text-[15px] italic text-brass-soft">
            The approach
          </p>
          <h2 className="mb-11 max-w-[22ch] font-fraunces text-[clamp(1.7rem,3vw,2.3rem)] font-medium text-on-dark">
            A plan comes before a product — in this order, every time.
          </h2>

          <div className="border-t border-rule-dark">
            {flowSteps.map((step) => (
              <div
                key={step.n}
                className="grid min-w-0 grid-cols-[48px_minmax(0,1fr)] gap-5 border-b border-rule-dark py-6 sm:grid-cols-[64px_minmax(0,1fr)]"
              >
                <div className="font-plex-mono text-[1.1rem] text-brass-soft">
                  {step.n}
                </div>
                <div>
                  <h3 className="mb-1.5 font-fraunces text-[1.18rem] font-medium text-on-dark">
                    {step.title}
                  </h3>
                  <p className="max-w-[58ch] text-[0.98rem] text-on-dark-dim">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-[3px] border border-rule-dark bg-brass/5 px-[1.375rem] py-5">
            <p className="text-[0.92rem] text-on-dark-dim">
              <strong className="font-medium text-brass-soft">
                What this isn&rsquo;t:
              </strong>{" "}
              a brokerage, a bank, or a source of stock tips. No guaranteed
              returns, no &ldquo;get rich&rdquo; language, no personalised
              investment advice until the right registrations are in place.
              If it ever gives specific investment advice, it will say so
              plainly and be registered to do it.
            </p>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="bg-paper py-[5.5rem] text-on-paper">
        <div className="mx-auto max-w-[1080px] px-7">
          <p className="mb-2.5 font-fraunces text-[15px] italic text-green">
            Who&rsquo;s behind this
          </p>
          <h2 className="mb-2 font-fraunces text-[clamp(1.7rem,3vw,2.3rem)] font-medium text-on-paper">
            THE fOUNDING DUO
          </h2>

          <div className="mt-8 grid grid-cols-[repeat(auto-fit,minmax(min(190px,100%),1fr))] gap-x-7 gap-y-9">
            {[
              {
                image: "/gyannirmaana.jpeg",
                name: "GYAN PATHAK",
                role: "Co-Founder",
                linkedin: "https://www.linkedin.com/in/gyan-pathak-444b94339",
              },
              {
                image: "/aadityanirmaana.jpeg",
                name: "AADITYA KASHYAP",
                role: "Co-Founder",
                linkedin: "https://www.linkedin.com/in/aaditya-kashyap-3082732a0/",
              },
            ].map((person) => (
              <div key={person.name} className="border-t border-rule-light pt-6">
                <TeamMemberImage
                  name={person.name}
                  image={person.image}
                  zoom={person.name === "GYAN PATHAK"}
                />
                <span className="inline-block min-w-[120px] border-b border-dashed border-on-paper-dim pb-1 font-fraunces text-[1.02rem] italic text-on-paper-dim">
                  {person.name}
                </span>
                <span className="mt-2 block max-w-[140px] min-w-[90px] border-b border-dashed border-on-paper-dim pb-1 text-[13px] text-on-paper-dim">
                  {person.role}
                </span>
                <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-[12px] text-on-paper-dim">
                  <a
                    href={person.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="border-b border-dashed border-on-paper-dim pb-1 transition-colors hover:text-on-paper"
                  >
                    LinkedIn ID
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black py-[4.5rem] pb-10">
        <div className="mx-auto max-w-[1080px] px-7">
          <h2
            id="waitlist"
            className="mb-[1.875rem] max-w-[20ch] font-fraunces text-[clamp(1.5rem,3vw,2rem)] font-medium text-on-dark"
          >
            Want to know when this goes live?
          </h2>

          <WaitlistForm id="footer-email" />

          <div className="mt-10 flex flex-col gap-3 border-t border-rule-dark pt-6 text-[13px] text-on-dark-dim sm:flex-row sm:flex-wrap sm:gap-x-8">
            <a
              href="https://www.linkedin.com/company/nirmaana/"
              target="_blank"
              rel="noreferrer"
              className="w-fit border-b border-dashed border-on-dark-dim pb-1 transition-colors hover:text-white"
            >
              LinkedIn:NIRMAANA
            </a>
            <a
              href="mailto:hello@yourcompany.com"
              className="w-fit border-b border-dashed border-on-dark-dim pb-1 transition-colors hover:text-white"
            >
              Email: hello@yourcompany.com
            </a>
          </div>

          <p className="mt-14 max-w-[64ch] border-t border-rule-dark pt-6 text-[12.5px] text-on-dark-dim">
            This page describes an early-stage concept currently under
            research and design. It is not a live product, and nothing on
            this page is financial, investment, tax or legal advice. Any
            future personalised investment recommendation will only be
            offered through the appropriate SEBI-registered channel.
          </p>
        </div>
      </footer>
    </main>
  );
}
