import React from "react";
import styles from "./Header.module.scss";
import logo from "../../assets/icon.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faChromecast } from "@fortawesome/free-brands-svg-icons";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";

interface Props {
    buttons: {
        textBtn: {
            className: string;
            text: string;
        }[],
        iconBtn: {
            className: string;
            icon: IconDefinition
        }[]
    }
}

const Header: React.FC<Props> = ({buttons}) => {

    return (
        <header className={styles.header}>
            <img className={styles.logo} src={logo} />
            <h1 className={styles.logoText} id="logoTitle">Music</h1>

            <div className={styles.menu}>

                {buttons.textBtn.map((button, i) => {
                    return (
                        <button key={i} className={`${styles[button.className]}`}>
                            {button.text}
                        </button>
                    )
                })};

                {buttons.iconBtn.map((button, i) => {
                    return (
                        <button key={i} className={`${styles[button.className]}`}>
                            <FontAwesomeIcon icon={button.icon} />
                        </button>
                    )
                })};
                
            </div>
            
            <button className={styles.menuHide}><FontAwesomeIcon icon={faEllipsisV} /></button>
            <FontAwesomeIcon className={styles.screenShare} icon={faChromecast} />
            <button className={styles.userIcon}>J</button>
        </header>
    )
};

export default Header;