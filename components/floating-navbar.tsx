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
import { Button } from "./ui/button";
import { LinkedinIcon } from "lucide-react";

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
          "bg-background border-black/.1 fixed inset-x-0 top-0 z-[5000] w-full border px-4 md:px-6 py-4 shadow",
        )}
        style={{
          backdropFilter: "blur(16px) saturate(180%)",
          border: "1px solid rgba(255, 255, 255, 0.125)",
        }}
      >
        <div className="flex items-center justify-between gap-4 max-w-7xl mx-auto">
        <div>
          <Link href={"/"}>
            <Image
              src={"/logo.svg"}
              width={146}
              height={41}
              alt="logo"
              className="h-full"
            />
          </Link>
        </div>
        <div className="items-center space-x-3 md:space-x-6 flex">
          <Button className="rounded-full">
            Contact Us
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full" aria-label="linkedin">
            <LinkedinIcon fill="currentColor" />
          </Button>
        </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default FloatingNav;
