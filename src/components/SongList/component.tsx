import React, { useLayoutEffect, useRef, useContext } from "react";
import { Carrossel } from "../Carrossel/component";
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

    const { scroll } = useContext(Carrossel);
    const list = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        
        if(null !== list.current) {

            if(scroll.right) {
                list.current.scrollLeft += list.current.scrollWidth
            }
            if(scroll.left) {
                list.current.scrollLeft -= list.current.scrollWidth
            }
        }
    }, [scroll]);

    return (

        <>
            <section ref={list} className={styles.songList}>

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