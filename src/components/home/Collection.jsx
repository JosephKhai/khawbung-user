import React, { Component, Fragment } from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'

export class Collection extends Component {
    render() {
        return (
            <Fragment>
                <Container className='text-center' fluid={true}>
                    <div className='section-title text-center mb-55'>
                        <h2>PRODUCT COLLECTION</h2>
                        <p>Some of our Exclusive Collection, You May Like</p>
                    </div>
                    <Row>
                        <Col className='p-0' xl={3} lg={3} md={3} sm={6} xs={6}>
                            <Card className='image-box card w-100'>
                                <img className='center w-75' src="http://white-story.com/images/stories/virtuemart/category/cat-na-glavnoy2022-victory.jpg" />
                                <Card.Body>
                                    <p className='product-name-on-card'> Gown and Wedding</p>
                                    <p className='product-price-on-card'>Price: $999.00 to 2999.00.00</p>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col className='p-0' xl={3} lg={3} md={3} sm={6} xs={6}>
                            <Card className='image-box card w-100'>
                                <img className='center w-75' src="https://white-story.com/images/stories/virtuemart/product/Azalea-Alina1.jpg" />
                                <Card.Body>
                                    <p className='product-name-on-card'> Gown and Wedding</p>
                                    <p className='product-price-on-card'>Price: $999.00 to 2999.00.00</p>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className='p-0' xl={3} lg={3} md={3} sm={6} xs={6}>
                            <Card className='image-box card w-100'>
                                <img className='center w-75' src="https://white-story.com/images/stories/virtuemart/product/WS-elena.jpg" />
                                <Card.Body>
                                    <p className='product-name-on-card'> Gown and Wedding</p>
                                    <p className='product-price-on-card'>Price: $999.00 to 2999.00.00</p>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className='p-0' xl={3} lg={3} md={3} sm={6} xs={6}>
                            <Card className='image-box card w-100'>
                                <img className='center w-75' src="https://white-story.com/images/stories/virtuemart/product/WS-victoria.jpg" />
                                <Card.Body>
                                    <p className='product-name-on-card'> Gown and Wedding</p>
                                    <p className='product-price-on-card'>Price: $999.00 to 2999.00.00</p>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>

            </Fragment>
        )
    }
}

export default Collection
