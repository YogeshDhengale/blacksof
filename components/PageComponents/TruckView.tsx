"use client";

import { motion } from "motion/react";
import { useEffect, useImperativeHandle, useRef } from "react";

const TruckView = ({ref, src = "/assets/truck.mp4"}: {ref: React.RefObject<HTMLVideoElement>, src: string}) => {
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
      initial={{ scale: 0, opacity: 1, x: "-50%", top: 563 }}
      animate={{ scale: 1, opacity: 1, x: "0%", top: 0 }}
      exit={{ scale: 0, opacity: 0, x: "50%", top: 563 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="w-full max-h-[360px] video-slide-1 flex items-center justify-center self-center mx-auto"
    >
      <video
        ref={ref}
        autoPlay
        src={src}
        className="h-full max-h-[500px] object-cover rounded-lg shadow-lg"
        muted
        playsInline
        preload="metadata"
      />
    </motion.div>
  );
};

export default TruckView;
