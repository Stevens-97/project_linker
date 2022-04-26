import React, { FormEvent, useEffect, useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import styles from "./exploreSection.module.css";
import { IoIosArrowUp } from "react-icons/io";

interface projectLayout {
  projectLayout: [
    projectId: number,
    projectTitle: string,
    projectText: string,
    projectImages: string[],
    projectTags: string[]
  ];
}

interface setProjectDataFunc {
  setProjectData: (arg0: any) => void;
  setLength: (arg0: any) => void;
  setCurrent: (arg0: any) => void;
}

export default function ExploreSection({
  setProjectData,
  setLength,
  setCurrent,
}: setProjectDataFunc) {
  const [foundPosts, setFoundPosts] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [toggleTags, setToggleTags] = useState(true);
  useEffect(() => {
    console.log("Entered useEffect");
    function changePosts() {
      console.log(searchQuery);
      if (foundPosts) {
        let filteredPosts = posts.filter((project: any) => {
          const postTags = project.projectTags.map((tag: any) =>
            tag.toLowerCase()
          );
          return postTags.includes(searchQuery);
        });
        if (filteredPosts.length > 0) {
          console.log(filteredPosts);
          setLength(filteredPosts.length);
          setCurrent(0);
          setProjectData(filteredPosts);
          setFoundPosts(false);
        } else if (filteredPosts.length === 0) {
          console.log(filteredPosts);
          setLength(posts.length);
          setCurrent(0);
          setProjectData(posts);
          setFoundPosts(false);
        }
      }
    }
    changePosts();
  }, [foundPosts]); // eslint-disable-line react-hooks/exhaustive-deps
  function handleClick(e: FormEvent, label: string) {
    console.log("Entered handle click");
    e.preventDefault();
    setSearchQuery(label);
    setFoundPosts(true);
  }
  function handleToggleClick() {
    setToggleTags(!toggleTags);
  }

  return (
    <div className={styles.wholeExploreSection}>
      <span className={styles.exploreSectionTop}>
        <SearchBar
          setSearchQuery={setSearchQuery}
          setFoundPosts={setFoundPosts}
        />
        <div className={styles.exploreSectionToggleDiv}>
          {toggleTags && (
            <IoIosArrowUp
              className={styles.exploreSectionToggleUp}
              onClick={handleToggleClick}
            />
          )}
          {!toggleTags && (
            <IoIosArrowUp
              className={styles.exploreSectionToggleDown}
              onClick={handleToggleClick}
            />
          )}
        </div>
      </span>
      {toggleTags === true && (
        <div className={styles.popularTags}>
          <h4 className={styles.tagTitle}>Cute stuff</h4>
          <ul>
            <li>
              <button
                className={styles.tagButton}
                onClick={(e) => {
                  handleClick(e, "cute");
                }}
              >
                Cute
              </button>
            </li>
            <li>
              <button
                className={styles.tagButton}
                onClick={(e) => {
                  handleClick(e, "really cute");
                }}
              >
                Really cute
              </button>
            </li>
          </ul>
          <h4 className={styles.tagTitle}>More Cute stuff</h4>
          <ul>
            <li>
              <button
                className={styles.tagButton}
                onClick={(e) => {
                  handleClick(e, "cute");
                }}
              >
                Cute
              </button>
            </li>
            <li>
              <button
                className={styles.tagButton}
                onClick={(e) => {
                  handleClick(e, "really cute");
                }}
              >
                Really cute
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export const posts = [
  {
    projectId: 1,
    projectTitle: "First project!",
    projectText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    projectImages: [
      "https://images.unsplash.com/photo-1570824104453-508955ab713e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1011&q=80",
      "https://images.unsplash.com/photo-1543852786-1cf6624b9987?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    ],
    projectTags: ["cats", "really cute", "cute"],
  },
  {
    projectId: 2,
    projectTitle: "Second project!",
    projectText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    projectImages: [
      "https://images.unsplash.com/photo-1548802673-380ab8ebc7b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
      "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    ],
    projectTags: ["cats", "cute"],
  },
  {
    projectId: 3,
    projectTitle: "Third project!",
    projectText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    projectImages: [
      "https://images.unsplash.com/photo-1548802673-380ab8ebc7b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
      "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    ],
    projectTags: ["cats", "cute"],
  },
  {
    projectId: 4,
    projectTitle: "Forth project!",
    projectText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    projectImages: [
      "https://images.unsplash.com/photo-1548802673-380ab8ebc7b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
      "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    ],
    projectTags: ["cats", "cute"],
  },
  {
    projectId: 5,
    projectTitle: "Fifth project!",
    projectText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    projectImages: [
      "https://images.unsplash.com/photo-1548802673-380ab8ebc7b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
      "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    ],
    projectTags: ["cats", "cute"],
  },
  {
    projectId: 6,
    projectTitle: "Sixth project!",
    projectText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    projectImages: [
      "https://images.unsplash.com/photo-1548802673-380ab8ebc7b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
      "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    ],
    projectTags: ["cats", "cute"],
  },
  {
    projectId: 7,
    projectTitle: "Seventh project!",
    projectText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    projectImages: [
      "https://images.unsplash.com/photo-1548802673-380ab8ebc7b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
      "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    ],
    projectTags: ["cats", "cute"],
  },
];
