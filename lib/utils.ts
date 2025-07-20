import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const CAR_PARTS = [
  { src: "/images/car-body.png", label: "Complete Body", video: "/assets/Passenger.mp4" },
  { src: "/images/car-front.png", label: "Front", video: "/assets/car-front.mp4" },
  { src: "/images/car-cabin.png", label: "Cabin", video: "/assets/car-cabin.mp4" },
  { src: "/images/car-trunk.png", label: "Trunk", video: "/assets/car-trunk.mp4" },
  { src: "/images/car-exterior.png", label: "Exterior", video: "/assets/car-exterior.mp4" },
];

export const TRUCK_PARTS = [
  {
    src: "/images/commercial-body.svg",
    label: "Complete Body",
    video: "/assets/truck.mp4",
  },
  {
    src: "/images/commercial-engine.svg",
    label: "Engine",
    video: "/assets/truck-engine.mp4",
  },
  {
    src: "/images/commercial-cabin.svg",
    label: "Cabin",
    video: "/assets/truck-cabin.mp4",
  },
];
