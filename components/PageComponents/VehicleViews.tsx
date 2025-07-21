"use client"

import React, { RefObject, useEffect, useRef, useState } from "react";
import { InView } from "../ui/in-view";
import CarView from "./CarView";
import TruckView from "./TruckView";
import CarPartsStrip from "./PartsStrips/CarPartsStrip";
import TruckPartsStrip from "./PartsStrips/TruckPartsStrip";
import VideoControlButton from "./VideoControlButton";
import { cn } from "@/lib/utils";

interface VerticalStripeProps {
  fillTop?: boolean;
}

const VerticalStripe: React.FC<VerticalStripeProps> = ({ fillTop = true }) => {
  return (
    <div className="space-y-16 h-max sticky top-18 text-white">
      <div className="h-full absolute inset-y-0 left-0 top-0 w-full flex">
        <div className="w-0.5 h-full relative overflow-hidden">
          {/* Background bar */}
          <div className="absolute top-0 left-0 w-full h-full bg-gray-700"></div>

          {/* Animated white fill */}
          <div
            className={`absolute left-0 w-full h-1/2 bg-white transition-all duration-700 ease-in-out ${
              fillTop ? "top-0" : "top-1/2"
            }`}
          ></div>
        </div>
      </div>
      {/* Passenger vehicles section */}
      <div className={cn("pl-8", fillTop ? "text-white" : "text-muted-foreground" )}>
        <h3 className="text-3xl md:text-4xl font-light mb-4">
          Passenger vehicles
        </h3>
        <p className="text-lg leading-relaxed">
          Revving up innovation from
          <br />
          interior to exterior.
        </p>
      </div>

      {/* Commercial vehicles section */}
      <div className={cn("pl-8", !fillTop ? "text-white" : "text-muted-foreground" )}>
        <h3 className="text-3xl md:text-4xl font-light mb-4">
          Commercial vehicles
        </h3>
        <p className="text-lg leading-relaxed">
          Advancing engineering
          <br />
          for heavy-duty vehicles.
        </p>
      </div>
    </div>
  );
};

interface StickySectionProps {
  className?: string;
  sectionRef: RefObject<HTMLDivElement | null>;
  scrollPercent: number;
}

const VehicleViews: React.FC<StickySectionProps> = ({
  className,
  sectionRef,
  scrollPercent,
}) => {
  const ref = useRef<HTMLVideoElement>(null!);
  const fillTopflag =
    scrollPercent <= 90 ? true : scrollPercent > 90 ? false : true;

  const [carSrc, setCarSrc] = React.useState("/assets/Passenger.mp4");
  const [truckSrc, setTruckSrc] = React.useState("/assets/truck.mp4");

  const [progress, setProgress] = useState(0);

  // Update progress as video plays
  useEffect(() => {
    const video = ref.current;
    const updateProgress = () => {
      if (video && video.duration) {
        const percent = (video.currentTime / video.duration) * 100;
        setProgress(percent);
      }
    };

    video?.addEventListener("timeupdate", updateProgress);
    return () => {
      video?.removeEventListener("timeupdate", updateProgress);
    };
  }, []);

  // Restart the video on button click
  const handleRestart = () => {
    const video = ref.current;
    if (video) {
      video.currentTime = 0;
      video.play();
    }
  };

  return (
    <div
      ref={sectionRef}
      className={cn("relative", className)}
    >
      {/* Sticky Visual */}
      <div className="sticky top-0 h-screen flex flex-col items-center gap-14 justify-center px-6">
        <div className="max-w-5xl flex items-center justify-center mx-auto text-center">
          <h2 className="text-white text-2xl md:text-5xl font-light sticky bottom-0">
            Evolving the drive with{" "}
            <span className="font-semibold">360-degree</span> nonwoven solutions
          </h2>
        </div>
        <InView
          variants={{
            hidden: { opacity: 0, y: 100, filter: "blur(4px)" },
            visible: { opacity: 1, y: 0, filter: "blur(0px)" },
          }}
          viewOptions={{ margin: "0px 0px -200px 0px" }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="h-[50vh] w-10/12"
        >
          <div className="gap-2 grid grid-cols-3">
            <VerticalStripe fillTop={fillTopflag} />
            <div className="h-full w-full col-span-2 flex items-center justify-center">
              {fillTopflag ? (
                <CarView src={carSrc} ref={ref} />
              ) : (
                <TruckView src={truckSrc} ref={ref} />
              )}
            </div>
          </div>
        </InView>
        <div className="h-[80px] mx-auto w-full max-w-7xl flex gap-10 items-center ">
          {fillTopflag ? (
            <CarPartsStrip activeVideo={carSrc} onVideoChange={setCarSrc} />
          ) : (
            <TruckPartsStrip activeVideo={truckSrc} onVideoChange={setTruckSrc} />
          )}
          <VideoControlButton
            handleRestart={handleRestart}
            progress={progress}
          />
        </div>
      </div>
    </div>
  );
};

export default VehicleViews;
