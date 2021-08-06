import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";

import { animated, useSpring } from "react-spring";
import { useTransition } from "@react-spring/web";
import VisibilitySensor from "react-visibility-sensor-v2";

const slides = ["Te Compren", "Te Vean", "Te Reconozcan", "Te Contacten"];

export default function UseEffect_01() {
  // react spring para mobil

  const styles_necesitas = useSpring({
    loop: false,
    from: { opacity: 0, x: -300 },
    to: { opacity: 1, x: 0 },
    config: { duration: 2000 },
    delay: 200,
  });

  const styles_comencemos = useSpring({
    loop: false,
    from: { opacity: 0, y: 200 },
    to: { opacity: 1, y: 0 },
    config: { duration: 2000 },
    delay: 500,
  });

  const styles_creamos = useSpring({
    loop: false,
    from: { opacity: 0, y: 200 },
    to: { opacity: 1, y: 0 },
    config: { duration: 2500 },
    delay: 1000,
  });

  // useTransition PARA TE COMPREN:

  const [index, set] = useState(0);
  const transitions = useTransition(index, {
    key: index,
    from: {
      position: "absolute",
      top: 72,
      left: 0,
      right: 0,
      width: "auto",
      opacity: 0,
    },
    enter: { opacity: 1 },
    leave: { opacity: 0 }, // OJO LEAVE HACE QUE APAREZCAN DOS ELEMENTOS AL MISMO TIEMPO
    // Y AGREGA UN ESPACIO VERTICAL EN LOS CAMBIOS, para corregirlo hay que agregar
    // position absolute a 'from' y para que centre el texto top, left y right y width = auto
    config: { duration: 1000, friction: 0 },
    // trail: 5000, no funciona
    delay: 500,
  });
  useEffect(() => {
    const t = setInterval(
      () => set((state) => (state + 1) % slides.length),
      4000
    );
    return () => clearTimeout(t);
  }, []);

  // react spring para PC

  const styles_necesitas_pc = useSpring({
    loop: false,
    from: { opacity: 0, x: -300 },
    to: { opacity: 1, x: 0 },
    config: { duration: 2000 },
  });

  const styles_comencemos_pc = useSpring({
    loop: false,
    from: { opacity: 0, y: 200 },
    to: { opacity: 1, y: 0 },
    config: { duration: 3000 },
    delay: 500,
  });

  const styles_creamos_pc = useSpring({
    loop: false,
    from: { opacity: 0, y: 200 },
    to: { opacity: 1, y: 0 },
    config: { duration: 4000 },
    delay: 500,
  });

  const styles_cohete = useSpring({
    loop: false,
    from: { opacity: 0, y: 200 },
    to: { opacity: 1, y: 0 },
    config: { duration: 4000 },
    delay: 500,
  });

  // useTransition PARA TE COMPREN PC:

  const [index_pc, set_pc] = useState(0);
  const transitions_pc = useTransition(index_pc, {
    key: index_pc,
    from: {
      position: "absolute",
      top: 72,
      left: 0,
      right: 0,
      width: "auto",
      opacity: 0,
    },
    enter: { opacity: 1 },
    leave: { opacity: 0 }, // OJO LEAVE HACE QUE APAREZCAN DOS ELEMENTOS AL MISMO TIEMPO
    // Y AGREGA UN ESPACIO VERTICAL EN LOS CAMBIOS, para corregirlo hay que agregar
    // position absolute a 'from' y para que centre el texto top, left y right y width = auto
    config: { duration: 1000, friction: 0 },
    // trail: 5000, no funciona
    delay: 500,
  });
  useEffect(() => {
    const t = setInterval(
      () => set_pc((state) => (state + 1) % slides.length),
      4000
    );
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <div className="z-0 relative hidden sm:flex  mt-20 pt-2  mb-8 bg-gradient-to-l from-blue-400 via-azulaper to-azulaper ">
        <Image
          priority
          src="/images/fondo_banner_pc-02.png"
          height={792}
          width={1920}
          quality={100}
          alt=""
          // layout="responsive"
        />
        <div className="absolute lg:z-20 text-center md:top-12 md:left-20  lg:top-28 lg:left-48 ">
          <animated.div style={{ ...styles_necesitas_pc }}>
            <p className="text-shadow-01 font-titillium sm:text-xl md:text-2xl lg:text-3xl font-bold text-white px-20">
              Necesitas un Sitio Web, o si ya lo tienes,
            </p>
            <p className="text-shadow-01 font-titillium sm:text-xl  md:text-2xl lg:text-3xl font-bold text-white px-2">
              necesitas que:
            </p>
          </animated.div>
          {/* 
          <animated.div style={{ ...styles_tecompren }}>
            <p className="text-shadow-01 font-titillium  text-2xl font-bold text-naranjaaper pt-7 pb-10">
              TE COMPREN
            </p>
          </animated.div> */}

          {transitions_pc((style, i) => (
            <animated.div
              className=" text-center text-shadow-01 font-titillium sm:text-2xl lg:text-3xl font-bold text-naranjaaper sm:pt-2 md:pt-4 md:pb-10 lg:pt-7 lg:pb-10"
              style={{
                ...style,
              }}
            >
              {slides[i]}
            </animated.div>
          ))}

          <div className="absolute lg:z-20 text-center sm:top-36 md:top-36  lg:top-40">
            <animated.div style={{ ...styles_comencemos_pc }}>
              <Link href="/#contactanos">
                <a className="w-32 font-titillium text-center pb-2 pt-2 mb-0 sm:text-base  lg:text-xl  lg:inline-flex lg:w-auto  px-5   rounded-lg text-white font-bold items-center justify-center bg-naranjaaper hover:bg-white hover:text-naranjaaper">
                  ¡Comencemos!
                </a>
              </Link>
            </animated.div>
            <animated.div style={{ ...styles_creamos_pc }}>
              <p className=" font-titillium lg:text-2xl  font-regular text-white px-10 py-6">
                Creamos tu identidad, tus activos digitales, y te asesoramos
                para que optimices tu inversión publicitaria de{" "}
                <span className="text-naranjaaper font-bold">
                  forma gratuita,
                </span>{" "}
                en todos nuestros paquetes
              </p>
            </animated.div>
          </div>
        </div>

        <div
          id="image30DivLG"
          className=" hidden absolute z-40 sm:top-2 sm:right-12 md:top-6 md:right-24 lg:top-24 lg:right-72"
        >
          <Image
            priority
            id="image30LG"
            src="/images/30dcto.png"
            height={242}
            width={180}
          />
        </div>
      </div>
      <div className="sm:hidden  relative mt-16 bg-gradient-to-b from-blue-400 via-azulaper to-azulaper ">
        {/* <animated.div style={{ ...styles_fondo }}> */}
        <Image
          //className="bg-blend-multiply z-10"
          src="/images/fondo_banner_mobil.png"
          height={984}
          width={621}
          quality={100}
          alt=""
          // layout="fill"
        />
        {/* </animated.div> */}
        <div className=" absolute top-0 left-0 bg-blend-multiply z-20">
          {/* <animated.div
            style={{ ...styles_flechas }}
          > */}
          <Image
            priority
            src="/images/flechas_mobil.png"
            height={984}
            width={621}
            quality={100}
            alt=""
            // layout="fill"
          />
          {/* </animated.div> */}
        </div>

        <div className="absolute lg:z-20 text-center  top-44 z-30 ">
          <animated.div style={{ ...styles_necesitas }}>
            <p className="text-shadow-01 font-titillium  text-xl font-bold text-white px-20">
              Necesitas un Sitio Web, o si ya lo tienes,
            </p>
            <p className="text-shadow-01 font-titillium  text-xl font-bold text-white px-2">
              necesitas que:
            </p>
          </animated.div>

          {transitions((style, i) => (
            <animated.div
              className=" text-center text-shadow-01 font-titillium  text-2xl font-bold text-naranjaaper pt-9 pb-10"
              style={{
                ...style,
              }}
            >
              {slides[i]}
            </animated.div>
          ))}

          <div className="absolute lg:z-20 text-center  top-40">
            <animated.div style={{ ...styles_comencemos }}>
              <Link href="/#contactanos">
                <a className="w-32 font-titillium text-center pb-1 mb-1 text-xl sm:text-sm  lg:text-base  lg:inline-flex lg:w-auto  px-5 pt-1  rounded-lg text-white font-bold items-center justify-center bg-naranjaaper hover:bg-azulaper hover:text-naranjaaper">
                  ¡Comencemos!
                </a>
              </Link>
            </animated.div>
            <animated.div style={{ ...styles_creamos }}>
              <p className=" font-titillium text-base  font-regular text-white p-10">
                Creamos tu identidad, tus activos digitales, y te asesoramos
                para que optimices tu inversión publicitaria de{" "}
                <span className="text-naranjaaper font-bold">
                  forma gratuita,
                </span>{" "}
                en todos nuestros paquetes
              </p>
            </animated.div>
          </div>
        </div>
      </div>
      <div className="pt-40">
        <VisibilitySensor partialVisibility>
          {({ isVisible }) =>
            isVisible ? (
              <animated.div
                style={{
                  ...styles_cohete,
                }}
              >
                <Image
                  priority
                  src="/images/cohete.png"
                  width={510}
                  height={353}
                  alt=""
                  quality={100}
                  objectFit="scale-down"
                />
                <div> I am {isVisible ? "visible" : "hidden"}</div>
              </animated.div>
            ) : (
              <div>No</div>
            )
          }
        </VisibilitySensor>
      </div>
    </>
  );
}
