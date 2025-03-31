import React from 'react';
import styles from './cuisine-card-item.module.css';
import { Cuisine } from '@/types';



export default function CuisineCardItem({ cuisine }: { cuisine: Cuisine[] }) {
    console.log(cuisine, 'cuisine');

    return (
        <div className={styles.container}>
            {cuisine.map((item) => (
                <p key={item.uniqueName} className={styles.text}>
                    {item.name},
                </p>
            ))}
        </div>
    );
}