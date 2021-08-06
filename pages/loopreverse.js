import React from "react";
import { useRef } from "react";
import { animated, useSpring } from "react-spring";
export default function LoopReverse() {
  const styles = useSpring({
    loop: { reverse: true },
    from: { x: 0 },
    to: { x: 100 },
  });

  return (
    <animated.div
      //   style={{
      //     width: 80,
      //     height: 80,
      //     backgroundColor: "#46e891",
      //     borderRadius: 16,
      //     ...styles,
      //   }}
      style={{ ...styles }}
      className="w-52 h-52 bg-green-600 rounded-lg"
    />
  );
}
