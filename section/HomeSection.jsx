import React, { useCallback, useRef } from "react";
import Lottie from "react-lottie";
import styles from "./HomeSection.module.scss";
import data from "/public/static/lottie/One.json";
import Typical from "react-typical";
import ReactCanvasConfetti from "react-canvas-confetti";

const canvasStyles = {
  position: "fixed",
  pointerEvents: "none",
  width: "100%",
  height: "100%",
  top: 0,
  left: 0,
};

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: data,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

export default function HomeSection() {
  const refAnimationInstance = useRef(null);

  const getInstance = useCallback((instance) => {
    refAnimationInstance.current = instance;
  }, []);

  const makeShot = useCallback((particleRatio, opts) => {
    refAnimationInstance.current &&
      refAnimationInstance.current({
        ...opts,
        origin: { y: 0.7 },
        particleCount: Math.floor(200 * particleRatio),
      });
  }, []);

  const fire = useCallback(() => {
    makeShot(0.25, {
      spread: 26,
      startVelocity: 55,
    });

    makeShot(0.2, {
      spread: 60,
    });

    makeShot(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8,
    });

    makeShot(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2,
    });

    makeShot(0.1, {
      spread: 120,
      startVelocity: 45,
    });
  }, [makeShot]);

  return (
    <>
      <ReactCanvasConfetti refConfetti={getInstance} style={canvasStyles} />
      <div className={styles.Home} id="Home">
        <div className={styles.HomeOne}>
          <div className={styles.HomeOneCont}>
            <span className={styles.HomeOneContInText}>Hey there,I am</span>
            <span className={styles.HomeOneContName}>Siddhesh.</span>
            <span className={styles.HomeOneContSName}> Dabholkar.</span>
            <Typical
              className={styles.HomeOneContTypical}
              steps={[
                "I am Full stack web developer",
                1000,
                "I am Full stack mobile developer",
                1000,
                "I am Freelancer",
                1000,
                "I am Javascript enthusiasist",
                1000,
              ]}
              loop={Infinity}
              wrapper="p"
            />
            <button className={styles.HomeOneContButton} onClick={fire}>
              <a download href="/resume.pdf">
                Resume
              </a>
            </button>
          </div>
        </div>
        <div className={styles.HomeTwo}>
          <Lottie options={defaultOptions} />
        </div>
      </div>
    </>
  );
}
