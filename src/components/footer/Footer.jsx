import React from 'react'
import {Link} from "react-router-dom"
import "./footer.css"
function Footer() {
    return (
        <div className="footer container-fluid mt-5">
            <div className="row">
                <div className="col-md-3 p-3">
                    <h5>Site Map</h5>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link">Products</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link">Promotions</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link">About Us</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link">Contact Us</Link>
                        </li>   
                    </ul>
                </div>
                <div className="col-md-3 p-3">
                    <h5>Customer Service</h5>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link">Terms & Conditions</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link">Return policy</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link">Delivery</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link">FAQ</Link>
                        </li>
                    </ul>
                </div>
                <div className="col-md-3 p-3">
                    <p>Follow us on our Social:</p>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a href="https://www.facebook.com/VegetarianAsianGrocer/?ref=page_internal" className="p-3"><i className="fab fa-facebook font-weight-bold" /></a>
                            <a href="#" className="p-3"><i className="fab fa-instagram font-weight-bold" /></a>
                            
                        </li>

                    </ul>
                </div>
                <div className="col-lg-3 p-3">
                    <h5>Locate Us</h5>

                    
                </div>
            </div>
            <div className="row display-flex">
                <p className="text-center text-muted">&copy; Infinity Pacific 2021</p>
                <p className="float-right"><i className="small text-muted">created by <a href="https://www.github.com/angks">AKS</a></i></p>
            </div>
        </div>
    )
}

export default Footer
