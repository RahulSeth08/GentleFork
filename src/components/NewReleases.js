import React from "react";
import "../styles/NewReleases.css";

const NewReleases = () => {
  return (
    <div>
      <section className="featured" id="featured">
        <h1 className="heading">
          {" "}
          <i className="fas fa-paw"></i> New Releases{" "}
          <i className="fas fa-paw"></i>
        </h1>

        <div className="box-container">
          <div className="box">
            <div className="price">₹249.99</div>
            <img src="assets/escada-pet.png" alt="Pet Stairs with 4 Anti-Slip Steps" />
            <div className="content">
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <h3>Pet Stairs with 4 Anti-Slip Steps</h3>
              <p>
                Make Your Pet's Routine and Life Easier with Portable Stairs and
                Ramps!
              </p>
              <button className="btn">Buy now</button>
            </div>
          </div>

          <div className="box">
            <div className="price">₹139.90</div>
            <img src="assets/marmita-para-pet.png" alt="Pet Food Container Stainless Steel" />
            <div className="content">
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <h3>Pet Food Container Stainless Steel</h3>
              <p>
                Ensure fresh food for your pet even when you're away from home.
              </p>
              <button className="btn">Buy now</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewReleases;
