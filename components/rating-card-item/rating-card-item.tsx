import React from "react";
import Icons from "../icons/icons";
import { Rating } from "@/types";



export default function RatingCardItem({ starRating, count }: Rating) {
    const filledPercentage = Math.min(Math.max(starRating / 5, 0), 1) * 100; // Clamp between 0% and 100%

    console.log(filledPercentage, 'filledPercentage');

    return (
        <div className="">
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
            <span className="text-sm text-gray-500 pl-1 ">({starRating} / {count} reviews)</span>
        </div>
    );
}