import React from 'react'
import Carousel from '../slideshow/Carousel'
import Promo from '../media/promo.png'


function HomePage() {
    return (
        <div>
            <h2>Homepage</h2>
            <Carousel />
            <img src={Promo} alt=""/>
            
        </div>
    )
}

export default HomePage
