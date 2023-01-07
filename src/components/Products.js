import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Cart from "./Cart";
import Product from "./Product";
import './Products.css';
import Search from "./Search";

function Products() {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setfilteredProducts] = useState([]);
    const [search, setSearch] = useState('');
    const [cartActive, setCartActive] = useState(false);

    function getSavedCart() {
        return localStorage.getItem('saved_cart') ? JSON.parse(localStorage.getItem('saved_cart')) : [];
    }


    function saveCart(newCart) {
        localStorage.setItem('saved_cart', JSON.stringify(newCart.filter(el => el.addedToCart).map(product => ({
            count: product.count,
            id: product.id,
            addedToCart: product.addedToCart
        }))));
    }

    useEffect(() => {
        const savedCart = getSavedCart();
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setProducts(data.map(product => {
                let filteredProduct = savedCart.filter(pr => pr.id === product.id);

                filteredProduct = filteredProduct.length ? filteredProduct[0] : {};

                return { ...product, addedToCart: filteredProduct.addedToCart || false, count: filteredProduct.count || 1 };
            })));
    }, []);

    console.log(products)

    function changeCount(id, newCount) {
        if (newCount > 0) {
            const result = products.map(product => ({ ...product, count: product.id === id ? newCount : product.count }));
            setProducts(result);

            saveCart(result);
        }
    }

    function addProductToCart(id) {
        const result = products.map(product => ({ ...product, addedToCart: product.id === id ? true : product.addedToCart }));
        setProducts(result);
        saveCart(result);
    }

    function removeProductFromCart(id) {
        const result = products.map(product => ({ ...product, addedToCart: product.id === id ? false : product.addedToCart }));
        setProducts(result);
        saveCart(result);
    }

    function searchByProductName(value) {
        setSearch(value);
        const result = products.filter(product => product.title.toLowerCase().includes(value));
        setfilteredProducts(result)
    }


    return <>
        <div className={'row p-4'}>
            <div className={"d-flex col-12  justify-content-between"}>

                <h1 className={"mb-5"}>Products</h1>
                <Button className={getSavedCart().length > 0 ? 'btn-success btn-cart mt-2 px-2 ' : 'btn-secondary btn-cart mt-2 px-2  '} onClick={() => setCartActive(true)} >🛒</Button>
            </div>
            
            <Search
                searchByProductName={searchByProductName}
            />
            {(search.length ? filteredProducts : products).map(product => <Product
                removeProductFromCart={removeProductFromCart}
                addProductToCart={addProductToCart}
                product={product}
                key={product.id} />)}
        </div>
        <Cart
            active={cartActive}
            setActive={setCartActive}
            changeCount={changeCount}
            removeProductFromCart={removeProductFromCart}
            products={products.filter(product => product.addedToCart)}
        />
    </>

}

export default Products;