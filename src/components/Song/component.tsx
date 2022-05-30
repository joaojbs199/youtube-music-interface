import React from "react";
import styles from "./Song.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPodcast } from "@fortawesome/free-solid-svg-icons";

interface Props {
    name: string;
    img: string;
    description: string;
}

const Song: React.FC<Props> = ({name, img, description}) => {

    return (
        <div className={styles.songContainer}>
            <img className={styles.songImg} src={img} />
            <div className={styles.songDescription}>
                <h1>{name}</h1>
                <p>
                    <FontAwesomeIcon style={{margin: "0 10px 0 0"}} className={styles.descriptionIcon} icon={faPodcast} />
                    {description}
                </p>
            </div>
        </div>
    )
};

export default Song;