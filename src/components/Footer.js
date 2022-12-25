import React from "react";
import './Footer.css'

function Footer() {
  return <footer className={'footer p-2'}>
    <div className={'container d-flex justify-content-between '}>
      <div className={'d-flex support '}>
        <p >Support:</p>
        <p className={'m-0'}>080000000000</p>
      </div>
      <div className={' social d-flex m-0 '}>
        <a className={' social-icon-facebook mr-2 social-icon'} href="https://facebook.com"></a>
        <a className={'social-icon-youtube mr-2 social-icon'} href="https://youtube.com"></a>
        <a className={'social-icon-twitter mr-2 social-icon'} href="https://twitter.com"></a>
      </div>

    </div>
  </footer>
}

export default Footer;