import React from "react";
import styles from "./styles.module.scss";
import RandomAvataars from "./randomAvataars";

const Avataar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.main}>
                <div className={styles.heading}>Avataar</div>
                <div className={styles.randomAvataarContainer}>
                    <RandomAvataars />
                </div>
            </div>
        </div>
    )
}

export default Avataar

