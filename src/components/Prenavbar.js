import React from 'react'
import "../styles/PreNavbar.css"

const Prenavbar = () => {
  return (
    <div>


<header>

        <div id="menu" className="fas fa-bars"></div>

        <a href="#home" className="logo"><i className="fa-solid fa-dog"></i> GentlePaws </a>

        <nav className="navbar">
            <a href="#home">home</a>
            <a href="#category">category</a>
            <a href="#featured">features</a>
            <a href="#products">products</a>
            <a href="#offer">offers</a>
            <a href="#contact">contact</a>
        </nav>

        <div className="icons">
            <i className="fas fa-search" id="search-icon" ></i>
            <a href="#" className="fas fa-heart"></a>
            <a href="#" className="fas fa-shopping-cart" ></a>
        </div>

        <form action="" id="search-box">
            <input type="search" id="search" placeholder="Search at GentlePaws..." />
            <label htmlFor="search" className="fas fa-search"></label>          
           
        </form>

    </header>
    </div>
  )
}

export default Prenavbar