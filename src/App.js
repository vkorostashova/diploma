import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Footer from "./components/Footer";
import Products from "./components/Products";
import SingleProduct from "./components/SingleProduct";
import About from "./components/About";
import Nav from 'react-bootstrap/Nav';

import './App.css';

function App() {
  return <Router>
      <header className={'p-3 header'}>
        <div className={'container '}>
          <Nav
            fill defaultActiveKey="/home"
          >
            <Nav.Item>
              <Link to="/" href="/home" className={'text-white'}>Home</Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/products" eventkey="link-2" className={'text-white'}>Products</Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/about" eventkey="link-1" className={'text-white'}>About</Link>
            </Nav.Item>
          </Nav>
        </div>
      </header>
      <div className={'content p-4'}>
        <Switch>
          <Route path="/products">
            <h1>Products</h1>
            <Products />
          </Route>
          <Route path="/product/:productId">
            <SingleProduct />
          </Route>
          <Route path="/about">
            <h1>About</h1>
            <About />
          </Route>
          <Route path="/">
            <h1>Home</h1>
          </Route>
        </Switch>
      </div>
      <Footer/>
  </Router>

}

export default App;
