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

        <section className={styles.cardList}>
            {cards.map((card, i) => {
                
                if(i !== 0) {
                    return(
                        <Card key={i} img={card.img} name={card.name} subs={card.subs} />
                    )
                };
            })}
        </section>

    )
};

export default CardList;