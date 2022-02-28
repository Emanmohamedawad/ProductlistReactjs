import React from 'react'

export default function Header() {
  return (
    <nav>
        <div className="logo">Ema.</div>
        <ul>
            <li>Home</li>
            <li>Our Product</li>
            <li>About Us</li>
            <li>Contact</li>
        </ul>
        <div className="search">
               
                <i className="fa fa-search"></i>
                <i className="fa fa-shopping-basket"></i>
        </div>
    </nav>
  )
}
