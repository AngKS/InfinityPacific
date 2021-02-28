import React from 'react'
import { Link } from "react-router-dom"
import "./footer.css"
function Footer() {
    return (
        <div className="footer container-fluid mt-5">
            <div className="row mx-auto justify-content-center">
                <div className="col-md-2 p-3">
                    <h5>Site Map</h5>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/products" className="nav-link">Products</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/promotions" className="nav-link">Promotions</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className="nav-link">About Us</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contact" className="nav-link">Contact Us</Link>
                        </li>
                    </ul>
                </div>
                <div className="col-md-2 p-3">
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
                <div className="col-md-2 p-3">
                    <h5>Follow us on our Social:</h5>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a href="https://www.facebook.com/VegetarianAsianGrocer/?ref=page_internal" className="p-3"><i className="fab fa-facebook font-weight-bold" /></a>
                            <a href="#" className="p-3"><i className="fab fa-instagram font-weight-bold" /></a>

                        </li>

                    </ul>

                </div>
                <div className="col-md-2 p-3">
                    <h5 className="p-0">Contact Us</h5>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            Address: 100 Palm Drive
                        </li>
                        <li className="nav-item">
                            Main Line: (+65) 1111 2222
                        </li>
                        <li className="nav-item">
                            Email: test@email.com
                        </li>
                        <li className="nav-item">
                            [MAP]
                        </li>
                    </ul>


                </div>
            </div>
            <hr/>
            <div className="row display-flex">
                <p className="text-center text-muted">&copy; Infinity Pacific 2021</p>
                <p className="float-right"><i className="small text-muted">created by <a href="https://angks.github.io/">AKS</a></i></p>
            </div>
        </div>
    )
}

export default Footer
