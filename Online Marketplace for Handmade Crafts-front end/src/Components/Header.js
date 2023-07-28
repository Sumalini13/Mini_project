import React from 'react';
import Announcement from './Announcement';
import Slideshow from './Slideshow';
import Categories from './Categories';
import Categories2 from './Categories2';
import FlipCard from './FlipCard';
function Header()
{
    return (
        <div>
            
            <Announcement/>
            <Slideshow/>
            <br></br><br></br><br></br>
            <Categories/>
            <Categories2/>
            <br></br>
           <center> <h1><u><b>BEST SELLERS</b></u></h1></center>
            <FlipCard/>
            </div>
    )
};
export default Header;