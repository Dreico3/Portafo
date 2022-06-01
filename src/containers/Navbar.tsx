import React from "react";
import { Link } from "react-router-dom";
import styles from './css/navbar.module.css'
export default function Navbar() {
    return (
        <div className={styles.navbar}>
            <Link to='/' className={styles.link}>
                <h1 className={styles.uno}>E-K-C-C</h1>
            </Link>
            
            <div className={styles.dos}>
                <a className={styles.link} href='#footer'>
                    <span>Contactame</span>
                </a>
                <a className={styles.link} href='#skill'>
                    <span>Skills</span>
                </a>
                <Link to='/port' className={styles.link}>
                    <span>Portafolio</span>
                </Link>
            </div>
        </div>
    )
}