import React from "react";
import styles from "./Project.module.scss";
import Image from "next/image";
import Link from "next/link";
import { BiLinkExternal } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import { projectsData } from "../data/ProjectData";

export default function Project() {
  const ImageSec = ({ d }) => (
    <div className={styles.ProjectContRowImg}>
      <Image src={d.image} className={styles.ProjectContRowImgStyle} />
    </div>
  );

  const DesSec = ({ d }) => (
    <div className={styles.ProjectContRowDes}>
      {/* <RotatingDivs /> */}
      <div className={styles.ProjectContRowDes4}>
        <div>
          <span>{d.name}</span>
        </div>
        <div className={styles.ProjectContRowDes4Cont}>
          <p>{d.description}</p>
        </div>
        <div className={styles.ProjectContRowDes4Tech}>
          {d.technologies.map((t) => {
            const Icon = t.icon;
            return <Icon className={styles.ProjectContRowDes4TechIcon} />;
          })}
        </div>
        <div className={styles.ProjectContRowDes4Link}>
          <Link href={d.githubLink}>
            <BsGithub />
          </Link>
          {d.liveLink && (
            <Link href={d.liveLink}>
              <BiLinkExternal />
            </Link>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div className={styles.Project} id="Projects">
      <h1 className={styles.ProjectH}>Project</h1>
      <div className={styles.ProjectCont}>
        {projectsData.map((d) => (
          <>
            {d.id % 2 === 0 ? (
              <div key={d.id} className={styles.ProjectContRow}>
                <ImageSec d={d} />
                <DesSec d={d} />
              </div>
            ) : (
              <div key={d.id} className={styles.ProjectContRevCol}>
                <DesSec d={d} />
                <ImageSec d={d} />
              </div>
            )}
          </>
        ))}
      </div>
    </div>
  );
}
