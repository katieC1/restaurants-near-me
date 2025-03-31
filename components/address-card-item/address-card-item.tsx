import React from 'react'
import styles from './address-card-item.module.css'

export default function AddressCardItem({ location }: { location: any }) {
    //this component could first display just the area and distance from the location 
    //i could start with the assumption that the start address is my address 
    return (
        <div className={styles.container}>
            <p className={styles.text}>{location.city}</p>

        </div>
    )
}
