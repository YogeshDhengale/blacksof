import { Pause } from "lucide-react";
import React from "react";

const VideoControlButton = ({
  handleRestart,
  progress,
}: {
  handleRestart: () => void;
  progress: number;
}) => {
  return (
    <button
      onClick={handleRestart}
      className="size-14 rounded-full border-2 border-border flex items-center justify-center cursor-pointer"
    >
      <Pause className="text-white w-5 h-5 z-10" />
    </button>
  );
};

export default VideoControlButton;
