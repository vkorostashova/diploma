import React from "react";

function Communication() {
    return <div>
        <h1 className={'text-center mt-5 col-12 '}>
            GET IN TOUCH
        </h1>
        <div className={'d-flex mt-5 justify-content-between pb-5'}>
            <div className={'text-primary mx-1 home-category'} >
                <h5>Email</h5>
                <hr />
                <p>productshop@gmail.com</p>
            </div>
            <div className={' text-success mx-1 home-category'}>
                <h5>Store address</h5>
                <hr />
                <p> Houston Induffhhhb,22
                </p>
            </div>
            <div className={'text-danger mx-1 home-category'}>
                <h5>Call </h5>
                <hr />
                <p>015062390, 905155156</p>
            </div>
            <div className={' mx-1 home-category'}>
                <h5>Store opening </h5>
                <hr />
                <p>-10 am - 3 pm</p>
            </div>
        </div>
    </div>
}

export default Communication;