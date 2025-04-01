

import React from 'react'
import styles from './RestaurantCard.module.css'
import { RestauranData } from '@/types'
import NameCardItem from '../name-card-item/name-card-item';
import CuisineCardItem from '../cuisine-card-item/cuisine-card-item';
import AddressCardItem from '../address-card-item/address-card-item';
import RatingCardItem from '../rating-card-item/rating-card-item';




export default function RestaurantCard({ restaurant, postcode }: { restaurant: RestauranData, postcode: string }) {
    const ratingData = restaurant.ratingData;
    return (
        <div className={styles.card}>
            <div className='flex justify-between flex-col'>

                <NameCardItem name={restaurant.name} />

                <RatingCardItem starRating={ratingData.starRating} count={ratingData.count} />

                <CuisineCardItem cuisine={restaurant.cuisines} />


                {/* <p>{restaurant.location}</p> */}


                <AddressCardItem location={restaurant.location} userPostcode={postcode} />



            </div>
        </div>
    )
}
