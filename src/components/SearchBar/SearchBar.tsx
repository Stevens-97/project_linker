import React from "react";
import styles from "./searchBar.module.css";
import { AiOutlineSearch } from "react-icons/ai";

export default function SearchBar() {
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
        />
        <button type="submit" className={styles.submitButton}>
          <AiOutlineSearch className={styles.submitButtonIcon} />
        </button>
      </form>
    </div>
  );
}
