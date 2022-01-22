import React from "react";
import Lottie from "react-lottie";
import styles from "./HomeSection.module.scss";
import data from "/public/static/lottie/One.json";
import Typical from "react-typical";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: data,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

export default function HomeSection() {
  return (
    <div className={styles.Home} id="Home">
      {/* <div className={styles.HomeOne}>
        <span className={styles.HomeOneInText}>Hey there,I am</span>
        <span className={styles.HomeOneName}>Siddhesh.</span>
        <span className={styles.HomeOneSName}> Dabholkar.</span>
        <Typical
          className={styles.HomeOneTypical}
          steps={[
            "I am Software Engineer",
            1000,
            "I am Full stack web and mobile developer",
            1000,
            "I am Freelancer",
            1000,
            "I am Javascript enthusiasist",
            1000,
          ]}
          loop={Infinity}
          wrapper="p"
        />
        <button className={styles.HomeOneButton}>Resume</button>
      </div>
      <div className={styles.HomeTwo}>
        <Lottie options={defaultOptions} />
      </div> */}
    </div>
  );
}
