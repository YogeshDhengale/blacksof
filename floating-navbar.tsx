"use client";
import React, { useState } from "react";
import Image from "next/image";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";
import Link from "next/link";
import { cn } from "@/lib/utils";

function FloatingNav() {
  const { scrollYProgress } = useScroll();

  // set true for the initial state so that nav bar is visible in the hero section
  const [visible, setVisible] = useState(true);
  // const [openMenu, setOpenMenu] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      const direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        // also set true for the initial state
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.5,
        }}
        className={cn(
          "bg-background/50 border-black/.1 fixed inset-x-0 top-5 z-[5000] mx-auto flex w-[min(90%,700px)] items-center justify-between space-x-4 rounded-full border px-6 py-4 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] lg:top-12",
        )}
        style={{
          backdropFilter: "blur(16px) saturate(180%)",
          border: "1px solid rgba(255, 255, 255, 0.125)",
        }}
      >
        <div>
          <Link href={"/"}>
            <Image
              src={"/logo.svg"}
              width={28}
              height={18}
              alt="logo"
            />
          </Link>
        </div>
        <div className="hidden items-center space-x-2 md:flex">
          {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default FloatingNav;
