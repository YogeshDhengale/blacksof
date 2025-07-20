import React from "react";
import { InView } from "../ui/in-view";
import { VideoCarousal } from "./VideoCarousal";
import { CAR_PARTS, TRUCK_PARTS } from "@/lib/utils";

const VIEWS = [
    {
        title: "Passenger vehicles",
        description: <>Revving up innovation from <br /> interior to exterior.</>,
        parts: CAR_PARTS,
    },
    {
        title: "Commercial vehicles",
        description: <>Advancing engineering <br /> for heavy-duty vehicles.</>,
        parts: TRUCK_PARTS,
    },
]

const ResponsiveView = () => {
  return (
    <div className="lg:hidden flex flex-col items-center gap-14 justify-center px-6 py-10">
      <div className="max-w-sm mx-auto mt-10 text-center">
        <InView
          variants={{
            hidden: { opacity: 0, y: 100, filter: "blur(4px)" },
            visible: { opacity: 1, y: 0, filter: "blur(0px)" },
          }}
          viewOptions={{ margin: "0px 0px -200px 0px" }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <h2 className="text-white text-3xl md:text-5xl font-light sticky bottom-0">
            Evolving the drive with{" "}
            <span className="font-semibold">360-degree</span> nonwoven solutions
          </h2>
        </InView>
      </div>
      {
        VIEWS.map((view, index) => (
          <div className="max-w-sm mx-auto mt-6 text-center" key={index}>
            <InView
              variants={{
                hidden: { opacity: 0, y: 100, filter: "blur(4px)" },
                visible: { opacity: 1, y: 0, filter: "blur(0px)" },
              }}
              viewOptions={{ margin: "0px 0px -200px 0px" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div>
                <h3 className="text-primary text-xl font-semibold">
                  {view.title}
                </h3>
                <p className="text-lg text-gray-300 font-light leading-relaxed">
                  {view.description}
                </p>
              </div>
              <div className="mt-4">
                <VideoCarousal items={view.parts} />
              </div>
            </InView>
          </div>
        ))}
    </div>
  );
};

export default ResponsiveView;
