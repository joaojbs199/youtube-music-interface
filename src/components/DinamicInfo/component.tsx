import React from "react";
import styles from "./Dinamic.module.scss";

interface Props {
    text1: string;
    text2: string;
    img?: string;
}

const DinamicInfo: React.FC<Props> = ({text1, text2, img}) => {
    
    return(
        <section className={styles.section}>
            { !img && <button className={styles.userIcon}>J</button>}
            { img && <img className={styles.suchAs} src={img} />}
            <div className={styles.userWelcome}>
                <p>{img ? "PARECIDO COM" : text1}</p>
                <h1>{text2}</h1>
            </div>
        </section>
    )
};

export default DinamicInfo;