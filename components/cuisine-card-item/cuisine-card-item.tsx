import React from 'react'
import styles from './cuisine-card-item.module.css'

export default function CuisineCardItem({ cuisine }: { cuisine: string }) {
    //consideration of how this is ordered - could be ordered based on users preference for improved version 
    return (
        <div className={styles.container}>
            <p className={styles.text} > {cuisine}</p>
        </div>
    )
}
