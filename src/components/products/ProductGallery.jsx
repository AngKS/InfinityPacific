import React from 'react'
import ProductCard from './productCard/ProductCard'
import PRODUCTS from "./productList.json"

function ProductGallery() {


    return (
        <div className="mx-auto">
            <div className="d-flex">
                <input className="form-control m-3" type="text" placeholder="Search for item..." />
            </div>

            {
                PRODUCTS.products.length > 0 ? (
                    PRODUCTS.products.map(category => {
                        return (
                            <div>
                                {console.log(category)}
                                <h4>{category.category_name}</h4>
                                <div>
                                    {
                                        category.items.map(item => {return <ProductCard props={item} />})
                                    }
                                </div>
                                <hr />
                            </div>
                        )

                    })
                ) : (
                        <h3 className="text-center">There are currently no products available.</h3>
                    )
            }

        </div>
    )
}

export default ProductGallery
