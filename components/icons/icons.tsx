import React from 'react'


export interface IconProps {
    type:
    | 'search'
    | 'star';
    className?: string;
}
export default function Icons(props: IconProps) {
    const className = props.className || "h-4";

    switch (props.type as String) {
        case 'search':
            return (
                <svg
                    className={className}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
                        stroke="currentColor"
                        strokeWidth="2"
                    />
                    <path
                        d="M17 17L22 22"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinejoin="round"
                    />
                </svg>
            )
        case 'star':
            return (
                <>
                    <svg
                        className={className}
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M0,0.054V20h21V0.054H0z M15.422,18.129l-5.264-2.768l-5.265,2.768l1.006-5.863L1.64,8.114l5.887-0.855
	l2.632-5.334l2.633,5.334l5.885,0.855l-4.258,4.152L15.422,18.129z"
                        />
                    </svg>
                </>
            )
        default:
            return null;

    }

}


