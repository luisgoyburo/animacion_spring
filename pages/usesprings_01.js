import React, { useState, useEffect } from "react";
import { useTransition, animated } from "@react-spring/web";

const slides = ["TE COMPREN", "TE VEAN", "TE RECONOZCAN", "TE CONTACTEN"];

export default function UseSpring_01() {
  const [index, set] = useState(0);
  const transitions = useTransition(index, {
    key: index,
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 500 },
  });
  useEffect(() => {
    const t = setInterval(
      () => set((state) => (state + 1) % slides.length),
      4000
    );
    return () => clearTimeout(t);
  }, []);
  return (
    <div className="flex fill center">
      {transitions((style, i) => (
        <animated.div
          className="absolute top-0 left-0 w-96 h-96"
          style={{
            ...style,
          }}
        >
          {slides[i]}
        </animated.div>
      ))}
    </div>
  );
}
