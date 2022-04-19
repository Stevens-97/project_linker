import React, { FormEvent, useState } from "react";
import styles from "./searchBar.module.css";
import { AiOutlineSearch } from "react-icons/ai";

interface searchQuery {
  // query: [
  //   projectId: number,
  //   projectTitle: string,
  //   projectText: string,
  //   projectImages: string[],
  //   projectTags: string[]
  // ];
  setSearchQuery: (arg1: any) => void;
  setFoundPosts: (arg1: any) => void;
}

export default function SearchBar({
  setSearchQuery,
  setFoundPosts,
}: searchQuery) {
  const [inputText, setInputText] = useState("");
  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    console.log("Entered handle submit");
    setSearchQuery(inputText);
    setFoundPosts(true);
  }

  function handleInput(e: FormEvent<HTMLInputElement>) {
    console.log("Entered handle input", e.currentTarget.value);
    setInputText(e.currentTarget.value);
  }

  return (
    <div className={styles.wholeSearhBarSection}>
      <form className={styles.searchBarForm} action="/" method="get">
        <label className={styles.formLabel} htmlFor="header-search">
          <span className={styles.visuallyHidden}>
            Search for projects by tags
          </span>
        </label>
        <input
          type="text"
          id="search"
          placeholder="Search for projects by tags"
          name="s"
          className={styles.formField}
          onChange={(e) => {
            handleInput(e);
          }}
        />
        <button
          type="submit"
          className={styles.submitButton}
          onClick={(e) => {
            handleSubmit(e);
          }}
        >
          <AiOutlineSearch className={styles.submitButtonIcon} />
        </button>
      </form>
    </div>
  );
}
