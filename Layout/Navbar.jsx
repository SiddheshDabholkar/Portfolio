import styles from "./Navbar.module.scss";
import { Link as SLink } from "react-scroll";

const Routes = [
  { id: 1, name: "Home", to: "Home" },
  { id: 2, name: "About", to: "About" },
  { id: 3, name: "Projects", to: "Projects" },
  { id: 4, name: "Contact", to: "Contact" },
];

export default function Navbar() {
  return (
    <div className={styles.Navbar}>
      <div className={styles.NavbarLogo}>Siddhesh</div>
      <div className={styles.NavbarRoutes}>
        {Routes.map((r) => (
          <SLink
            to={r.to}
            spy={true}
            smooth={true}
            offset={1}
            duration={500}
            className={styles.NavbarRoutesItem}
          >
            {r.name}
          </SLink>
        ))}
      </div>
    </div>
  );
}
