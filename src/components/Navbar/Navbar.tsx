import React from 'react'
import styles from "./navbar.module.css"
export default function Navbar() {
  return (
    <div className={styles.navbarSection}>
      <div className={styles.logoSection}>
    <img src="https://i2.lensdump.com/i/rxOZQP.png" alt='project linker logo' className={styles.logo}></img>
    </div>
    <div className={styles.menu}>
        <button className={styles.loginButton}>Sign in</button>
    </div>
</div>
  )
}
