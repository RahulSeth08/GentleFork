import logo from './logo.svg';
import './App.css';
// import { BrowserRouter , Route , Routes , Redirect  } from "react-router-dom"
import Prenavbar from "./components/Prenavbar"
// import Cart from "./components/Cart";
import Heading from "./components/Heading"
import Category from "./components/Category"
import NewReleases from "./components/NewReleases"
import Deals from "./components/Deals"
import Products from "./components/Products"
import OfferedProducts from "./components/OfferedProducts"
import ContactUs from './components/ContactUs.js';
import Footer from "./components/Footer.js"



function App() {
  return (
    <div>
   {/* <BrowserRouter>
   <Prenavbar/>
   <Routes>
    <Route path = "/Cart" component={Cart}/>"
   </Routes>
   </BrowserRouter>   */}
   {/* <Prenavbar/> */}
   <Prenavbar/>
   <Heading/>
   <Category/>
   <NewReleases/>
   <Deals/>
   <Products/>
   <OfferedProducts/>
   <ContactUs/>
   <Footer/>

   
/* the way this is organized makes our order of components !!*/
    {/* <!-- <i className="fas fa-bone"></i>   <i className="fa-solid fa-dog"></i> --> */}
       
   
</div>
  );
}

// document.addEventListener("DOMContentLoaded", function() {
//   const addToCartButtons = document.querySelectorAll(".add-to-cart");
//   const cartIcon = document.querySelector(".cart-icon");
//   const cartPage = document.querySelector(".cart-page");
//   const cartItemsList = document.querySelector(".cart-items");

//   // Function to handle adding items to cart
//   function addToCart(event) {
//       const product = event.target.closest(".box");
//       const productName = product.querySelector("h2").textContent;
//       const productPrice = product.querySelector(".price").textContent;

//       const cartItem = document.createElement("li");
//       cartItem.textContent = `${productName} - ${productPrice}`;
//       cartItemsList.appendChild(cartItem);
//   }

//   // Add click event listeners to all "Add to Cart" buttons
//   addToCartButtons.forEach(button => {
//       button.addEventListener("click", addToCart);
//   });

//   // Show/hide cart page when clicking on cart icon
//   cartIcon.addEventListener("click", function() {
//       cartPage.classList.toggle("hidden");
//   });
// });

export default App;
