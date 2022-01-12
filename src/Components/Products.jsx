import React from 'react';
import Productbox from './Productbox';
import pimage1 from '../burger/hamburger.jpg';
import pimage2 from '../burger/logo.png';
import pimage3 from '../burger/download.jpg';


function Products() {
    return (
        
            <div id='products'>
            <h1>Choose & Enjoy </h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate voluptatum animi ut, possimus sed quaerat. </p>
            <div className='a-container'>
                <Productbox image={pimage1} title="Burger" />
                <Productbox image={pimage2} title="Custard" />
                <Productbox image={pimage3} title="Pasta" />

            </div>
        </div>
    )
}

export default Products
