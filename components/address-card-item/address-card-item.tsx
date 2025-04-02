"use client"
import { getDistanceBetweenPostcodes } from '@/app/lib/calculateDistacne';
import { Location } from '@/types';
import React, { useEffect, useState } from 'react';



export default function AddressCardItem({ location, userPostcode }: { location: Location, userPostcode: string }) {
    const [distance, setDistance] = useState<number | null>(null);

    useEffect(() => {
        async function fetchDistance() {
            try {
                if (userPostcode && location.postalCode) {
                    // console.log(userPostcode, location.postalCode, "postcodes and data");
                    const dist = await getDistanceBetweenPostcodes(userPostcode, location.postalCode);
                    setDistance(dist);
                }
                else {
                    console.log('Postcode error');
                }
            } catch (error) {
                console.error('Error fetching distance:', error);
            }
        }

        fetchDistance();
    }, [userPostcode, location.postalCode]);

    return (
        <div>
            <p>{location.firstLine}</p>
            {distance !== null && <p className='italic text-gray-400 tiny'>Distance: {distance.toFixed(2)} m</p>}

        </div>
    );
}


