import React from "react";
import styles from './css/home.module.css';
import Typical from 'react-typical';
import foto from '../img/foto.jpg';
export default function Home() {

    return (
        <div className={styles.grid}>
            <main className={styles.contenido}>
                <div>
                    <h1>Erick Kevin Cruz Chura</h1>
                    <Typical
                        steps={['Front-end', 1000, 'Back-end', 1000, 'TypesScrip', 1000,'Node.js', 1000]}
                        loop={Infinity}
                        wrapper="p"
                    />

                </div>
            </main>
            <aside className={styles.aside}>
                <img height='500px' src={foto} />
            </aside>
        </div>
    )
}