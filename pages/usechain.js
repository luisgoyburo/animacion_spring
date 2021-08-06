import React, { useState } from "react";
import {
  useTransition,
  useSpring,
  useChain,
  config,
  animated,
  useSpringRef,
} from "@react-spring/web";
import data from "./data/data.js";

export default function UseChain() {
  const [open, set] = useState(false);

  const springApi = useSpringRef();
  const { size, ...rest } = useSpring({
    ref: springApi,
    config: config.stiff,
    from: { size: "20%", background: "hotpink" },
    to: {
      size: open ? "100%" : "20%",
      background: open ? "white" : "hotpink",
    },
  });
  const transApi = useSpringRef();
  const transition = useTransition(open ? data : [], {
    ref: transApi,
    trail: 400 / data.length,
    from: { opacity: 0, scale: 0 },
    enter: { opacity: 1, scale: 1 },
    leave: { opacity: 0, scale: 0 },
  });
  useChain(open ? [springApi, transApi] : [transApi, springApi], [
    0,
    open ? 0.1 : 0.6,
  ]);

  return (
    <div className="flex items-center justify-center h-screen w-full bg-blue-400 p-5">
      <animated.div
        style={{ ...rest, width: size, height: size }}
        className="relative grid grid-cols-4 p-6  bg-white rounded-lg cursor-pointer shadow-md gap-6"
        onClick={() => set((open) => !open)}
      >
        {transition((style, item) => (
          <animated.div
            className="w-full h-full bg-white rounded-sm"
            style={{ ...style, background: item.css }}
          />
        ))}
      </animated.div>
    </div>
  );
}
