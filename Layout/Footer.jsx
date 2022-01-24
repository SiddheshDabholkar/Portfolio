import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <div className={styles.Footer}>
      <span className={styles.FooterS}>
        All rights reserved &copy; {new Date().getFullYear()}
      </span>
    </div>
  );
}
