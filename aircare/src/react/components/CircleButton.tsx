import React from 'react'
import { Link } from 'react-router-dom'

interface Props {
    onClick?: () => void;
}


const CircleButton = ({onClick} : Props) => {
    return (
            <svg onClick={onClick} width="132" height="132" viewBox="0 0 132 132" fill="none" xmlns="http://www.w3.org/2000/svg"
                className='w-[92px] h-[92px]' preserveAspectRatio="none">
                <g filter="url(#filter0_d_1297_4982)">
                    <circle cx="66" cy="62" r="46" fill="#79B937"></circle>
                </g>
                <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M66.4378 45.1836C67.0914 45.1836 67.7183 45.4433 68.1805 45.9055C68.6427 46.3677 68.9024 46.9945 68.9024 47.6482V59.9712H81.2254C81.879 59.9712 82.5059 60.2309 82.9681 60.6931C83.4303 61.1553 83.69 61.7822 83.69 62.4358C83.69 63.0895 83.4303 63.7163 82.9681 64.1785C82.5059 64.6407 81.879 64.9004 81.2254 64.9004H68.9024V77.2234C68.9024 77.8771 68.6427 78.504 68.1805 78.9662C67.7183 79.4284 67.0914 79.688 66.4378 79.688C65.7841 79.688 65.1572 79.4284 64.695 78.9662C64.2328 78.504 63.9732 77.8771 63.9732 77.2234V64.9004H51.6501C50.9965 64.9004 50.3696 64.6407 49.9074 64.1785C49.4452 63.7163 49.1855 63.0895 49.1855 62.4358C49.1855 61.7822 49.4452 61.1553 49.9074 60.6931C50.3696 60.2309 50.9965 59.9712 51.6501 59.9712H63.9732V47.6482C63.9732 46.9945 64.2328 46.3677 64.695 45.9055C65.1572 45.4433 65.7841 45.1836 66.4378 45.1836Z"
                    fill="white"></path>
                <defs>
                    <filter id="filter0_d_1297_4982" x="0" y="0" width="132" height="132" filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"></feColorMatrix>
                        <feOffset dy="4"></feOffset>
                        <feGaussianBlur stdDeviation="10"></feGaussianBlur>
                        <feComposite in2="hardAlpha" operator="out"></feComposite>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"></feColorMatrix>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1297_4982"></feBlend>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1297_4982" result="shape">
                        </feBlend>
                    </filter>
                </defs>
            </svg>
    )
}

export default CircleButton
