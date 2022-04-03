import React, { Fragment } from "react";
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
  return (
    <Fragment>
      <div className={styles.imageSection}>{project.projectImages[0]}</div>
      <div className={styles.textSection}>{project.projectTitle}</div>
    </Fragment>
  );
}
