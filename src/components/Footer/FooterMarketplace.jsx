import React from 'react'
import './FooterMarketplace.css'

import Plantsasri_logo from '../../assets/brand/plantsasri-logo-text.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faEnvelope,
    faPhone,
    faLocationDot,
} from '@fortawesome/free-solid-svg-icons'

function FooterMarketplace() {
    return (
        <footer>
            <div className='container'>
                <div className='footer-content'>
                    <div className='footer-item'>
                        <div className='footer-brand'>
                            <img src={Plantsasri_logo} />
                        </div>
                        <div className='footer-desc'>
                            <p>
                                Find the various types of plants you want with
                                Plantsasri. Your satisfaction and comfort is our
                                priority.
                            </p>
                        </div>
                    </div>
                    <div className='footer-item'>
                        <div className='menu'>
                            <a href='#'>Home</a>
                            <a href='#'>About Plantsasri</a>
                            <a href='#'>Explore Plants</a>
                            <a href='#'>List Price</a>
                            <a href='#'>Faq</a>
                            <a href='#'>Terms & Condition</a>
                        </div>
                    </div>
                    <div className='footer-item'>
                        <h1>Contact Us</h1>

                        <div className='item-email'>
                            <a href='' className='d-flex'>
                                <FontAwesomeIcon
                                    icon={faEnvelope}
                                    size='lg'
                                    className='text-dark'
                                />
                                <p className='ms-2'>testing@gmail.com</p>
                            </a>
                        </div>

                        <div className='item-phone'>
                            <a href='' className='d-flex'>
                                <FontAwesomeIcon
                                    icon={faPhone}
                                    size='lg'
                                    className='text-dark'
                                />
                                <p className='ms-2'>+6285156405248</p>
                            </a>
                        </div>

                        <div className='item-location'>
                            <a href='' className='d-flex'>
                                <FontAwesomeIcon
                                    icon={faLocationDot}
                                    size='lg'
                                    className='text-dark'
                                />

                                <p className='ms-2'>
                                    GARDEN No.13 Jalan Cijahe, Curug Mekar -
                                    Bogor Barat, Bogor, Jawa Barat
                                </p>
                            </a>
                        </div>
                    </div>
                </div>
                <p className='kopikanan'>© 2023 Plantsasri Indonesia</p>
            </div>
        </footer>
    )
}

export default FooterMarketplace
