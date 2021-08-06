import React from "react";
import { useRef } from "react";
import { animated, useSpring } from "react-spring";
export default function LoopInherited() {
  const n = useRef(0);
  const styles = useSpring({
    from: { x: 0 },
    config: { duration: 1000, friction: 20 },
    loop: {
      reset: true,
      x: 100,
    },
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
