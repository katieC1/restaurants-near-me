import React from 'react'

export default function SectionContainer({ children, titleText }: { children: React.ReactNode, titleText?: string }) {
    return (
        <div className='container max-w-4xl mx-auto px-4 py-8'>
            {titleText ? "Title comeponent here" : null}
            {children}
        </div>
    )
}
