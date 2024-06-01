import React from 'react'
import  "../styles/OfferedProducts.css"

const OfferedProducts = () => {
  return (
    <div>
        <section className="offer" id="offer">

<h1 className="heading"> <i className="fas fa-paw"></i> Products on Offer <i className="fas fa-paw"></i></h1>

<div className="box-container">

    <div className="box">
        <img src="assets/offer-img1_.png" alt="" />
        <div className="content">
            <span>Best Deals</span>
            <h3>Up to 50% off</h3>
            <a href="#" className="btn">View Offers</a>
        </div>
    </div>

    <div className="box">
        <img src="assets/offer-img2_.png" alt="" />
        <div className="content">
            <span>Today's Discounts</span>
            <h3>Up to 80% off</h3>
            <a href="#" className="btn">View Offers</a>
        </div>
    </div>

</div>

</section>

    </div>
  )
}

export default OfferedProducts