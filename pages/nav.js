import React, { useState } from "react";
import { useSpring, animated } from "@react-spring/web";

export default function Nav() {
  const [open, set] = useState(false);
  const { size, ...rest } = useSpring({
    from: { size: "0%", background: "hotpink", x: 0 },
    to: {
      size: open ? "100%" : "0%",
      background: open ? "white" : "hotpink",
      x: open ? 0 : -700,
      y: open ? 0 : -300,
    },
  });

  const handleClick = () => {
    set((open) => !open);
  };

  return (
    <>
      <div className="flex flex-col">
        <div className="">
          <div
            className={`${open ? "" : "hidden"} w-10 h-10 bg-red-700 `}
            onClick={handleClick}
          ></div>
          <div
            className={`${!open ? "" : "hidden"} w-10 h-10 bg-green-700 `}
            onClick={handleClick}
          ></div>
        </div>
        <div className="flex items-center justify-center h-screen  w-full bg-blue-400 p-1">
          <animated.div
            style={{ ...rest, width: size, height: size }}
            className="relative  p-0  bg-white rounded-lg cursor-pointer shadow-md "
          ></animated.div>
        </div>
      </div>
    </>
  );
}
