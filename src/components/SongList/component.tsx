import React from "react";
import Song from "../Song/component";
import styles from "./SongList.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronRight, faChevronCircleLeft } from "@fortawesome/free-solid-svg-icons";

interface Props {
    songs: {
        name: string;
        img: string;
        description: string;
    }[]
}

const SongList: React.FC<Props> = ({songs}) => {


    return (
        <>

            <FontAwesomeIcon className={styles.arrowLeft} icon={faChevronCircleLeft} />

            <section className={styles.songList}>

                {songs.map((song, i) => {
                    return (
                        <Song key={i} name={song.name} img={song.img} description={song.description} />
                    )
                })}
                
            </section>

            <FontAwesomeIcon className={styles.arrowRight} icon={faCircleChevronRight} />

        </>
    )
}

export default SongList;