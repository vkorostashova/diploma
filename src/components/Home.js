import React from "react";
import './Home.css'

function Home() {
    return <>
        <div className={' text-center col-12 '} >
            <h5 className={'text-secondary'} >Thank you for visiting our online store &#128153;</h5>
        </div>
        <hr />
        <div className={'pt-4 text-center col-12 '}>
            <h1>What can you buy in our store</h1>
            <div className={'row d-flex mt-5 '}>
                <div className={'col text-primary m-1 home-category'} >
                    <h5>Men's clothing</h5>
                    <hr />
                    <p>BC Perfect Sweat Technology - high quality fabric for perfect printability.</p>
                </div>
                <div className={'col text-success m-1 home-category'}>
                    <h5>Women's clothing</h5>
                    <hr />
                    <p>Lightweight fabric with great stretch for comfort, Ron sleeves and neckline.
                    </p>
                </div>
                <div className={' col text-danger m-1 home-category'}>
                    <h5>Jewelery</h5>
                    <hr />
                    <p>Designed and sold by Hafeez Center in the United States. Satisfaction.</p>
                </div>
                <div className={' col m-1 home-category'}>
                    <h5>Electronic</h5>
                    <hr />
                    <p>Lay anywhere Fast and easy, setup Sleek design with high.</p>
                </div>
            </div>
            <div className={'my-5 text-center col-12 '}>
                <h1>Why you should choose our store</h1>
            </div>
            <div className={'row d-flex mt-5 pb-5'}>
                <div className={'col m-1 home-category'} >
                    <h5 className={'text-info'}>More than 10 rolls on the market.</h5>
                    <hr />
                    <h6>More than 500,000 satisfied customers, we take care of our reputation.</h6>
                </div>
                <div className={'col m-1 home-category'}>
                    <h5 className={'text-info'}>We work every day 24/7.</h5>
                    <hr />
                    <h6>The call center works around the clock. You can ask anything.</h6>
                </div>
                <div className={'col m-1 home-category'}>
                    <h5 className={'text-info'}>Free delivery to any city</h5>
                    <hr />
                    <h6>In all stores of the network to branches or at the address.</h6>
                </div>
            </div>
        </div>
    </>
}

export default Home;