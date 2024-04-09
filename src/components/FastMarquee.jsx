import React from "react";
import Marquee from "react-fast-marquee";
import { cn } from "../lib/utils";
import BurstStarSVG from "./BurstStarSVG";
function FastMarquee({ data, className, fillIconColor, direction }) {
  return (
    <Marquee
    direction={direction}
      className={cn(
        `uppercase flex justify-between flex-row py-3 lg:py-6 gap-7 lg:gap-12`,
        className
      )}
      loop={0}
      autoFill
    >
      {data?.map((item, idx) => (
        <div className="flex gap-7 lg:gap-12 items-center">
          <h4 className="uppercase text-lg md:text-2xl lg:text-4xl font-extrabold " key={idx}>
            {item}
          </h4>{" "}
          <BurstStarSVG className="w-7 h-7 md:w-10 md:h-10 object-cover object-center mr-7 lg:mr-12" fillColor={fillIconColor} />
        </div>
      ))}
    </Marquee>
  );
}

export default FastMarquee;
