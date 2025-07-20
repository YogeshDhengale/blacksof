"use client";

import React, { useEffect, useImperativeHandle, useRef } from "react";
import { motion } from "motion/react";

const CarView = ({
  ref,
  src = "/assets/Passenger.mp4",
}: {
  ref: React.RefObject<HTMLVideoElement>;
  src: string;
}) => {
  const localRef = useRef<HTMLVideoElement>(null);

  // Expose the internal ref to parent if needed
  useImperativeHandle(ref, () => localRef.current as HTMLVideoElement);

  useEffect(() => {
    const video = localRef.current;
    if (video) {
      video.pause();
      video.currentTime = 0;
      video.load(); // Reset the source and reload
      video.play().catch(() => {}); // Prevent unhandled promise rejection
    }
  }, [src]);
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0, opacity: 0, y: -200 }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
      className="w-full video-slide-1 self-center mx-auto"
    >
      <video
        ref={ref}
        src={src}
        className="w-full h-full object-cover rounded-lg shadow-lg"
        autoPlay
        muted
        playsInline
        preload="metadata"
      />
    </motion.div>
  );
};

export default CarView;
