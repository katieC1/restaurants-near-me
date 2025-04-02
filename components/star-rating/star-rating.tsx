"use client";

import { StarRatingProps } from "@/types";
import React from "react";


export default function StarRating({
    rating,
    starDimension = "16px",
    starSpacing = "4px",
}: StarRatingProps) {
    const stars = Array.from({ length: 5 }, (_, index) => {
        const fillPercentage = Math.min(Math.max(rating - index, 0), 1) * 100;

        //intended to do the below making use of my icon file - ran out of time to impliment (new svg was needed)
        return (
            <div
                key={index}
                style={{
                    display: "inline-block",
                    width: starDimension,
                    height: starDimension,
                    marginRight: starSpacing,
                    position: "relative",
                }}
            >
                {/* Empty Star */}
                <svg
                    viewBox="0 0 51 48"
                    style={{
                        width: "100%",
                        height: "100%",
                        position: "absolute",
                        top: 0,
                        left: 0,
                    }}
                >
                    <path
                        d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z"
                        fill="#ccc"
                    />
                </svg>

                {/* Filled Star */}
                <svg
                    viewBox="0 0 51 48"
                    style={{
                        width: "100%",
                        height: "100%",
                        position: "absolute",
                        top: 0,
                        left: 0,
                        clipPath: `inset(0 ${100 - fillPercentage}% 0 0)`,
                    }}
                >
                    <path
                        d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z"
                        fill="yellow"
                    />
                </svg>
            </div>
        );
    });

    return <div style={{ display: "flex" }}>{stars}</div>;
}