import logo from './logo.svg';
import './App.css';
import Prenavbar from "./components/Prenavbar"
import Heading from "./components/Heading"
import Category from "./components/Category"
import NewReleases from "./components/NewReleases"
import Deals from "./components/Deals"


function App() {
  return (
    <div>
      
   <Prenavbar/>
   <Heading/>
   <Category/>
   <NewReleases/>
   <Deals/>
   

    {/* <!-- <i className="fas fa-bone"></i>   <i className="fa-solid fa-dog"></i> --> */}
   

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




<section className="contact" id="contact">

    <h1 className="heading"> <i className="fas fa-paw"></i> Contact Us <i className="fas fa-paw"></i></h1>

    <form action="">

        <div className="inputBox">
            <input type="text" maxLength="40" placeholder="Name" />
            <input type="text" name="email" maxLength="60" placeholder="Email" />
        </div>

        <div className="inputBox">
            <input type="number" min="0" maxLength="20" placeholder="Phone" />
            <input type="text" placeholder="Subject" />
        </div>

        <textarea name="" id="" cols="30" rows="10" placeholder="Message"></textarea>

        <input type="submit" value="Send Message" className="btn" />


    </form>


</section>


<section className="footer">

    <div className="share">
        <a href="#" className="btn">
            <i className="fab fa-youtube"></i>
        </a>
        <a href="#" className="btn">
            <i className="fab fa-facebook-f"></i>
        </a>
        <a href="#" className="btn">
            <i className="fab fa-twitter"></i>
        </a>
        <a href="#" className="btn">
            <i className="fab fa-linkedin"></i>
        </a>
        <a href="#" className="btn">
            <i className="fab fa-instagram"></i>
        </a>
    </div>

    <h1 className="credit"> created by <span> Rahul Seth & Madhav Sharma </span> | © all rights reserved! </h1>



</section>




    
   
</div>
  );
}

export default App;
