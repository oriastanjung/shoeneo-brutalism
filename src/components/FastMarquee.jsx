import React from "react";
import Marquee from "react-fast-marquee";
import { cn } from "../lib/utils";
import BurstStarSVG from "./BurstStarSVG";
function FastMarquee({ data, className, fillIconColor, direction }) {
  return (
    <Marquee
    direction={direction}
      className={cn(
        `uppercase flex justify-between flex-row py-6 gap-12`,
        className
      )}
      loop={0}
      autoFill
    >
      {data?.map((item, idx) => (
        <div className="flex gap-12 items-center">
          <h4 className="uppercase text-4xl font-extrabold " key={idx}>
            {item}
          </h4>{" "}
          <BurstStarSVG className="w-10 h-10 object-cover object-center mr-12" fillColor={fillIconColor} />
        </div>
      ))}
    </Marquee>
  );
}

export default FastMarquee;
