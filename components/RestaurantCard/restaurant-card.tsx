import React from 'react'
import styles from './RestaurantCard.module.css'

export default function RestaurantCard({ restaurant }: { restaurant: { name: string, location: string, rating: number } }) {
    return (
        <div className={styles.card}>
            <div className='flex justify-between flex-col'>

                <h3>{restaurant.name}</h3>
                <p>{restaurant.location}</p>
                <p className='font-semibold  text-orange'>{restaurant.rating}</p>


            </div>
        </div>
    )
}
