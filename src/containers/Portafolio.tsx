import React from "react";
import { Link } from "react-router-dom";
import styles from './css/portafolio.module.css';
import styles1 from './css/navbar.module.css';
export default function Portafolio() {
    const videos = ["https://www.youtube.com/embed/H083chy1JVM", "https://www.youtube.com/embed/9w3gy2dYN_E", "https://www.youtube.com/embed/N41sQJ5SZlc"]

    return (
        <div >
            <div className={styles1.navbar}>
                <Link to='/' className={styles1.link}>
                    <h1 className={styles1.uno}>Regresar</h1>
                </Link>
            </div>
            <div className={styles.texto}>
                <h2>aun no sabemos como mostrar los proyectos ya hechos</h2>
                <p>
                    este problema se solucionara cuando los proyectos esten pulidos 
                    para ver el codigo fuente de cada uno de ellos precione <a href="https://github.com/Dreico3" target="_blank" className={styles.texto}>aqui...</a>
                </p>
            </div>
            {
               /*  videos.map((v, i) => {
                    return (
                        <div>
                            <iframe key={i} width="560" height="315" src={v} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>

                        </div>
                    )

                }) */
            }
        </div>
    )
}