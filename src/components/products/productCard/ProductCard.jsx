import React from 'react'
import { Link } from "react-router-dom"
import "./productCard.css"


function ProductCard(props) {

    return (

        <div className="d-inline-flex">
            <Link to="/" className="card-container text-decoration-none">
                <figure className="m-0">
                    <img src="./placeholder.png" alt="product_image"/>
                </figure>
                <div className="card-body">
                    <p className="small text-muted"><i>{props.props.created_at}</i></p>
                    <h5 className="py-2 m-0">{props.props.product_name}</h5>
                    {
                        props.props.promotion ? (
                            <span className="badge bg-danger">PROMO</span>
                            
                        ) : (
                            <span className="badge "> </span>
                        )
                    }
                    <p className="text-left">{props.props.product_description}</p>
                    <h6 className="text-danger justify-content-start" >${props.props.product_price.toFixed(2)}</h6>
                </div>
            </Link>
        </div>
    )
}

export default ProductCard
