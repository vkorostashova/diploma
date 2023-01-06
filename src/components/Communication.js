import React from "react";

function Communication() {
    return <div >
            <h1 className={'text-center mt-5 col-12 '}>
                GET IN TOUCH
            </h1>
            <div className={'row mt-5 text-center pb-5'}>
                <div className={'my-1  col-sm-12  col-lg-6 col-xl-3  text-primary   home-category'} >
                    <h5>Email</h5>
                    <hr />
                    <p>productshop@gmail.com</p>
                </div>
                <div className={' my-1 col-sm-12  col-lg-6 col-xl-3  text-success  home-category'}>
                    <h5>Store address</h5>
                    <hr />
                    <p> Houston Induffhhhb,22
                    </p>
                </div>
                <div className={'my-1 col-sm-12  col-lg-6 col-xl-3 text-danger  home-category'}>
                    <h5>Call </h5>
                    <hr />
                    <p>015062390, 905155156</p>
                </div>
                <div className={'my-1 col-sm-12  col-lg-6 col-xl-3   home-category'}>
                    <h5>Store opening </h5>
                    <hr />
                    <p>-10 am - 3 pm</p>
                </div>
            </div>
        </div>
}

export default Communication;