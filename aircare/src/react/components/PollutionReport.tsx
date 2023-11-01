import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FindLocation } from '../context/LocationContext'

const PollutionReport = () => {
    const {address} = FindLocation()
    const location = useLocation();


  return (
    <div className='mb-28'>
          <div className="px-[23px]">
              <p className="text-base font-bold text-center uppercase text-[#343a40] mt-[49px] mb-[57px]">Анонимна Пријава</p>
              <p className="text-base font-semibold text-[#343a40] ml-[6px]">Инфомации за пријава</p>
              <div className="flex justify-between">
                  <div className="flex flex-col">
                      <p className="w-[209px] text-sm font-medium text-left text-[#343a40]">{address}</p>
                      <p className="text-xs font-medium text-left text-black/50">{}</p>
                      <p className="w-[181px] text-xs font-medium text-left text-black/50">
                          Коментар: Загадувањето се чувствува 10 дена.
                      </p>
                  </div>
                  <div className="w-[117px] h-[120px] max-mr-[50px]">
                      <img src={require("../../images/Rectangle 74.png")} className="rounded-[10px] object-cover w-full h-full"
                          style={{boxShadow: "0px 4px 4px 0 rgba(0,0,0,0.25);"}} />
                  </div>
              </div>
              <div className="flex justify-center my-[28px]">
                  <svg width="354" height="2" viewBox="0 0 354 2" fill="none" xmlns="http://www.w3.org/2000/svg"
                      preserveAspectRatio="xMidYMid meet">
                      <path d="M1 1H353" stroke="#CCCCCC" stroke-linecap="round"></path>
                  </svg>
              </div>
              <div className="mb-[153px]">
                  <p className="text-sm font-semibold text-[#343a40]">
                      Дали сакаш да добиваш известувања за пријавата
                  </p>
                  <div className="flex justify-between mt-[22px]">
                      <button className="w-[189px] h-[42px] rounded-[10px] bg-white text-sm font-medium text-[#343a40] flex items-center justify-center"
                          style={{boxShadow: "0px 2px 4px 0 rgba(0,0,0,0.25);"}}>Не сакам</button>
                      <button className="w-[189px] h-[42px] rounded-[10px] bg-white text-sm font-medium text-[#343a40] flex items-center justify-center"
                          style={{boxShadow: "0px 2px 4px 0 rgba(0,0,0,0.25)"}}>Сакам</button>
                  </div>
              </div>
              <div className="flex gap-[20px] justify-between mt-[58px] mb-[58px]">
                  <Link to='/'>
                      <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"
                          className="w-16 h-16" preserveAspectRatio="none">
                          <rect x="1" y="1" width="62" height="62" rx="14" stroke="#343A40" stroke-width="2">
                          </rect>
                          <path
                              d="M40.4714 39.7874C40.5525 39.8667 40.6168 39.9608 40.6607 40.0644C40.7045 40.168 40.7271 40.279 40.7271 40.3911C40.7271 40.5032 40.7045 40.6143 40.6607 40.7178C40.6168 40.8214 40.5525 40.9155 40.4714 40.9948C40.3903 41.0741 40.294 41.137 40.1881 41.1799C40.0822 41.2228 39.9686 41.2449 39.854 41.2449C39.7393 41.2449 39.6258 41.2228 39.5198 41.1799C39.4139 41.137 39.3176 41.0741 39.2365 40.9948L31.9999 33.9179L24.7632 40.9948C24.5994 41.1549 24.3773 41.2449 24.1457 41.2449C23.9142 41.2449 23.6921 41.1549 23.5283 40.9948C23.3646 40.8347 23.2726 40.6176 23.2726 40.3911C23.2726 40.1647 23.3646 39.9475 23.5283 39.7874L30.7661 32.7116L23.5283 25.6357C23.3646 25.4756 23.2726 25.2584 23.2726 25.032C23.2726 24.8056 23.3646 24.5884 23.5283 24.4283C23.6921 24.2682 23.9142 24.1782 24.1457 24.1782C24.3773 24.1782 24.5994 24.2682 24.7632 24.4283L31.9999 31.5052L39.2365 24.4283C39.4003 24.2682 39.6224 24.1782 39.854 24.1782C40.0855 24.1782 40.3076 24.2682 40.4714 24.4283C40.6351 24.5884 40.7271 24.8056 40.7271 25.032C40.7271 25.2584 40.6351 25.4756 40.4714 25.6357L33.2336 32.7116L40.4714 39.7874Z"
                              fill="#343A40"></path>
                      </svg></Link>
                  <button
                      className="w-[313px] h-16 rounded-[15px] bg-[#79b937] text-lg font-semibold text-center text-white flex justify-center items-center">
                      Потврди
                  </button>
              </div>
              <div className="flex gap-13px justify-center gap-[13px] mb-20">
                  <p className="text-sm font-semibold text-[#343a40]">Немаш профил?</p>
                  <p className="text-sm font-semibold text-[#79b937]">Регистрирај се!</p>
              </div>
          </div>
    </div>
  )
}

export default PollutionReport
