import React, { Component, Fragment } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Apple from '../../assets/images/apple.png'
import Google from '../../assets/images/google.png'

export class FooterMobile extends Component {
  render() {
    return (
      <Fragment>
        <div className='footerback m-0 mt-5 pt-3 shadow-sm'>
          <Container className='text-center'>
            <Row className='px-0 my-5'>
              <Col className='p-2' lg={3} md={3} sm={6} xs={12}>
                <h5 className='footer-menu-title'>OFFICE ADDRESS</h5>
                <p>34 Main Street Croydon, VIC 3136<br></br>Australia
                  <br></br>
                  Email: khawbungkk@gmail.com
                </p>
                <h5 className='footer-menu-title'>SOCIAL LINK</h5>
                <a href="https://www.facebook.com/Khawbung-KK-Bridal-Boutique-105355724752104"><i className='fab m-1 h4 fa-facebook'></i></a>
                <a href=""><i className='fab m-1 h4 fa-instagram'></i></a>
                <a href="h"><i className='fab m-1 h4 fa-twitter'></i></a>
              </Col>


              <Col className='p-2' lg={3} md={3} sm={6} xs={12}>
                <h5 className='footer-menu-title'>DOWNLOAD APPS</h5>
                <a><img src={Google} /></a>
                <a><img className='mt-2' src={Apple} /></a>
              </Col>

            </Row>
          </Container>
          <Container fluid={true} className="text-center m-0 pt-3 pb-1 bg-dark" >
            <Container>
              <Row>
                <h6 className='text-white'>@ Copyright 2022 by Khawbung bridal shop, All Rights Reserved</h6>
              </Row>
            </Container>

          </Container>
        </div>
      </Fragment>
    )
  }
}

export default FooterMobile
