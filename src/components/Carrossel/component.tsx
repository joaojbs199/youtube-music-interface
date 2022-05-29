import React, { createContext, useState } from "react";
import styles from "./Carrossel.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons";

interface Props {
    children: React.ReactNode
}

interface ScrollType {
    scroll: {
        left: boolean;
        right: boolean;
    }
};

export const Carrossel = createContext({} as ScrollType);

export const CarrosselProvider: React.FC<Props> = ({children}) => {

    const [ scroll, setScroll ] = useState({
        left: false,
        right: false,
    });

    return (
        <Carrossel.Provider value={{scroll}}>

            <div className={styles.carrossel}>

                <div className={styles.scrollControllers}>

                    <button onClick={() => setScroll({left: true, right: false})} className={styles.scrollLeft}>
                        <FontAwesomeIcon className={styles.arrowLeft} icon={faChevronLeft} />
                    </button>

                    <button onClick={() => setScroll({left: false, right: true})} className={styles.scrollRight}>
                        <FontAwesomeIcon className={styles.arrowRight} icon={faChevronRight} />
                    </button>

                </div>

                { children }

            </div>

        </Carrossel.Provider>
    )
};