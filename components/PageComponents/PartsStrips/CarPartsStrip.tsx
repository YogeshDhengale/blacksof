import React from "react";
import PartButton from "./PartButton";
import { motion } from "motion/react";
import { CAR_PARTS } from "@/lib/utils";

const CarPartsStrip = ({ onVideoChange, activeVideo }: { onVideoChange: (video: string) => void, activeVideo: string }) => {
  return (
    <motion.div
      className="flex flex-1 w-full items-center justify-end gap-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      {CAR_PARTS.map((part, index) => (
        <PartButton active={activeVideo === part.video} key={index} onClick={() => onVideoChange(part.video)} src={part.src} label={part.label} />
      ))}
    </motion.div>
  );
};

export default CarPartsStrip;
