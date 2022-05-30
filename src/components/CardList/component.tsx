import React, { useRef, useLayoutEffect, useState } from "react";
import { Card } from "../componentExporter";
import styles from "./CardList.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons";


interface Props {
    cards: {
        name: string;
        img: string;
        subs: string;
    }[]
};

const CardList: React.FC<Props> = ({cards}) => {

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

                <h1 className={styles.bests}>MAIS OUVIDOS</h1>
                <h1 className={styles.favorite}>SEU ARTISTA FAVORITO</h1>
            
                <section ref={list} className={`${styles.cardList} cardList`}>
                    
                    {cards.map((card, i) => {
                        
                        if(i !== 0) {
                            return(
                                <Card key={i} img={card.img} name={card.name} subs={card.subs} />
                            )
                        };
                    })}
                </section>

            </div>

        </>

    )
};

export default CardList;