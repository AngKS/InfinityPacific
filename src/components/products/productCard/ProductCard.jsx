import React from 'react'
import { Link } from "react-router-dom"
import "./productCard.css"


function ProductCard(props) {

    let cart = localStorage.getItem("cart")
    let quantity = cart ? cart : 0
    let addItem = () => {
        quantity++
        localStorage.setItem("cart", quantity)
    }


    return (

        <div className="d-inline-flex">
            <Link to="/products" className="card-container text-decoration-none" onClick={addItem}>
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
