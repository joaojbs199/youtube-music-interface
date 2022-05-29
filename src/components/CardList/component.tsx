import React from "react";
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

    return (
        <>
            <h1 className={styles.bests}>MAIS OUVIDOS</h1>
            <h1 className={styles.favorite}>SEU ARTISTA FAVORITO</h1>
        
            <section className={styles.cardList}>
                
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