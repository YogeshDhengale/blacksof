import React from "react";
import PartButton from "./PartButton";
import { motion } from "motion/react";
import { TRUCK_PARTS } from "@/lib/utils";

const TruckPartsStrip = ({
  onVideoChange,
  activeVideo,
}: {
  onVideoChange: (video: string) => void;
  activeVideo: string;
}) => {
  return (
    <motion.div
      className="flex w-full flex-1 items-center justify-end gap-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      {TRUCK_PARTS.map((part, index) => (
        <PartButton
          active={activeVideo === part.video}
          onClick={() => onVideoChange(part.video)}
          key={index}
          src={part.src}
          label={part.label}
        />
      ))}
    </motion.div>
  );
};

export default TruckPartsStrip;
