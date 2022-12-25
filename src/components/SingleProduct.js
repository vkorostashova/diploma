import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from 'react-router-dom';
import './SingleProduct.css';
function SingleProduct() {
    let { productId } = useParams();
    const [product, setProduct] = useState({})
    useEffect(() => {
        fetch('https://fakestoreapi.com/products/' + productId)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [productId])
    return <div className={"mb-5"}>
        <h3 className={" p-5 text-center"} >{product.title}</h3>
        <div className={'single-product'}>
            <div className={"text-center d-flex"}>
                <img src={product.image} />
                <div className={"text-center d-flex single-description  justify-content-between  "} >
                    <h6 className={"pt-5"}>{product.description}</h6>
                    <h4 className={"text-primary p-2"}>Price: {product.price}$</h4>
                </div>
            </div>
        </div>
    </div>
}

export default SingleProduct;