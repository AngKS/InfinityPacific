import React, { useState } from 'react'
import { Link } from "react-router-dom"
import FAQ from '../faq/FAQ'
import "../css/contact.css"

function Contact() {

    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [subj, setSubj] = useState()
    const [desc, setDesc] = useState()

    let makeQUERY = () => {
        const QUERY = {
            "name" : name,
            "email" : email,
            "subject" : subj,
            "description" : desc
        }
        localStorage.setItem("query", QUERY)
    }



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

                <div className="col-lg-5 shadow p-3 rounded">
                    <form action="" className="">
                        <div className="form-header">
                            <h3>Reach out to Us!</h3>
                        </div>
                        <div className="form-group">
                            <label htmlFor="name">Enter your Name:</label>
                            <input className="form-control" type="text" name="" id="name" placeholder="Enter your Name..." onChange={(e) => setName(e.target.value)} required="required"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Enter your Email:</label>
                            <input className="form-control" type="email" name="" id="email" placeholder="Enter your email..." onChange={(e) => setEmail(e.target.value)} required="required"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="subject">Subject/Queries:</label>
                            <input className="form-control" type="text" name="" id="subject" placeholder="Enter your Question..." onChange={(e) => setSubj(e.target.value)} required="required"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="subject">Description:</label>
                            <textarea className="form-control" rows="3" id="subject" onChange={(e) => setDesc(e.target.value)} required="required"></textarea>
                        </div>
                        <button className="btn bg-light-default" onClick={() => makeQUERY()}>Submit</button>
                    </form>
                </div>
            </section>
        </div>  
    )
}

export default Contact
