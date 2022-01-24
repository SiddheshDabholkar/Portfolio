import React from "react";
import styles from "./Card.module.scss";

export default function Card({ heading, date }) {
  return (
    <div className={styles.Card}>
      <p className={styles.CardH}>{heading}</p>
      <p className={styles.CardP}>{date}</p>
    </div>
  );
}
