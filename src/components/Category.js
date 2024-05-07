import React from 'react'
import  "../styles/Category.css"

const Category = () => {
  return (
    <div>
         <section className="category" id="category">
        <h1 className="heading"> <i className="fas fa-paw"></i> Pet food by category <i className="fas fa-paw"></i></h1>
        <div className="box-container">

            <div className="box">
                <img src="assets/Pet_1.png" alt="" />
                <h3>dog food</h3>
                <a href="#" className="btn">Buy now</a>
            </div>

            <div className="box">
                <img src="assets/Pet_2.png" alt="" />
                <h3>Rabbit food</h3>
                <a href="#" className="btn">Buy now</a>
            </div>

            <div className="box">
                <img src="assets/Pet_3.png" alt="" />
                <h3>Cat food</h3>
                <a href="#" className="btn">Buy now</a>
            </div>

            <div className="box">
                <img src="assets/Pet_4.png" alt="" />
                <h3>Bird food</h3>
                <a href="#" className="btn">Buy now</a>
            </div>

        </div>


    </section>
    </div>
  )
}

export default Category