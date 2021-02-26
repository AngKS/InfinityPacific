import React from 'react'
// import Carousel from '../slideshow/Carousel'
import Promo from '../media/promo.png'
import {Link} from "react-router-dom"
import "../css/homePage.css"

function HomePage() {
    return (
        <div className="p-2">
            <h2>Homepage</h2>
            {/* <Carousel /> */}
            <div className="promoImg">
                <img className="img-fluid" src={Promo} alt=""/>
            </div>
            <section className="productItems container-fluid">
                <h1 className="text-center">Products</h1>
                <div className="row justify-content-center my-3">
                    <div className="col-sm-5 mx-3 shadow-sm">
                        <Link className="text-center text-decoration-none">
                            <div className="">
                                <i className="fas fa-leaf" />
                                <h4>Vegetables</h4>
                            </div>
                        </Link>
                    </div>
                    <div className="col-sm-5 mx-3 shadow-sm">
                        <Link className="text-center text-decoration-none">
                            <div className="">
                                <i className="fas fa-apple-alt" />
                                <h4>Fruits</h4>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="row justify-content-center my-3">
                    <div className="col-sm-5 mx-3 shadow-sm">
                        <Link className="text-center text-decoration-none">
                            <div className="">
                                <i className="fas fa-leaf" />
                                <h4>Dairy Products</h4>
                            </div>
                        </Link>
                    </div>
                    <div className="col-sm-5 mx-3 shadow-sm">
                        <Link className="text-center text-decoration-none">
                            <div className="">
                                <i className="fas fa-ellipsis-h" />
                                <h4>More</h4>
                            </div>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default HomePage
