import React, { useState } from "react";
import Project from "../Project/Project";
import styles from "./projectViewer.module.css";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
export default function ProjectViewer() {
  const [current, setCurrent] = useState(0);
  const length = mockProjectData.length;

  function nextProject() {
    setCurrent(current === length - 1 ? 0 : current + 1);
  }

  function prevProject() {
    setCurrent(current === 0 ? length - 1 : current - 1);
  }

  // Returns nothing if there is no data
  if (!Array.isArray(mockProjectData) || mockProjectData.length <= 0) {
    return null;
  }

  return (
    <div className={styles.wholeProjectSection}>
      <div className={styles.exploreSection}></div>
      <div className={styles.projectSection}>
        <FaArrowAltCircleLeft
          className={styles.leftArrow}
          onClick={prevProject}
        />
        {mockProjectData.map((project, index) => {
          return (
            <div
              className={
                index === current ? "projectActive" : "projectNotActive"
              }
            >
              {index === current && (
                <Project project={project} projectIndex={index} />
              )}
            </div>
          );
        })}
        <FaArrowAltCircleRight
          className={styles.rightArrow}
          onClick={nextProject}
        />
      </div>
    </div>
  );
}

const mockProjectData = [
  {
    projectId: 1,
    projectTitle: "First project!",
    projectText: "This is the first project go easy on me.",
    projectImages: [
      "https://images.unsplash.com/photo-1570824104453-508955ab713e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1011&q=80",
      "https://images.unsplash.com/photo-1543852786-1cf6624b9987?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    ],
    projectTags: ["cats", "really cute"],
  },
  {
    projectId: 2,
    projectTitle: "Second project!",
    projectText: "This is the second project go even easier on me.",
    projectImages: [
      "https://images.unsplash.com/photo-1548802673-380ab8ebc7b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
      "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    ],
    projectTags: ["cats", "cute"],
  },
];
