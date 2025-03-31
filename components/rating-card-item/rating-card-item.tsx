"use client"

import React from "react";
import Icons from "../icons/icons";
import { Rating } from "@/types";
import StarRatings from "react-star-ratings";


export default function RatingCardItem({ starRating, count }: Rating) {
    const filledPercentage = Math.min(Math.max(starRating / 5, 0), 1) * 100;

    return (
        <div className="flex items-center">
            {/* Render 5 stars */}
            <StarRatings
                rating={starRating}
                starDimension="16px"
                starSpacing="4px"


                starRatedColor="yellow"
                starEmptyColor="gray"
                numberOfStars={5}
            />


            {/* Display review count */}
            <span className="text-sm text-gray-500 pl-2">({starRating} / {count} reviews)</span>
        </div>
    );
}