import React from 'react'
import  "../styles/ContactUs.css"

const ContactUs = () => {
  return (
    <div>
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

    </div>
  )
}

export default ContactUs