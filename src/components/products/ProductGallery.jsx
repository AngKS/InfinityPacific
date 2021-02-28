import React from 'react'
import ProductCard from './productCard/ProductCard'
import PRODUCTS from "./productList.json"

function ProductGallery() {


    return (
        <div className="mx-auto">
            <div className="d-flex">
                <input className="form-control m-3" type="text" placeholder="Search for item..."/>
            </div>
            <h4>Vegetables</h4>
            {
                PRODUCTS.products.length > 0 ? (
                    PRODUCTS.products.map(product => {

                        if (product.product_category == "vegetables"){
                            return (
                                <ProductCard props={product} />
                            )
                        }
                        
                    })
                ): (
                    <h3 className="text-center">There are currently no products available.</h3>
                )
            }
            <hr/>
            <h4>Fruits</h4>
            {
                PRODUCTS.products.length > 0 ? (
                    PRODUCTS.products.map(product => {
                        if (product.product_category == "fruits"){
                            return (
                                <ProductCard props={product} />
                            )
                        }
                        
                    })
                ): (
                    <h3 className="text-center">There are currently no products available.</h3>
                )
            }
            
        </div>
    )
}

export default ProductGallery
