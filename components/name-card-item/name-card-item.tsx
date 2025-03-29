import React from 'react'
import styles from './NameCardItem.module.css'

export default function NameCardItem({ name }: { name: string }) {
    return (
        <div className={styles.container}>
            <h3 className={styles.text}>{name}</h3>
        </div>

    )


}
