import React from "react";
import styles from "./Card.module.scss";

interface Props {
    name: string;
    img: string;
    subs: string;
}

const Card: React.FC<Props> = ({name, img, subs}) => {

    return(
        <div className={styles.cardContainer}>
            <img className={styles.cardImg} src={img} />
            <div className={styles.cardDescription}>
                <h1>{name}</h1>
                <p>{subs}</p>
            </div>
        </div>
    )
};

export default Card;