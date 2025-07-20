"use client";

import React, { useEffect, useRef, useState } from "react";
import { InView } from "../ui/in-view";
import VehicleViews from "./VehicleViews";
import ResponsiveView from "./ResponsiveView";

const AnimatedSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [percent, setPercent] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (section) {
        const rect = section.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        const sectionScrollLength = section.offsetHeight - viewportHeight;

        const scrolledInSection = viewportHeight - rect.top;

        const progress = Math.min(
          Math.max((scrolledInSection / sectionScrollLength) * 100, 0),
          100
        );
        setPercent(progress);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full min-h-screen bg-black text-white py-6 lg:py-28">
      <InView
        variants={{
          hidden: { opacity: 0, y: 200 },
          visible: { opacity: 1, y: 0 },
        }}
        viewOptions={{ margin: "0px 0px -200px 0px" }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="sticky bottom-0"
      >
        <VehicleViews
          className="bg-black text-white h-[300vh] hidden lg:block"
          sectionRef={sectionRef}
          scrollPercent={percent}
        />
        <ResponsiveView />
      </InView>
    </div>
  );
};

export default AnimatedSection;
