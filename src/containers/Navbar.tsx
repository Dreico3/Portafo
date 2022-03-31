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
                <span>Cover</span>
                <Link to='/port' className={styles.link}>
                    <span>Portafolio</span>
                </Link>
                <Link to='/contact' className={styles.link}>
                    <span>Consulta</span>
                </Link>
            </div>
        </div>
    )
}