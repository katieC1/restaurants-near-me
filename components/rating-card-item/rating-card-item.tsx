import React from 'react'

export default function RatingCardItem({ rating }: { rating: number }) {
    // display the rating - in how filled a star / muliple stars are 
    //with the number of ratings in italic bracket - if that is an option from the api
    return (
        <div>
            {rating}
        </div>
    )
}
