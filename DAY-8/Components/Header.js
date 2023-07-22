import React from 'react';
import Announcement from './Announcement';
import Slideshow from './Slideshow';
import Categories from './Categories';
import Categories2 from './Categories2';
import FlipCard from './FlipCard';
import AboutUs from './AboutUs';
import Footer from './Footer';
import Art from './Artisans';
import "./header.css";
function Header()
{
    return (
        <div>
            
            <Announcement/>
            <Slideshow/>
            <br></br><br></br><br></br>
            <Categories/>
            <Categories2/>
            <br></br><br></br>
            <AboutUs/>
            <br></br>
            <div class="back">
           <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
           <center> <h1><u><b>EXPLORE WITH OUR ARTISANS</b></u></h1></center>
           <br></br>
            <Art/>
            <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
            </div>
       <center>  <h4>   TESTIMONILAS</h4></center>
            <hr></hr>

            <br></br>
           <center><h4>Our Customers Speak with us</h4></center>
            { <FlipCard/> }
       <br></br>
           <Footer/>
          
           
            </div>
    )
};
export default Header;