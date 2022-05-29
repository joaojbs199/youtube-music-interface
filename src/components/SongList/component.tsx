import React from "react";
import Song from "../Song/component";
import styles from "./SongList.module.scss";

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
            <section className={styles.songList}>

                {songs.map((song, i) => {
                    return (
                        <Song key={i} name={song.name} img={song.img} description={song.description} />
                    )
                })}
                
            </section>
        </>
    )
}

export default SongList;