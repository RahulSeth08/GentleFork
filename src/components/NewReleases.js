import React from 'react'
import  "../styles/NewReleases.css"
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';

const NewReleases = () => {
  return (
    <div>
         <section className="featured" id="featured">

<h1 className="heading"> <i className="fas fa-paw"></i> New Releases <i className="fas fa-paw"></i></h1>

<div className="box-container">

    <div className="box">
        <div className="price">₹249.99</div>
        <img src="assets/escada-pet.png" alt="" />
        <div className="content">
            <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
            </div>
            <h3>Pet Stairs with 4 Anti-Slip Steps</h3>
            <p>Make Your Pet's Routine and Life Easier with Portable Stairs and Ramps!</p>
            <a href="#" className="btn">Buy now</a>
            {/* <Stack direction="row" spacing={2}> */}
            
{/* <div class="products">
    <div class="box-container">
        <div class="box">
            <div class="content">
                <h2>Product 1</h2>
                <p>Description of product 1</p>
                <div class="price">$20</div>
                <button class="add-to-cart">Add to Cart</button>
            </div>
        </div>
        
    </div>
</div>


<div class="cart-icon">
    <img src="cart-icon.png" alt="Cart"/>
</div>


<div class="cart-page hidden">
    <h2>Items in Cart</h2>
    <ul class="cart-items">
        
    </ul>
</div> */}

      {/* <Button classname="box" variant="outlined" startIcon={<DeleteIcon />}>
        Delete
      </Button>
      <Button variant="contained" endIcon={<SendIcon />}>
        Send
      </Button>
    </Stack> */}
        

       

        </div>
    </div>

    <div className="box">
        <div className="price">₹139.90</div>
        <img src="assets/marmita-para-pet.png" alt="" />
        <div className="content">
            <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
            </div>
            <h3>Pet Food Container Stainless Steel</h3>
            <p>Ensure fresh food for your pet even when you're away from home.</p>
            <a href="#" className="btn">Buy now</a>
        </div>
    </div>

</div>


</section>
    </div>
  )
}

export default NewReleases