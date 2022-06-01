//styles
import styles from './css/home.module.css';
//libreries  and components
import React from "react";
import Typical from 'react-typical';
import Footer from './Footer';
//icons
import foto from '../img/foto1.jpg';
import js from '../img/js.png';
import csharp from '../img/csharp.png';
import css from '../img/css.png';
import html from '../img/html.png';
import java from '../img/java.png';
import nodejs from '../img/nodejs.png';
import postgresql from '../img/postgresql.png';
import python from '../img/python.png';
import react from '../img/react.png';
import redux from '../img/redux.png';
import sequelize from '../img/sequelize.png';
import ts from '../img/ts.png';
import Navbar from './Navbar';
export default function Home() {

    return (
        <div>

            <Navbar />
            <div className={styles.grid}>
                <div id='foto' className={styles.titulo}>
                    <div>
                        <p>hola !</p>
                        <h1>soy <span>Erick Cruz</span></h1>
                        <p>Desarrollador full stack</p>
                        <Typical
                            steps={['Front-end', 2000, 'Back-end', 2000, 'TypesScrip', 2000, 'Node.js', 2000]}
                            loop={Infinity}
                            wrapper="p"
                        />
                    </div>
                </div>


                <div className={styles.image}>
                    <img height='500px' src={foto} />
                </div>
                <main className={styles.contenido}>
                    <div>
                        <h1>Soy Erick Cruz, desarrollador web </h1>
                        <p>
                            Soy un desarrollador Full Stack con experiencia en la creación de sitios web y aplicaciones web. Me especializo en JavaScript y tengo experiencia profesional trabajando con React.

                            Siempre busco mejorar mis habilidades y seguir creciendo profesionalmente para poder hacer aportes valiosos en el grupo de trabajo del que formo parte. Por lo tanto, utilizo el flujo de trabajo de desarrollo moderno con CodeStream para aumentar la productividad y mejorar la comunicación dentro de nuestro equipo de desarrollo.
                        </p>

                    </div>
                </main>

                <aside id='skill' className={styles.aside}>
                    <h1>skills</h1>
                    <img src={js} />
                    <span>JavaScript</span>
                    <img src={csharp} />
                    <span>C #</span>
                    <img src={css} />
                    <p>Css</p>
                    <img src={html} />
                    <p>Html</p>
                    <img src={java} />
                    <p>Java</p>
                    <img src={nodejs} />
                    <p>Nodejs</p>
                    <img src={postgresql} />
                    <p>Postgresql</p>
                    <img src={python} />
                    <p>Python</p>
                    <img src={react} />
                    <p>React</p>
                    <img src={redux} />
                    <p>Redux</p>
                    <img src={sequelize} />
                    <p>Sequelize</p>
                    <img src={ts} />
                    <p>Typescript</p>
                </aside>
                <footer id='footer'>
                    <Footer />
                </footer>

            </div>
        </div>
    )
}