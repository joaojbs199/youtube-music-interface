import React, { useRef, useLayoutEffect, useContext } from "react";
import { Carrossel } from "../Carrossel/component";
import Card from "../Card/component";
import styles from "./CardList.module.scss";


interface Props {
    cards: {
        name: string;
        img: string;
        subs: string;
    }[]
};

const CardList: React.FC<Props> = ({cards}) => {

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
        </>

    )
};

export default CardList;