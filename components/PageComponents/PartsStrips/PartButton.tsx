import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

const PartButton = ({ src, label, onClick, active }: { src: string, label: string, onClick: () => void, active: boolean }) => {
  return (
    <button
      className={cn(
        "space-y-1 text-sm flex flex-col font-light items-center justify-center transition-opacity duration-300 hover:opacity-100 cursor-pointer opacity-50",
        active && "opacity-100"
      )}
      onClick={onClick}
    >
      <Image src={src} alt="label" width={90} height={70} className="max-h-14 object-contain" />
      <span>{label}</span>
    </button>
  );
};

export default PartButton;
