import React from 'react'
import styles from './RestaurantCard.module.css'
import RatingCardItem from '../rating-card-item/rating-card-item'

export default function RestaurantCard({ restaurant }: { restaurant: { name: string, location: string, rating: number } }) {
    return (
        <div className={styles.card}>
            <div className='flex justify-between flex-col'>

                <h3>{restaurant.name}</h3>
                <p>{restaurant.location}</p>
                <RatingCardItem rating={restaurant.rating} />



            </div>
        </div>
    )
}
