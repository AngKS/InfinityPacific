import React, { useState } from 'react'
import INFO from "./FAQs.json"

function FAQ() {

    const [clicked, setClicked] = useState()

    return (
        <div>
            <div>
                {
                    INFO.FAQs.map(query => {
                        
                        // return (<FAQ_container props={query} />)
                        return (
                            <div className="text-default">
                                <div className="d-flex">
                                    <h5 className="text-black mr-auto" onClick={() => {setClicked(!clicked)}} data-target={"#" + query.id}>{query.title}</h5>
                                    {/* <i className="fas fa-arrow-right" /> */}
                                </div>
                                <p className={clicked ? "collapse show" : "collapse"} id={query.id}>
                                    {query.text}
                                </p>
                                <hr />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default FAQ
