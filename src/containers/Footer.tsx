import React from "react";
import Contact from "./Contact";

import styles from "./css/footer.module.css";



export default function Footer() {

    return (
        <div>
            <div className={styles.foo}>
                <Contact />
            </div>
            <div className={styles.redes}>
                <h2>Redes sociales</h2>
                <p>Facebook</p>
                <p>Email</p>
                <p>Twitter</p>
            </div>
        </div>
    )
}