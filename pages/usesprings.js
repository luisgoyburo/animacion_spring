import React, { useState, useRef } from "react";
import { animated, useSprings } from "react-spring";

export default function UseSpring() {
  const [on, toggle] = useState(false);

  const myRef = useRef();

  const items = [
    {
      color: "red",
      opacity: 0.5,
      text: "uno",
    },
    {
      color: "blue",
      opacity: 1,
      text: "dos",
    },
    {
      color: "green",
      opacity: 0.2,
      text: "tres",
    },
    {
      color: "orange",
      opacity: 0.8,
      text: "cuatro",
    },
  ];

  const springs = useSprings(
    items.length,
    items.map((item) => ({
      from: { color: "#fff", opacity: 0 },
      to: {
        color: on ? item.color : "#fff",
        opacity: on ? item.opacity : 0,
      },
    }))
  );

  return (
    <div>
      {springs.map((animation, index) => (
        <animated.div ref={myRef} key={index} style={animation}>
          {items[index].text}
        </animated.div>
      ))}

      <button onClick={() => toggle(!on)}>Change</button>
    </div>
  );
}
