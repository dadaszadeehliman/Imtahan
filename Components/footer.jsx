import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { MdOutlineNetworkCheck } from "react-icons/md";
import { CiHeart } from "react-icons/ci";

function Footer() {
  return (
    <div className='footer row mt-5 p-5'>
      <div className='col-lg-3'>
        <h2>About Us</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
      </div>
      <div className='col-lg-3'>
        <h2>Newsletter</h2>
        <p>Stay update with our latest</p>
        <div>
          <input type="text" placeholder=' Enter Email' />
          {/* <FaArrowRight className='footer_icons'/> */}
        </div>
      </div>
      <div className='col-lg-3'>
        <h2>Instragram Feed</h2>
        <div className='row'>
          <div className='col-lg-3 col-md-3 col-sm-3 g-1'><img src="https://preview.colorlib.com/theme/shop/img/i2.jpg" alt="" /></div>
          <div className='col-lg-3 col-md-3 col-sm-3 g-1'><img src="https://preview.colorlib.com/theme/shop/img/i2.jpg" alt="" /></div>
          <div className='col-lg-3 col-md-3 col-sm-3 g-1'><img src="https://preview.colorlib.com/theme/shop/img/i2.jpg" alt="" /></div>
          <div className='col-lg-3 col-md-3 col-sm-3 g-1'><img src="https://preview.colorlib.com/theme/shop/img/i2.jpg" alt="" /></div>
          <div className='col-lg-3 col-md-3 col-sm-3 g-1'><img src="https://preview.colorlib.com/theme/shop/img/i2.jpg" alt="" /></div>
          <div className='col-lg-3 col-md-3 col-sm-3 g-1'><img src="https://preview.colorlib.com/theme/shop/img/i2.jpg" alt="" /></div>
          <div className='col-lg-3 col-md-3 col-sm-3 g-1'><img src="https://preview.colorlib.com/theme/shop/img/i2.jpg" alt="" /></div>
          <div className='col-lg-3 col-md-3 col-sm-3 g-1'><img src="https://preview.colorlib.com/theme/shop/img/i2.jpg" alt="" /></div>
        </div>
      </div>

      <div className='col-lg-3'>
        <h2>Follow Us</h2>
        <p>Let us be social</p>
        <div>
        <FaFacebookF />
        <FaTwitter />
        <MdOutlineNetworkCheck />
        </div>
      </div>

      <h5 className='text-center mt-5'>Copyright ©2024 All rights reserved.This template is made with <CiHeart /> by Colorlib</h5>
    </div>
  )
}

export default Footer