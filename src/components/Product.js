import React from "react";
import { Button, } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import './Product.css'

function Product({ product, addProductToCart, removeProductFromCart }) {
    return <>
        <div className={'col-sm-6  col-lg-4 col-xl-3 product p-3'}>
            <div className={"text-center"}>
                <img src={product.image} />
            </div>
            <h5 className={'box'}>{product.title}</h5>
            <h6><Link to={`/product/${product.id}`}>Learn more</Link></h6>
            <h6>{product.price.toFixed(2)}$</h6>
            {product.addedToCart ? <Button variant={'danger'} className={'btn'} onClick={(() => removeProductFromCart(product.id))}>Remove from Cart</Button>
                : <Button variant={'success'} onClick={(() => addProductToCart(product.id))}>Add to Cart</Button>}
        </div>
    </>
}
export default Product;