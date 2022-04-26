import React, { Fragment, useState } from "react";
import {
  MdOutlineArrowBackIosNew,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
import { BsCircleFill, BsCircle } from "react-icons/bs";
import styles from "./project.module.css";

interface projectLayout {
  project: {
    projectId: number;
    projectTitle: string;
    projectText: string;
    projectImages: string[];
    projectTags: string[];
  };
  projectIndex: number;
}

export default function Project({ project, projectIndex }: projectLayout) {
  const [current, setCurrent] = useState(0);
  const [length, setLength] = useState(project.projectImages.length);
  const [aboutSection, setAboutSection] = useState(true);
  const [githubSection, setGithubSection] = useState(false);
  const [siteSection, setSiteSection] = useState(false);

  function nextImage() {
    setCurrent(current === length - 1 ? 0 : current + 1);
  }

  function prevImage() {
    setCurrent(current === 0 ? length - 1 : current - 1);
  }

  // Returns nothing if there is no data
  if (
    !Array.isArray(project.projectImages) ||
    project.projectImages.length <= 0
  ) {
    return null;
  }

  function toggleAboutSection() {
    setGithubSection(false);
    setAboutSection(true);
    setSiteSection(false);
  }
  function toggleSiteSection() {
    setGithubSection(false);
    setAboutSection(false);
    setSiteSection(true);
  }
  function toggleGithubSection() {
    setGithubSection(true);
    setAboutSection(false);
    setSiteSection(false);
  }

  return (
    <span className={styles.project}>
      <div className={styles.imageSection}>
        <div className={styles.leftArrowDiv}>
          <MdOutlineArrowBackIosNew
            className={styles.leftArrow}
            onClick={prevImage}
          />
        </div>
        {project.projectImages.map((image, index) => {
          return (
            <div
              className={index === current ? "imageActive" : "imageNotActive"}
            >
              {index === current && (
                <img
                  className={styles.image}
                  src={image}
                  alt="Shows aspects of the project displayed"
                ></img>
              )}
            </div>
          );
        })}
        <div className={styles.rightArrowDiv}>
          <MdOutlineArrowForwardIos
            className={styles.rightArrow}
            onClick={nextImage}
          />
        </div>
      </div>
      <span className={styles.infoSection}>
        <div className={styles.projectSections}>
          <span className={styles.projectTab} onClick={toggleAboutSection}>
            <p className={styles.projectTabText}>About</p>
          </span>
          <span className={styles.projectTab} onClick={toggleGithubSection}>
            <p className={styles.projectTabText}>Github</p>
          </span>
          {/* <span className={styles.projectTab}>
            <p className={styles.projectTabText}>twitter</p>
          </span> */}
          <span className={styles.projectTab} onClick={toggleSiteSection}>
            <p className={styles.projectTabText}>Site</p>
          </span>
          {/* <img src="https://i.lensdump.com/i/rl4SJA.png" alt="github logo"></img> */}
        </div>
        <div className={styles.textSection}>
          <p className={styles.projectTitle}>{project.projectTitle}</p>{" "}
          {aboutSection && (
            <p className={styles.projectText}>{project.projectText}</p>
          )}
          {githubSection && (
            <p className={styles.projectText}>
              Github images and links to repo here
            </p>
          )}
          {siteSection && <p className={styles.projectText}>Site link here</p>}
        </div>
      </span>
    </span>
  );
}
