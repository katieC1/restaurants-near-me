'use client';

import styles from './search-bar.module.css';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export function SearchBar({ defaultValue = 'w36jh' }: { defaultValue?: string }) {
    const [postcode, setPostcode] = useState(defaultValue);
    const router = useRouter();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const cleanedPostcode = postcode.toLocaleLowerCase().replace(/\s+/g, '');
        const params = new URLSearchParams();
        if (cleanedPostcode) params.set('postcode', cleanedPostcode); // ✅ match key
        router.push(`/?${params.toString()}`);
    };

    return (
        <form onSubmit={handleSubmit} className={styles.container}>
            <input
                type="text"
                value={postcode}
                onChange={(e) => setPostcode(e.target.value)}
                placeholder="Search..."
                className={styles.input}
            />
            <button type="submit">Update Postcode</button>
        </form>
    );
}
