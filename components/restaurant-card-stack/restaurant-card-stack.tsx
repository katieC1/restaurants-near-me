import { RestauranData } from '@/types'
import React from 'react'
import styles from './RestaurantCardStack.module.css'
import RestaurantCard from '../RestaurantCard/restaurant-card'

export default function RestaurantCardStack({ restaurantData, postcode }: { restaurantData: RestauranData[], postcode: string }) {
    return (
        <div className={styles.container}>
            {restaurantData.map((restaurant, index) => (
                <div className={styles.cardContainer} key={index}>
                    <RestaurantCard restaurant={restaurant} postcode={postcode} />
                </div>
            )
            )}

        </div>
    )
}
