import React from 'react'
import { Link } from 'react-router-dom'

interface Props {
    togglePopup: () => void,
    address: string | null
}

const VerifyAddress = ({ togglePopup, address  }: Props) => {
    return (
        <div
            className="w-full bottom-0 fixed rounded-tl-[50px] rounded-tr-[50px] bg-[#343a40] pt-[12px] pb-[41px] flex flex-col justify-center verify-popup">
            <div onClick={togglePopup} className="w-[134px] h-[5px] rounded-[15px] bg-[#d9d9d9] flex self-center mb-[21px]"></div>
            <p className="text-lg font-semibold text-center text-white">Дали ова е точната локација каде сакате да пријавите загадување?</p>
            <div className="flex items-center gap-[28px] flex-row justify-center mt-[53px]">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="31" height="43" viewBox="0 0 31 43" fill="none">
                        <g clip-path="url(#clip0_1297_1006)">
                            <path d="M15.5 0C6.94148 0 0 7.01877 0 15.6761C0 29.1651 10.5591 39.3806 14.2492 42.5353C14.9714 43.1572 16.0321 43.1572 16.7542 42.5353C20.4409 39.3806 31 29.1651 31 15.6761C31 7.01877 24.062 0 15.5 0ZM15.5 25.7203C10.0132 25.7203 5.56632 21.224 5.56632 15.6761C5.56632 10.1281 10.0132 5.62829 15.5 5.62829C20.9868 5.62829 25.4371 10.1281 25.4371 15.6761C25.4371 21.224 20.9868 25.7203 15.5 25.7203Z" fill="#79B937" />
                        </g>
                        <defs>
                            <clipPath id="clip0_1297_1006">
                                <rect width="31" height="43" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                </div>
                <p className='text-white'>{address}</p>
            </div>
            <div className="flex gap-[20px] justify-between items-center mt-[58px] mb-[58px]">
                <svg onClick={togglePopup} xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none">
                    <rect x="1" y="1" width="62" height="62" rx="14" stroke="white" stroke-width="2" />
                    <path d="M40.4715 39.7874C40.5526 39.8667 40.6169 39.9608 40.6608 40.0644C40.7047 40.168 40.7272 40.279 40.7272 40.3911C40.7272 40.5032 40.7047 40.6143 40.6608 40.7178C40.6169 40.8214 40.5526 40.9155 40.4715 40.9948C40.3904 41.0741 40.2942 41.137 40.1882 41.1799C40.0823 41.2228 39.9688 41.2449 39.8541 41.2449C39.7394 41.2449 39.6259 41.2228 39.5199 41.1799C39.414 41.137 39.3177 41.0741 39.2367 40.9948L32 33.9179L24.7633 40.9948C24.5995 41.1549 24.3774 41.2449 24.1459 41.2449C23.9143 41.2449 23.6922 41.1549 23.5284 40.9948C23.3647 40.8347 23.2727 40.6176 23.2727 40.3911C23.2727 40.1647 23.3647 39.9475 23.5284 39.7874L30.7662 32.7116L23.5284 25.6357C23.3647 25.4756 23.2727 25.2584 23.2727 25.032C23.2727 24.8056 23.3647 24.5884 23.5284 24.4283C23.6922 24.2682 23.9143 24.1782 24.1459 24.1782C24.3774 24.1782 24.5995 24.2682 24.7633 24.4283L32 31.5052L39.2367 24.4283C39.4004 24.2682 39.6225 24.1782 39.8541 24.1782C40.0857 24.1782 40.3078 24.2682 40.4715 24.4283C40.6353 24.5884 40.7272 24.8056 40.7272 25.032C40.7272 25.2584 40.6353 25.4756 40.4715 25.6357L33.2337 32.7116L40.4715 39.7874Z" fill="white" />
                </svg>
                <Link to="/report"><button
                    className="w-[313px] h-16 rounded-[15px] bg-[#79b937] text-lg font-semibold text-center text-white flex justify-center items-center">
                    Потврди
                </button></Link>
            </div>
        </div>
    )
}

export default VerifyAddress
