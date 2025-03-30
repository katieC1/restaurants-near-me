import React from "react";
import Icons from "../icons/icons";

interface RatingCardItemProps {
    rating: number; // Rating out of 5
}

export default function RatingCardItem({ rating }: RatingCardItemProps) {
    const filledPercentage = Math.min(Math.max(rating / 5, 0), 1) * 100; // Clamp between 0% and 100%

    return (
        <div className="relative w-7 h-7" >

            < Icons type="star" className="absolute top-0 left-0" />

            <div
                className="absolute top-0 left-0 overflow-hidden"
                style={{
                    width: `${filledPercentage}%`,
                    position: "absolute",
                    overflow: "hidden",
                }}
            >

                <Icons type="star" className="text-yellow-500 bg-yellow-800 w-7 h-7" />

            </div >
        </div >
    );
}