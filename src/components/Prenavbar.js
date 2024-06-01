  import React from 'react'
import "../styles/PreNavbar.css"

const Prenavbar = () => {
  return (
    <div>


<header>

        {/* <div id="menu" className="fas fa-bars"></div>  {menu hata diya} */}  

        <a href="#home" className="logo"><i className="fa-solid fa-dog"></i> GentlePaws </a>

        <nav className="navbar">
            <a href="#home">Home</a>
            <a href="#category">Category</a>
            <a href="#featured">Features</a>
            <a href="#products">Products</a>
            <a href="#offer">Offers</a>
            <a href="#contact">Contact</a>
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