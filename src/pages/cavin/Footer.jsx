import React from 'react'
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import cavin_logo from '../cavin/cavin_logo.png'
import SOC from '../cavin/SOC.png';
import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <>
            <div className="footer_section back_c px-lg-5 px-md-4 px-sm-3 px-2 py-5">
                <div className="container-fluid c_8f9197">
                    <div className="row ">
                        <div className="col-lg-4 col-md-5 col-sm-6 col-12">
                            <img src={cavin_logo} className='img-fluid my-3' alt="footer logo" />
                            <p className='fw_400 fs_18 py-3 pe-3'>We work hand in hand with business leaders to recognize their particular requirements and establish individualized solutions that cater to their distinctive needs.</p>
                            <p className='fs_20'>An ISO 27001 : 2013 Certified Company</p>
                            <img src={SOC} className='img-fluid my-3' alt="footer logo" />

                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                            <div className="row fs_20 fw_600">
                                <div className="col-md-6 col-sm-4 col-6">
                                    <p className='fw_700'>Product</p>
                                    <ul className='p-0 '>
                                        <li>Altec</li>
                                        <li>Budgie</li>
                                        <li>GoalSync  <span className='new'>New</span></li>
                                        <li>LMS</li>
                                        <li>Salon POS</li>
                                        <li>Trove</li>
                                    </ul></div>
                                <div className="col-md-6 col-sm-4 col-6">
                                    <p className='fw_700'>Company</p>
                                    <ul className='p-0'>
                                        <li>About us</li>
                                        <li>Careers</li>
                                        <li>Contact</li>
                                    </ul></div>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-6 col-sm-12 col-12">
                            <div className="row fs_20 fw_600">
                                <div className="col-md-4 col-sm-4 col-6">
                                    <p className='fw_700'>Resources</p>
                                    <ul className='p-0'>
                                        <li>Blog</li>
                                        <li>Events</li>
                                        <li>Help centre</li>
                                        <li>Tutorials</li>
                                        <li>Support</li>
                                    </ul>
                                </div>
                                <div className="col-md-4 col-sm-4 col-6">
                                    <p className='fw_700'>Social</p>
                                    <ul className='p-0'>
                                        <li>LinkedIn</li>
                                        <li>Instagram</li>
                                        <li>Facebook</li>
                                        <li>X (Twitter)</li>
                                        <li>YouTube</li>

                                    </ul>
                                </div>
                                <div className="col-md-4 col-sm-4 col-6 ">
                                    <p className='fw_700'>Legal</p>
                                    <ul className='p-0 '>
                                        <li>Terms</li>
                                        <li>Privacy</li>
                                        <li>Cookies</li>
                                        <li>Licenses</li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="row pt-lg-5 pt-md-4 pt-sm-3 pt-3 pb-4 ">
                        <div className="col-sm-6">
                            <p className='fs_20'>© 2025, Cavin Infotech Pvt. Ltd. All Rights Reserved.</p>
                        </div>
                        <div className="col-sm-6">
                            <div className="d-flex justify-content-start justify-content-md-end">
                                <Link className='c_8f9197'><FaLinkedin className='mx-2 fs_27' /></Link>
                                <Link className='c_8f9197'><FaInstagramSquare className='mx-2 fs_27' /></Link>
                                <Link className='c_8f9197'><FaFacebook className='mx-2 fs_27' /></Link>
                                <Link className='c_8f9197'><BsTwitterX className='mx-2 fs_27' /></Link>
                                <Link className='c_8f9197'><FaYoutube className='mx-2 fs_27' /></Link>
                                
                            
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer