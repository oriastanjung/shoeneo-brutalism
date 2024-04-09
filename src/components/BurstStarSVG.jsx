import React from "react";

function BurstStarSVG({ className, fillColor }) {
  return (
    <svg
      class={className}
      viewBox="0 0 41 41"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21.9946 0.770476L23.8947 18.0589L40.8792 21.804L23.5908 23.7042L19.8457 40.6887L17.9455 23.4003L0.961038 19.6551L18.2494 17.755L21.9946 0.770476Z"
        fill={fillColor}
      ></path>
    </svg>
  );
}

export default BurstStarSVG;
