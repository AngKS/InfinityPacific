import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Logo from "./logo.png"
import "./navbar.css"

function Navbar() {

    useEffect(() => {
        
    }, [])

    return (
        <div className="justify-content-center text-center">
            <Link className="mx-auto" to="/"><img className="" src={Logo} alt=""/></Link>
            <nav className="navbar navbar-expand-sm justify-content-md-center sticky-top">
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
                            {
                                localStorage.getItem("cart") ? <span className="badge badge-light">{localStorage.getItem("cart").length}</span> : null
                            }
                        </Link>
                    </li>
                </ul>
                
            </nav>
        </div>
    )
}

export default Navbar
