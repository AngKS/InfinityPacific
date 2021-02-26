import React from 'react'

function FAQcontainer(props) {


    return (
        <div>
            {console.log("BELLo")}
            <h4 className="text-default" data-toggle="collapse" data-target="#description">{props.title}</h4>
            <div className="collapse" id="description">
                {props.text}
            </div>
        </div>
    )
}

export default FAQcontainer
