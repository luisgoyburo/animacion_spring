import { useRef, useState } from "react";
import { useSpring, animated, config } from "react-spring";
import { useControls } from "leva";

const calc = (x, y, rect) => [
  -(y - rect.top - rect.height / 2) / 5,
  (x - rect.left - rect.width / 2) / 5,
  1.4,
];
const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

export default function Trans_Rot_Scal_Presets() {
  const configList = Object.keys(config);
  const ref = useRef(null);
  const [xys, set] = useState([0, 0, 1]);
  const { preset } = useControls({
    preset: { value: "default", options: configList },
  });
  const props = useSpring({ xys, config: config[preset] });

  return (
    <div
      className="w-full h-full flex items-center justify-center overflow-hidden"
      ref={ref}
    >
      <animated.div
        className="w-52 h-52 bg-pink-400 rounded-xl m-52 transition-shadow "
        style={{ transform: props.xys.to(trans) }}
        onMouseLeave={() => set([0, 0, 1])}
        onMouseMove={(e) => {
          const rect = ref.current.getBoundingClientRect();
          set(calc(e.clientX, e.clientY, rect));
        }}
      />
    </div>
  );
}
