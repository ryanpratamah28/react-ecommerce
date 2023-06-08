import React from 'react'
import './NavMarketplace.css'

import Plantsasri_icon from '../../assets/brand/plantsasri-logo.png'
import Shopping_cart from '../../assets/icon/shopping-cart 1.png'

import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import InputGroup from 'react-bootstrap/InputGroup'
import { FormControl } from 'react-bootstrap'
import { FormLabel } from 'react-bootstrap'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

function NavMarketplace() {
    return (
        <Navbar bg='white' expand='lg' className='shadow' sticky='top'>
            <Container>
                <div className='nav-wrapper d-flex flex-inline align-items-center justify-content-space-between w-100'>
                    <div className='nav-left d-flex flex-inline align-items-center'>
                        <Navbar.Brand href='#'>
                            <img
                                src={Plantsasri_icon}
                                width='70'
                                height='65'
                                className='d-inline-block align-top'
                                alt='Plantsasri logo'
                            />
                        </Navbar.Brand>

                        <InputGroup className='search-bar'>
                            <FormControl
                                type='text'
                                id='name'
                                required
                            ></FormControl>
                            <FormLabel>Search</FormLabel>

                            <Button variant='success' id='btn-search'>
                                <FontAwesomeIcon icon={faSearch} size='md' />
                            </Button>
                        </InputGroup>
                    </div>

                    <div className='nav-right d-flex flex-inline ms-3 align-items-center'>
                        <div className='btn-wrapper'>
                            <Button variant='outline-success' className='me-3'>
                                Sign In
                            </Button>

                            <Button variant='success'>Sign Up</Button>
                        </div>

                        <div className='cart-wrapper ms-3'>
                            <a className='shopping-cart'>
                                <img src={Shopping_cart} alt='cart' />

                                <div id='cart-count' className='total-item'>
                                    <p>0</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </Container>
        </Navbar>
    )
}

export default NavMarketplace
