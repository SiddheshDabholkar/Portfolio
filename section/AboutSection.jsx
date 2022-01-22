import React from "react";
import styles from "./AboutSection.module.scss";
import Image from "next/image";

export default function AboutSection() {
  return (
    <div id="About" className={styles.About}>
      <div className={styles.AboutOne}>
        <div className={styles.AboutOneCont}>
          <Image
            className={styles.AboutOneContImg}
            height="500px"
            width="500px"
            src="/static/images/one.jpeg"
          />
        </div>
      </div>
      <div className={styles.AboutTwo}>
        <div className={styles.AboutTwoCont}>
          <h1 className={styles.AboutTwoContHeading}># About me</h1>
          <p className={styles.AboutTwoContPara1}>
            Hey there! My name is Siddhesh Dabholkar.I am Freelancer and an
            aspiring Software Engineer currently pursuing Bachelor of
            Engineering from Goa College Of Engineering which is located in
            India,Goa.
          </p>
          <p className={styles.AboutTwoContPara2}>
            I am proficient in working with MERN stack and React native.I am
            fast learner and currently mastering fastify(node js
            framework),typescript,mysql and scss.I have also worked with
            c,c++,java,python,bash,Graphql and etc.
          </p>
          <p className={styles.AboutTwoContPara3}>
            Most of my projects are hosted on github.
          </p>
          <div className={styles.AboutTwoContButtonCont}>
            <button className={styles.AboutTwoContButtonContGithub}>
              Github
            </button>
            <button className={styles.AboutTwoContButtonContProjects}>
              Projects
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
