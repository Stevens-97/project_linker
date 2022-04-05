import React from "react";
import styles from "./searchBar.module.css";

export default function SearchBar() {
  return (
    <form action="/" method="get">
      <label htmlFor="header-search">
        <span className={styles.visuallyHidden}>
          Search for projects by tags
        </span>
      </label>
      <input
        type="text"
        id="search"
        placeholder="Search for projects by tags"
        name="s"
      />
      <button type="submit">Search</button>?
    </form>
  );
}
