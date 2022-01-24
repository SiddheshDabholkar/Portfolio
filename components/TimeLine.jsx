import React from "react";
import styles from "./TimeLine.module.scss";
import Card from "./Card";

import Hat from "../public/static/timeline/mortarboard-education-svgrepo-com.svg";
import Edu from "../public/static/timeline/computer-svgrepo-com.svg";

const data = [
  {
    id: 1,
    name: "pre-College",
    icon: Hat,
    description: "Haramal Panchakroshi Shikshan Mandal",
    meta: "(2007-2016)",
  },
  {
    id: 2,
    name: "Internship",
    icon: Edu,
    description: "React developer intern at Kalpas Innovation",
    meta: "(july 21 to sep 21 )",
  },
  {
    id: 3,
    name: "College",
    icon: Hat,
    description: "Goa College Of Engineering,IT",
    meta: "(2019-2023)",
  },
];

export default function TimeLine() {
  const Right = ({ d }) => {
    const Icon = d.icon;
    return (
      <div className={styles.TimeLineRowCont}>
        <Icon className={styles.TimeLineRowContIcon} />
        <span className={styles.TimeLineRowContText}>{d.name}</span>
      </div>
    );
  };
  const Middle = () => (
    <div className={styles.TimeLineRowMid}>
      <div className={styles.Line}></div>
      <div className={styles.Bubble}></div>
      <div className={styles.Line}></div>
    </div>
  );
  const Left = ({ d }) => (
    <div className={styles.TimeLineRowCont}>
      <Card heading={d.description} date={d.meta} />
    </div>
  );
  return (
    <div className={styles.TimeLine}>
      {data.map((d) => {
        return (
          <div key={d.id} className={styles.TimeLineRow}>
            {d.id % 2 !== 0 ? (
              <>
                <Right d={d} />
                <Middle />
                <Left d={d} />
              </>
            ) : (
              <>
                <Left d={d} />
                <Middle />
                <Right d={d} />
              </>
            )}
          </div>
        );
      })}
    </div>
  );
}
