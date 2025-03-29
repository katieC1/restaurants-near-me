import { RestauranData } from '@/types'
import React from 'react'
import styles from './RestaurantCardStack.module.css'
import RestaurantCard from '../RestaurantCard/restaurant-card'

export default function RestaurantCardStack({ restaurantData }: { restaurantData: RestauranData[] }) {
    return (
        <div className={styles.container}>
            {restaurantData.map((restaurant, index) => (
                <div className={styles.cardContainer} key={index}>
                    <RestaurantCard restaurant={restaurant} />
                </div>
            )
            )}

        </div>
    )
}
