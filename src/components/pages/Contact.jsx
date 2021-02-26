import React from 'react'
import {Link} from "react-router-dom"

function Contact() {
    return (
        <div>
            <h2>Contact Us</h2>
            <section className="row d-flex justify-content-center">
                <div className="col-lg-5">
                    <h5>Serving Farm-fresh 100% Organic Groceries Everyday.</h5>
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
                
                <div className="col-lg-5 shadow p-3">
                    
                    <form action="" className="">
                        <div className="form-group">
                            <label htmlFor="email">Enter your Email:</label>
                            <input className="form-control" type="email" name="" id="email" placeholder="Enter your email..."/>
                        </div>
                        
                    </form>
                </div>
            </section>
        </div>
    )
}

export default Contact
