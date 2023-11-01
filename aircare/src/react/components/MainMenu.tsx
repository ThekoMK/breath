import React from 'react'
import CurvedMenu from './CurvedMenu'
import Menu from './Menu'
import { useLocation } from 'react-router-dom'

const MainMenu = () => {
    const location = useLocation()

  return (
    <>
          {location.pathname === '/' || location.pathname === '/profile' || location.pathname === '/aboutus' || location.pathname === "/pickLocation" ? (
              <CurvedMenu />
          ) : (
              <Menu />
          )}
    </>
  )
}

export default MainMenu
