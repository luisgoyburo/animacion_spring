import React from "react";
import { useRef } from "react";
import { animated, useSpring } from "react-spring";
export default function LoopCancel() {
  const [styles, animate] = useSpring(() => ({ x: 0 }));
  const onClick = () => {
    animate({ x: 100, delay: 500 });
    // USO DE CANCEL (SI SE SACA, LA LINEA posterior SE EJECUTA)
    // previene la orden anterior:
    animate({ cancel: true });
  };

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
      onClick={onClick}
      className="w-52 h-52 bg-green-600 rounded-lg"
    />
  );
}
