import React from "react";
import styles from "./footer.module.css";
import { Routes, Route, Link } from "react-router-dom";
import App, { Home } from "../App/App";

export default function Footer() {
  return (
    <div className={styles.footerSection}>
      <Routes>
        <Route path="/home" element={<Home />} />
      </Routes>
      <div className={styles.logoSection}>
        <Link to="/">
          <img
            src="https://i2.lensdump.com/i/rxOZQP.png"
            alt="project linker logo"
            className={styles.logo}
          ></img>
        </Link>
      </div>
      <div className={styles.copyRight}>
        <p>Copyright 2022 ©</p>
      </div>
    </div>
  );
}
