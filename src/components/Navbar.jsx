import React from 'react'
import { NavLink } from 'react-router-dom'
export const Navbar = () => {
  return (
    <div className='flex flex-row gap-4 place-content-evenly'>
        <NavLink
        to="/">
            Home
        </NavLink>
         <NavLink to="/pastes">
            pastes
         </NavLink>
    </div>
  )
}
