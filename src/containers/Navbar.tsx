import React from "react";
import { Link } from "react-router-dom";
import styles from './css/navbar.module.css';
import logo from "../img/logoEK.png";
export default function Navbar() {
    return (
        <div className={styles.navbar}>
            <div className={styles.uno}>
                <Link to='/' className={styles.link}>
                    <img src={logo} alt="aqui va el logo?" className={styles.logo} />
                </Link>

            </div>
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