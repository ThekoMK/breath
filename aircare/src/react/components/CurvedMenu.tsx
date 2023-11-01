import React, { useContext } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import CircleButton from './CircleButton'
import { FindLocation } from "../context/LocationContext";

const CurvedMenu = () => {
    const location = useLocation();
    const { handleConfirmation } = FindLocation()

    const isOnPickLocationPage = location.pathname === "/pickLocation";
    const isOnHomePage = location.pathname === "/";
    const isOnProfilePage = location.pathname === '/profile';

    return (
        <div className="fixed bottom-0 flex justify-center items-center w-full curvedMenu">
            {isOnPickLocationPage ? <div className='absolute bottom-[44px]'><CircleButton onClick={handleConfirmation}/></div> : <Link className='absolute bottom-[44px]' to={'/pickLocation'}>
                <CircleButton />
            </Link>}
            {isOnPickLocationPage ? "" : <div className="w-full h-[95px]">
                <img className="w-full h-full" src={require('../../images/SubtractblackBg.png')} alt="" />
            </div>}
            {isOnPickLocationPage ? "" : <div className="absolute flex w-full px-[64px] justify-between">
                <NavLink to="/">{isOnHomePage ? <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                    <path d="M13.7119 2.36625C14.06 2.03712 14.5209 1.85373 15 1.85373C15.4791 1.85373 15.94 2.03712 16.2881 2.36625L25.3706 10.9519C25.9331 11.4825 26.25 12.2231 26.25 12.9956V23.4394C26.25 24.1853 25.9537 24.9007 25.4262 25.4281C24.8988 25.9556 24.1834 26.2519 23.4375 26.2519H19.6875C19.318 26.2519 18.9521 26.1791 18.6108 26.0376C18.2694 25.8961 17.9593 25.6888 17.6981 25.4274C17.4369 25.1661 17.2298 24.8558 17.0886 24.5144C16.9473 24.1729 16.8748 23.807 16.875 23.4375V18.75C16.875 18.5014 16.7762 18.2629 16.6004 18.0871C16.4246 17.9113 16.1861 17.8125 15.9375 17.8125H14.0625C13.8139 17.8125 13.5754 17.9113 13.3996 18.0871C13.2238 18.2629 13.125 18.5014 13.125 18.75V23.4375C13.125 24.1834 12.8287 24.8988 12.3012 25.4262C11.7738 25.9537 11.0584 26.25 10.3125 26.25H6.5625C5.81658 26.25 5.10121 25.9537 4.57376 25.4262C4.04632 24.8988 3.75 24.1834 3.75 23.4375V12.9937C3.75 12.2212 4.06875 11.4806 4.63125 10.95L13.7119 2.3625V2.36625Z" fill="white" />
                </svg> : <svg xmlns="http://www.w3.org/2000/svg" width="24" height="26" viewBox="0 0 24 26" fill="none">
                    <path d="M10.7119 1.36625C11.06 1.03712 11.5209 0.853729 12 0.853729C12.4791 0.853729 12.94 1.03712 13.2881 1.36625L22.3706 9.95187C22.9331 10.4825 23.25 11.2231 23.25 11.9956V22.4394C23.25 23.1853 22.9537 23.9007 22.4262 24.4281C21.8988 24.9556 21.1834 25.2519 20.4375 25.2519H16.6875C16.318 25.2519 15.9521 25.1791 15.6108 25.0376C15.2694 24.8961 14.9593 24.6888 14.6981 24.4274C14.4369 24.1661 14.2298 23.8558 14.0886 23.5144C13.9473 23.1729 13.8748 22.807 13.875 22.4375V17.75C13.875 17.5014 13.7762 17.2629 13.6004 17.0871C13.4246 16.9113 13.1861 16.8125 12.9375 16.8125H11.0625C10.8139 16.8125 10.5754 16.9113 10.3996 17.0871C10.2238 17.2629 10.125 17.5014 10.125 17.75V22.4375C10.125 23.1834 9.82868 23.8988 9.30124 24.4262C8.77379 24.9537 8.05842 25.25 7.3125 25.25H3.5625C2.81658 25.25 2.10121 24.9537 1.57376 24.4262C1.04632 23.8988 0.75 23.1834 0.75 22.4375V11.9937C0.75 11.2212 1.06875 10.4806 1.63125 9.95L10.7119 1.3625V1.36625ZM12 2.7275L2.9175 11.315C2.8253 11.4024 2.75182 11.5077 2.70154 11.6243C2.65126 11.741 2.62522 11.8667 2.625 11.9937V22.4375C2.625 22.6861 2.72377 22.9246 2.89959 23.1004C3.0754 23.2762 3.31386 23.375 3.5625 23.375H7.3125C7.56114 23.375 7.7996 23.2762 7.97541 23.1004C8.15123 22.9246 8.25 22.6861 8.25 22.4375V17.75C8.25 17.0041 8.54632 16.2887 9.07376 15.7613C9.60121 15.2338 10.3166 14.9375 11.0625 14.9375H12.9375C13.6834 14.9375 14.3988 15.2338 14.9262 15.7613C15.4537 16.2887 15.75 17.0041 15.75 17.75V22.4375C15.75 22.6861 15.8488 22.9246 16.0246 23.1004C16.2004 23.2762 16.4389 23.375 16.6875 23.375H20.4375C20.6861 23.375 20.9246 23.2762 21.1004 23.1004C21.2762 22.9246 21.375 22.6861 21.375 22.4375V11.9937C21.375 11.8664 21.3491 11.7403 21.2988 11.6233C21.2485 11.5063 21.1749 11.4008 21.0825 11.3131L12 2.7275Z" fill="white" />
                </svg>}</NavLink>
                <NavLink to="/profile">{isOnProfilePage ? <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"
                    className="w-[30px] h-[30px]" preserveAspectRatio="none">
                    <g clip-path="url(#clip0_1297_4973)">
                        <path
                            d="M15 16.25C18.4518 16.25 21.25 13.4518 21.25 10C21.25 6.54822 18.4518 3.75 15 3.75C11.5482 3.75 8.75 6.54822 8.75 10C8.75 13.4518 11.5482 16.25 15 16.25Z"
                            stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path
                            d="M25 26.25C25 23.5978 23.9464 21.0543 22.0711 19.1789C20.1957 17.3036 17.6522 16.25 15 16.25C12.3478 16.25 9.8043 17.3036 7.92893 19.1789C6.05357 21.0543 5 23.5978 5 26.25"
                            stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                        <circle cx="15" cy="10" r="6" fill="white"></circle>
                        <path
                            d="M24 26C24 23.6131 23.0518 21.3239 21.364 19.636C19.6761 17.9482 17.3869 17 15 17C12.6131 17 10.3239 17.9482 8.63604 19.636C6.94821 21.3239 6 23.6131 6 26L15 26H24Z"
                            fill="white"></path>
                    </g>
                    <defs>
                        <clipPath id="clip0_1297_4973">
                            <rect width="30" height="30" fill="white"></rect>
                        </clipPath>
                    </defs>
                </svg> : <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                    <path d="M15 16.25C18.4518 16.25 21.25 13.4518 21.25 10C21.25 6.54822 18.4518 3.75 15 3.75C11.5482 3.75 8.75 6.54822 8.75 10C8.75 13.4518 11.5482 16.25 15 16.25Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M25 26.25C25 23.5978 23.9464 21.0543 22.0711 19.1789C20.1957 17.3036 17.6522 16.25 15 16.25C12.3478 16.25 9.8043 17.3036 7.92893 19.1789C6.05357 21.0543 5 23.5978 5 26.25" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>}</NavLink>
            </div>}
        </div>
    )
}

export default CurvedMenu
