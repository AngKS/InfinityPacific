import React from 'react'
import { Link } from "react-router-dom"
import FAQ from '../faq/FAQ'

function Contact() {
    return (
        <div>
            <h2>Contact Us</h2>
            <section className="row d-flex justify-content-center">
                <div className="col-lg-5 p-3">
                    <div className="FAQ">
                        <h2>How can we serve you Better?</h2>
                        <p className='text-secondary'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic sapiente nulla animi rerum temporibus exercitationem repellat, labore praesentium quibusdam! Perspiciatis soluta error est! Totam laudantium animi veritatis rerum quo ipsum.
                        </p>
                        <FAQ />

                    </div>
                </div>

                <div className="col-lg-5 shadow p-3">
                    <form action="" className="">
                        <div className="form-group">
                            <label htmlFor="email">Enter your Email:</label>
                            <input className="form-control" type="email" name="" id="email" placeholder="Enter your email..." />
                        </div>

                    </form>
                </div>
            </section>
        </div>
    )
}

export default Contact
