import { Link } from "react-router-dom"

import styles from "../styles/Header.module.css"
import img from "../public/logo_scicrop.png"

export default function Header({ btnLink, btnText }) {
    return (
        <div className={styles.header}>
            <div className={styles.logo}>
                <img src={img} alt="sci_crop leaf" className={styles.leaf}></img>
                <h1 className={styles.scicrop}>SciCrop</h1>
            </div>
            <button className={styles.btn}><Link to={btnLink}>{btnText}</Link></button>
        </div>
    )
}  