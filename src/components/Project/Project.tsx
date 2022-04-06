import React, { Fragment, useState } from "react";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
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
  const length = project.projectImages.length;

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
  return (
    <Fragment>
      <div className={styles.imageSection}>
        <FaArrowAltCircleLeft
          className={styles.leftArrow}
          onClick={prevImage}
        />
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
        <FaArrowAltCircleRight
          className={styles.rightArrow}
          onClick={nextImage}
        />
      </div>
      <div className={styles.textSection}>{project.projectTitle}</div>
      <p className={styles.projectText}>{project.projectText}</p>
    </Fragment>
  );
}
