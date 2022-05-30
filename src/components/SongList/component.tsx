import React, { useLayoutEffect, useRef, useState } from "react";
import { Song } from "../componentExporter";
import styles from "./SongList.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons";

interface Props {
    songs: {
        name: string;
        img: string;
        description: string;
    }[]
}

const SongList: React.FC<Props> = ({songs}) => {

    const list = useRef<HTMLDivElement>(null);
    const [ scroll, setScroll ] = useState<boolean>(false);
    const leftVisibility = !scroll ? "hidden": "visible";
    const rightVisibility = scroll ? "hidden": "visible";

    useLayoutEffect(() => {

        if(null !== list.current) {
            
            if(scroll) {
                list.current.scrollLeft += list.current.scrollWidth
            } else {
                list.current.scrollLeft -= list.current.scrollWidth
            }
        }
    }, [list, scroll]);

    return (

        <>

            <div className={styles.carrossel}>

                <div className={styles.scrollControllers}>

                    <button style={{visibility: leftVisibility}}
                        onClick={() => {
                            setScroll(false)
                        }} className={styles.scrollLeft}>
                        <FontAwesomeIcon className={styles.arrowLeft} icon={faChevronLeft} />
                    </button>

                    <button style={{visibility: rightVisibility}}
                        onClick={() => {
                            setScroll(true)
                        }} className={styles.scrollRight}>
                        <FontAwesomeIcon className={styles.arrowRight} icon={faChevronRight} />
                    </button>

                </div>

                <section ref={list} className={styles.songList}>

                    {songs.map((song, i) => {
                        return (
                            <Song key={i} name={song.name} img={song.img} description={song.description} />
                        )
                    })}

                </section>

            </div>

        </>
    )
}

export default SongList;