import React from "react";
import styles from "./Project.module.scss";
import Image from "next/image";
import Link from "next/link";
import { BiLinkExternal } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";

import RotatingDivs from "../components/RotatingDivs";
import Github from "/public/static/icons/icons8-github.svg";
import { projectsData } from "../data/ProjectData";

export default function Project() {
  return (
    <div className={styles.Project} id="Project">
      <span>Project</span>
      <div className={styles.ProjectCont}>
        {projectsData.map((d) => (
          <div key={d.id} className={styles.ProjectContRow}>
            <div className={styles.ProjectContRowImg}>
              <Image src={d.image} className={styles.ProjectContRowImgStyle} />
            </div>
            <div className={styles.ProjectContRowDes}>
              {/* <RotatingDivs /> */}
              <div className={styles.ProjectContRowDes4}>
                <div>
                  <span>{d.name}</span>
                </div>
                <div>
                  <p>{d.description}</p>
                </div>
                <div className={styles.ProjectContRowDes4Tech}>
                  {console.log(d.technologies.map((t) => t.icon))}
                  {d.technologies.map((t) => {
                    const Icon = t.icon;
                    return <Icon className={styles.ProjectContRowDes4TechIcon}/>;
                  })}
                </div>
                <div>
                  <Link href={d.githubLink}>
                    <BsGithub />
                  </Link>
                  <Link href={d.liveLink}>
                    <BiLinkExternal />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
