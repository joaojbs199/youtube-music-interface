import React from "react";
import styles from "./Carrossel.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons";

interface Props {
    children: React.ReactNode
}

const Carrossel: React.FC<Props> = ({children}) => {

    

    return(

        <div className={styles.carrossel}>

            <div className={styles.scrollControllers}>

                <button className={styles.scrollLeft}>
                    <FontAwesomeIcon className={styles.arrowLeft} icon={faChevronLeft} />
                </button>

                <button className={styles.scrollRight}>
                    <FontAwesomeIcon className={styles.arrowRight} icon={faChevronRight} />
                </button>

            </div>

            { children }

        </div>
    )
};

export default Carrossel;