import React from 'react'
import styles from '../styles/test.module.scss'

const Test = () => {
    return (
        <div>
            <div className={styles.content}>
                <div className={styles.card}>
                    <div className={styles.wrapper}>
                        <img src="../../component/heroAll.svg"
                            alt=""
                            className={styles.cover_image} />
                        <div className={styles.title}>
                            TAS MOTIF
                        </div>
                        <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore aut consequuntur quia ratione esse in ut. Molestias dignissimos dolores libero.</p>
                    </div>

                    <img src="../../component/bagOne.png"
                        alt=""
                        className={styles.character}
                    />
                    <div className={styles.nameOf}>TAS MOTIF</div>

                </div>
            </div>
        </div>
    )
}

export default Test