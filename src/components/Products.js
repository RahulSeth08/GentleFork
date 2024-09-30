import React from 'react'
import "../styles/Products.css"

const Products = () => {
  return (
    <div>
        <section className="products" id="products">

          <h1 className="heading"> <i className="fas fa-paw"></i> Our Latest Products <i className="fas fa-paw"></i></h1>

          <div className="box-container">

              <div className="box">
                  <img src="assets/Cama_Retangular_p1.png" alt="Rectangular Bed" />
                  <div className="content">
                      <div className="stars">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                      </div>
                      <h3>Rectangular Bed</h3>
                      <div className="price"> ₹67.72 <span>₹79.90</span> </div>
                      <button className="btn">Buy</button>
                  </div>
              </div>

              <div className="box">
                  <img src="assets/bol_pet_p2.png" alt="Pet Silicone Balls" />
                  <div className="content">
                      <div className="stars">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                      </div>
                      <h3>Pet Silicone Balls</h3>
                      <div className="price"> ₹37.19 <span>₹49.99</span> </div>
                      <button className="btn">Buy</button>
                  </div>
              </div>

              <div className="box">
                  <img src="assets/Premier_Gourmet_salmao.png" alt="Premier Gourmet Dogs" />
                  <div className="content">
                      <div className="stars">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                      </div>
                      <h3>Premier Gourmet Dogs</h3>
                      <div className="price"> ₹7.99 <span>₹9.49</span> </div>
                      <button className="btn">Buy</button>
                  </div>
              </div>

              <div className="box">
                  <img src="assets/racao-golden-gatos-p4.png" alt="Golden Adult Cat Food" />
                  <div className="content">
                      <div className="stars">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                      </div>
                      <h3>Golden Adult Cat Food</h3>
                      <div className="price"> ₹139.41 <span>₹154.90</span> </div>
                      <button className="btn">Buy</button>
                  </div>
              </div>

              <div className="box">
                  <img src="assets/gaiola-ramster_p5_.png" alt="Hamster Cage" />
                  <div className="content">
                      <div className="stars">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                      </div>
                      <h3>Hamster Cage</h3>
                      <div className="price"> ₹127.11 <span>₹169.03</span> </div>
                      <button className="btn">Buy</button>
                  </div>
              </div>

              <div className="box">
                  <img src="assets/racao-golden-p6.png" alt="Golden Formula Dog Food" />
                  <div className="content">
                      <div className="stars">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                      </div>
                      <h3>Golden Formula Dog Food</h3>
                      <div className="price"> ₹116.91 <span>₹129.90</span> </div>
                      <button className="btn">Buy</button>
                  </div>
              </div>

          </div>

        </section>
    </div>
  )
}

export default Products
