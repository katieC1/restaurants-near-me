import React from 'react'

export default function Loading() {
    return (
        <div className='flex justify-center items-center h-screen'>
            <div className='max-w-2/4'>
                <div className="loader loader--style6" >
                    <svg
                        version="1.1"
                        id="Layer_1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        x="0px"
                        y="0px"
                        width="24px"
                        height="30px"
                        viewBox="0 0 24 30"
                        xmlSpace="preserve"
                    >
                        <rect x={0} y={13} width={4} height={5} fill="#333">
                            <animate
                                attributeName="height"
                                attributeType="XML"
                                values="5;21;5"
                                begin="0s"
                                dur="0.6s"
                                repeatCount="indefinite"
                            />
                            <animate
                                attributeName="y"
                                attributeType="XML"
                                values="13; 5; 13"
                                begin="0s"
                                dur="0.6s"
                                repeatCount="indefinite"
                            />
                        </rect>
                        <rect x={10} y={13} width={4} height={5} fill="#333">
                            <animate
                                attributeName="height"
                                attributeType="XML"
                                values="5;21;5"
                                begin="0.15s"
                                dur="0.6s"
                                repeatCount="indefinite"
                            />
                            <animate
                                attributeName="y"
                                attributeType="XML"
                                values="13; 5; 13"
                                begin="0.15s"
                                dur="0.6s"
                                repeatCount="indefinite"
                            />
                        </rect>
                        <rect x={20} y={13} width={4} height={5} fill="#333">
                            <animate
                                attributeName="height"
                                attributeType="XML"
                                values="5;21;5"
                                begin="0.3s"
                                dur="0.6s"
                                repeatCount="indefinite"
                            />
                            <animate
                                attributeName="y"
                                attributeType="XML"
                                values="13; 5; 13"
                                begin="0.3s"
                                dur="0.6s"
                                repeatCount="indefinite"
                            />
                        </rect>
                    </svg>
                </div>


            </div>

        </div>
    )
}
