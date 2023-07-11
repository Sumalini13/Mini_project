import React from 'react';
import Announcement from './Announcement';
import HomePage from './homepage';
import ShoppingPage from './ShoppingPage';
import Slider from './Carousel';

function Header()
{
    return (
        <div>
            <Announcement/>
            <HomePage/>
            <ShoppingPage/>
            </div>
    )
};
export default Header;