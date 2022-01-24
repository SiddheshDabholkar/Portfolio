import React from "react";
import styles from "./About.module.scss";
import TimeLine from "../components/TimeLine";

export default function About() {
  return (
    <div id="About" className={styles.About}>
      <div className={styles.AboutTop}>
        <h1 className={styles.AboutTopH}>About</h1>
      </div>
      <div className={styles.AboutBottom}>
        <div className={styles.AboutBottomP}>
          Hey there! My name is Siddhesh Dabholkar.I am Freelancer and an
          aspiring IT Engineer currently pursuing Bachelor of Engineering from
          Goa College Of Engineering which is located in India,Goa.
        </div>
        <p className={styles.AboutBottomH}>Education and Past Experience</p>
        <div className={styles.AboutBottomTimeline}>
          <TimeLine />
        </div>
      </div>
    </div>
  );
}
