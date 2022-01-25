import React from "react";
import styles from "./Project.module.scss";
import Image from "next/image";

import one from "/public/static/projects/one.jpg";
import RotatingDivs from "../components/RotatingDivs";

const data = [{ id: 1, img: one, name: "Just" }];

export default function Project() {
  return (
    <div className={styles.Project} id="Project">
      <span>Project</span>
      {/* <h1>Something I Have Worked On</h1> */}
      <div className={styles.ProjectCont}>
        {data.map((d) => (
          <div className={styles.ProjectContRow}>
            <div className={styles.ProjectContRowImg}>
              <Image src={d.img} className={styles.ProjectContRowImgStyle} />
            </div>
            <div className={styles.ProjectContRowDes}>
              <RotatingDivs />
              <div className={styles.ProjectContRowDes4}>{d.name}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
