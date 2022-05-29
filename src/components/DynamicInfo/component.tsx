import React from "react";
import { useState } from "react";
import styles from "./Dynamic.module.scss";
import breakpoints from "../../configStyles/variables.module.scss";

interface Props {
    text?: string;
    dynamicInfo?: {
        text: string;
        img: string | null;
    }
}

const defaultText1 = "ALGUMAS MÚSICAS PARA VOCÊ COMEÇAR";
const defaultText2 = "Olá, João Batista da Silva";

const DynamicInfo: React.FC<Props> = ({text = defaultText1, dynamicInfo = {text: "", img: null}}) => {
    
    const breakpoint900 = parseInt(breakpoints.bkp900.toString().replace("px", ""));
    const [ display, setDisplay ] = useState(true);

    window.addEventListener('resize', () => {

        if(dynamicInfo.img && window.innerWidth <= breakpoint900) {
            setDisplay(false);
        } else {
            setDisplay(true);
        }
    });

    return(
        <section style={{display: display ? "flex" : "none"}} className={styles.section}>
            { !dynamicInfo.img && <button className={styles.userIcon}>J</button>}
            { dynamicInfo.img && <img alt="album-image" className={styles.suchAs} src={dynamicInfo.img} />}
            
            <div className={styles.userWelcome}>
                <p>{ dynamicInfo.img ? "PARECIDO COM" : text}</p>
                <h1>{ dynamicInfo.img ? dynamicInfo.text : defaultText2}</h1>
            </div>

        </section>
    )
};

export default DynamicInfo;