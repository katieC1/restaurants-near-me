import React from 'react'
import styles from './SectionContainer.module.css'

export default function SectionContainer({ children, titleText }: { children: React.ReactNode, titleText?: string }) {
    return (
        <div className={styles.container}>
            {titleText && <h1 className='text-center text-orange'>{titleText}</h1>}
            {children}
        </div>
    )
}
