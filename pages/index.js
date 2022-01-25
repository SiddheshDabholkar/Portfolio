import HomeSection from "../section/HomeSection";
import ContactSection from "../section/ContactSection";
import About from "../section/About";
import styles from "../styles/Home.module.scss";
import Project from "../section/Project";

export default function Home() {
  return (
    <div className={styles.Home}>
      {/* <HomeSection /> */}
      {/* <About /> */}
      <Project />
      {/* <ContactSection /> */}
    </div>
  );
}
