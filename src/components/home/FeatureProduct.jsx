import React, { Component, Fragment } from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'

export class FeatureProduct extends Component {
    render() {
        return (
            <Fragment>
                <Container className='text-center' fluid={true}>
                    <div className='section-title text-center mb-55'>
                        <h2 className='under-construction-text'>This Webpage is UNDER CONSTRUCTION! and all contents are ONLY display purposes</h2><br /><br />
                        <h3> <a href="https://www.facebook.com/Khawbung-KK-Brilliant-Boutique-Bridal-Shop-105355724752104">Please click here</a> to go to official Facebook page</h3>
                        <br />
                        <h2>FEATURED PRODUCT</h2>
                        <p>Some of our Exclusive Collection, You May Like</p>
                    </div>
                    <Row>
                        <Col className='p-1' key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
                            <Card className='image-box card'>
                                <img className='center' src="https://white-story.com/images/stories/virtuemart/product/3-1.jpg" />
                                <Card.Body>
                                    <p className='product-name-on-card'> Gown and Wedding</p>
                                    <p className='product-price-on-card'>Price: $300.00</p>


                                </Card.Body>
                            </Card>

                        </Col>
                        <Col className='p-1' key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
                            <Card className='image-box card'>
                                <img className='center' src="https://white-story.com/images/stories/virtuemart/product/4-1.jpg" />
                                <Card.Body>
                                    <p className='product-name-on-card'> Gown and Wedding</p>
                                    <p className='product-price-on-card'>Price: $300.00</p>


                                </Card.Body>
                            </Card>

                        </Col>
                        <Col className='p-1' key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
                            <Card className='image-box card'>
                                <img className='center' src="https://white-story.com/images/stories/virtuemart/product/3-1.jpg" />
                                <Card.Body>
                                    <p className='product-name-on-card'> Gown and Wedding</p>
                                    <p className='product-price-on-card'>Price: $300.00</p>


                                </Card.Body>
                            </Card>

                        </Col>
                        <Col className='p-1' key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
                            <Card className='image-box card'>
                                <img className='center' src="https://white-story.com/images/stories/virtuemart/product/4-1.jpg" />
                                <Card.Body>
                                    <p className='product-name-on-card'> Gown and Wedding</p>
                                    <p className='product-price-on-card'>Price: $300.00</p>


                                </Card.Body>
                            </Card>

                        </Col>
                        <Col className='p-1' key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
                            <Card className='image-box card'>
                                <img className='center' src="https://white-story.com/images/stories/virtuemart/product/3-1.jpg" />
                                <Card.Body>
                                    <p className='product-name-on-card'> Gown and Wedding</p>
                                    <p className='product-price-on-card'>Price: $300.00</p>


                                </Card.Body>
                            </Card>

                        </Col>
                        <Col className='p-1' key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
                            <Card className='image-box card'>
                                <img className='center' src="https://white-story.com/images/stories/virtuemart/product/4-1.jpg" />
                                <Card.Body>
                                    <p className='product-name-on-card'> Gown and Wedding</p>
                                    <p className='product-price-on-card'>Price: $300.00</p>


                                </Card.Body>
                            </Card>

                        </Col>
                    </Row>

                </Container>
            </Fragment>
        )
    }
}

export default FeatureProduct
