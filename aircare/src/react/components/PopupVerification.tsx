import React from 'react'

interface Props {
  togglePopup: () => void
}

const PopupVerification = ({togglePopup} : Props) => {
  return (
    <div
      className="w-full bottom-0 fixed z-10 rounded-tl-[50px] rounded-tr-[50px] bg-[#343a40] pt-[12px] pb-[41px] flex flex-col justify-center">
      <div onClick={togglePopup} className="w-[134px] h-[5px] rounded-[15px] bg-[#d9d9d9] flex self-center mb-[21px]"></div>
      <p className="text-lg font-semibold text-center text-white">Избери Јазик</p>
      <div className="flex items-center gap-[28px] flex-col mt-[53px]">
        <p className="text-lg font-medium text-center text-white">Македонски</p>
        <svg width="233" height="2" viewBox="0 0 233 2" fill="none"
          xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
          <path d="M1 1H232" stroke="#525659" stroke-width="0.810093" stroke-linecap="round"></path>
        </svg>
        <p className="text-lg font-medium text-center text-white">English</p>
        <svg width="233" height="2" viewBox="0 0 233 2" fill="none"
          xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
          <path d="M1 1H232" stroke="#525659" stroke-width="0.810093" stroke-linecap="round"></path>
        </svg>
        <p className="text-lg font-medium text-center text-white">Albanian</p>
      </div>
    </div>
  )
}

export default PopupVerification
