import React from 'react'
import styles from "./footer.module.css"
export default function Footer() {
  return (
    <div className={styles.footerSection}>
        <img src="https://i2.lensdump.com/i/rxOZQP.png" alt='project linker logo' className={styles.logo}></img>
        <div className={styles.copyRight}>
            <p >Copyright 2022 ©</p>
        </div>
    </div>
  )
}
