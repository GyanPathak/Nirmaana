"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { MoveRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MeshGradientSVG } from "@/components/ui/shader-svg";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";

function Hero() {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => ["amazing", "new", "wonderful", "beautiful", "smart"],
    [],
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <header className="relative w-full overflow-hidden border-b border-white/15 bg-[#080808]">
      <div className="pointer-events-none absolute inset-0 opacity-80">
        <StarsBackground starDensity={0.0001} />
        <ShootingStars
          minSpeed={6}
          maxSpeed={16}
          minDelay={1800}
          maxDelay={5000}
          starColor="#ffffff"
          trailColor="#d4d4d4"
          starWidth={28}
          starHeight={2}
        />
      </div>
      <div className="mx-auto max-w-[1080px] px-7">
        <div className="relative z-10 grid items-center gap-10 py-16 lg:grid-cols-[minmax(0,1fr)_minmax(260px,360px)] lg:gap-16 lg:py-24">
          <div className="flex min-w-0 flex-col items-center gap-8 text-center lg:items-start lg:text-left">

            <div className="flex flex-col gap-4">
              <h1 className="max-w-2xl text-5xl tracking-tighter text-on-dark md:text-7xl">
                <span className="text-white">This is something</span>
                <span className="relative flex w-full justify-center overflow-hidden text-center md:pb-4 md:pt-1 lg:justify-start lg:text-left">
                  &nbsp;
                  {titles.map((title, index) => (
                    <motion.span
                      key={title}
                      className="absolute font-semibold text-white"
                      initial={{ opacity: 0, y: "-100%" }}
                      transition={{ type: "spring", stiffness: 50 }}
                      animate={
                        titleNumber === index
                          ? { y: 0, opacity: 1 }
                          : { y: titleNumber > index ? -150 : 150, opacity: 0 }
                      }
                    >
                      {title}
                    </motion.span>
                  ))}
                </span>
              </h1>

              <p className="mx-auto max-w-2xl text-lg leading-relaxed tracking-tight text-on-dark-dim md:text-xl lg:mx-0">
                Getting your first paycheck is exciting but knowing what to do with it isn't. Skip the stock tips and the guesswork. We start with your income, your goals and your actual life, then build the plan around that.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="border-white/70 bg-transparent text-white hover:bg-white hover:text-black"
                variant="outline"
              >
              <a
                href="https://www.instagram.com/_.nirmaana_/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4"
              >
                Talk to us <PhoneCall className="h-4 w-4" />
              </a>
              </Button>
              <Button
                size="lg"
                className="gap-4 bg-white text-black hover:bg-neutral-200"
                asChild
              >
                <a href="#waitlist">
                  Join the waitlist <MoveRight className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>

          <div className="mx-auto w-full max-w-[280px] lg:max-w-[340px]">
            <MeshGradientSVG />
          </div>
        </div>
      </div>
    </header>
  );
}

export { Hero };
