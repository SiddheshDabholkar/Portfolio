import React from "react";
import styles from "./ContactSection.module.scss";
import Link from "next/link";

import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";

const Links = [
  {
    id: 1,
    to: "https://www.linkedin.com/in/siddhesh-dabholkar-685036194",
    name: "Linkedin",
    icon: <AiOutlineLinkedin />,
  },
  {
    id: 3,
    to: "https://github.com/SiddheshDabholkar",
    name: "Github",
    icon: <AiOutlineGithub />,
  },
];

export default function ContactSection() {
  return (
    <div id="Contact" className={styles.Contact}>
      <div className={styles.ContactCon}>
        <h1 className={styles.ContactConH}>Contact</h1>
        <span className={styles.ContactConHeading}>
          Intrested in Working Together?
        </span>
        <p className={styles.ContactConPara}>
          Although I am student,I am constantly looking for freelancing and
          internship opportunities.If you want to turn your idea's into reality
          , dont hesitate to message me.
        </p>
        <div className={styles.ContactConLogoCont}>
          {Links.map((l) => (
            <Link href={l.to}>
              <div key={l.id} className={styles.ContactConLogoContLogo}>
                {l.icon}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
