import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
      <ul>
        <li>
          <NavLink to='/'>Home</NavLink>
        </li>
        <li>
          <NavLink to='/fizzbuzz'>FizzBuzz</NavLink>
        </li>
        <li>
          <NavLink to='/objfromstring'>ObjFromString</NavLink>
        </li>
        <li>
          <NavLink to='/multiply'>Multiply</NavLink>
        </li>
        <li>
          <NavLink to='/hello'>Hello</NavLink>
        </li>
        <li>
          <NavLink to='/hellofunctional'>Hello Functional</NavLink>
        </li>
        <li>
          <NavLink to='/gifs'>Gifs</NavLink>
        </li>
        <li>
          <NavLink to='/counter'>Counter</NavLink>
        </li>
      </ul>
    </div>
  )
}

export default NavBar
