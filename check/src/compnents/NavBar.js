import React from 'react'
import { Link } from 'react-router-dom'


const NavBar = () => {

  

  return (
    <div>
    <nav className="mx-10px flex justify-between bg-purple-800 p-3">
      <Link to="/">
        <img
          src="images/logo.png"
          alt="Logo"
          className="h-19 w-20 rounded-full"
        />
      </Link>
      <div className="flex space-x-3 mt-2">
        <ul className="list-none text-lg flex space-x-3 pt-4 text-white">
          <li className="hover:text-red-500 hover:underline">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-red-500 hover:underline">
            <Link to="/Burger">Burger</Link>
          </li>
          <li className="hover:text-red-500 hover:underline">
            <Link to="/Pizza">Pizza</Link>
          </li>
          <li className="hover:text-red-500 hover:underline">
            <Link to="/Login">Login/Register</Link>
          </li>
          <li className="hover:text-red-500 hover:underline">
            <Link to="/AboutUs">About us</Link>
          </li>
          <li className="hover:text-red-500 hover:underline">
            <Link to="/ContactUs">Contact us</Link>
          </li>
        </ul>
        <div>
          <Link to="/CartPage">
          <img src="images/cart.svg" alt="cart" className="h-12 w-12 pt-4" />
          </Link>
        </div>
      </div>
    </nav>
    
    </div>
  )
}

export default NavBar