import React from "react";
import { animated, useSpring } from "react-spring";
export default function LoopProp() {
  const styles = useSpring({
    loop: false,
    from: { rotateZ: 0 },
    to: { rotateZ: 180 },
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
