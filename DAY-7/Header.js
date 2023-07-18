import React from 'react';
import Announcement from './Announcement';
import Slideshow from './Slideshow';
import Categories from './Categories';
import Categories2 from './Categories2';
import FlipCard from './FlipCard';
import AboutUs from './AboutUs';
import Footer from './Footer';
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
            <br></br><br></br><br></br>
           <center> <h1><u><b>BEST SELLERS</b></u></h1></center>
            <FlipCard/>
            <br></br><br></br>
           <Footer/>
          
           
            </div>
    )
};
export default Header;