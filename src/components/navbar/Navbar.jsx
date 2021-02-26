import React from 'react'
import { Link } from 'react-router-dom'
import Logo from "./logo.png"
import "./navbar.css"

function Navbar() {
    return (
        <div className="">
            <Link to="/"><img className=" justify-content-md-center" src={Logo} alt=""/></Link>
            <nav className="navbar navbar-expand-sm justify-content-md-center">
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
                        <Link to="/about" className="nav-link">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contact" className="nav-link">Contact</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link">
                            <i className="fas fa-user" />
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link">
                            <i className="fas fa-shopping-cart" />
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
