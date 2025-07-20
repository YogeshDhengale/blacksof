import {
  Carousel,
  CarouselContent,
  CarouselIndicator,
  CarouselItem,
} from "@/components/ui/carousel";

export function VideoCarousal({
  items,
}: {
  items: {
    src: string;
    label: string;
    video: string;
  }[];
}) {
  return (
    <div className="relative w-full max-w-xs">
      <Carousel>
        <CarouselContent>
          {items.map((item, index) => (
            <CarouselItem key={index} className="p-8">
              <video
                src={item.video}
                className="h-full object-cover rounded-lg shadow-lg"
                autoPlay
                muted
                playsInline
                preload="metadata"
              />
              <p className="text-base text-white mt-4">{item.label}</p>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselIndicator />
      </Carousel>
    </div>
  );
}
