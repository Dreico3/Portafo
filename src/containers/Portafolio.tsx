import React from "react";
import styles from './css/portafolio.module.css';
export default function Portafolio(){
    const videos = ["https://www.youtube.com/embed/H083chy1JVM", "https://www.youtube.com/embed/9w3gy2dYN_E","https://www.youtube.com/embed/N41sQJ5SZlc"]

    return (
        <div className={styles.portafolio}>
            {
                videos.map((v,i)=>{
                    return(
                        <iframe key={i} width="560" height="315" src={v} title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
                    )

                })
            }
        </div>
    )
}