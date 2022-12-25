import React from "react";
import { Badge } from "react-bootstrap";
import './Cart.css'
import Total from "./Total";
function Cart({ active, setActive, changeCount, removeProductFromCart, products }) {
    return <>
        <div className={active ? 'cart active d-flex' : 'cart d-flex'} onClick={() => setActive(false)}>
            <div className={"cart-content"} onClick={e => e.stopPropagation()}>

                <ul className={'col-12'}>
                    {products.map(product => <li key={product.id}>
                        <div className={'d-flex '}>
                            <div >
                                <img className={'cart-img'} src={product.image} />
                            </div>
                            <div className={'pl-3'}>
                                <h5>{product.title}</h5>
                                (<Badge className={'m-1  bg-danger text-white'} onClick={() => changeCount(product.id, product.count - 1)}>-</Badge> {product.count} <Badge className={'m-1  bg-success text-white'} onClick={() => changeCount(product.id, product.count + 1)} >+</Badge>)
                                <Badge className={'m-2  bg-secondary text-white'} onClick={() => removeProductFromCart(product.id)}>Remove</Badge>
                            </div>
                        </div>
                    </li>)}
                </ul>
                <Total products={products} />
            </div>
        </div>

    </>
}

export default Cart;