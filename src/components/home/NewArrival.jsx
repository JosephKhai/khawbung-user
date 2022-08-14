import React, { Component, Fragment } from 'react'
import { Container, Row, Card } from 'react-bootstrap'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export class NewArrival extends Component {
    constructor(props) {
        super(props);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
    }

    next() {
        this.slider.slickNext();
    }

    previous() {
        this.slider.slickPrev();
    }


    render() {
        var settings = {
            dots: false,
            infinite: true,
            speed: 500,
            autoplay: true,
            autoplaySpeed: 3000,
            slidesToShow: 3,
            slidesToScroll: 1,
            initialSlide: 0,
            arrows: false,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        return (
            <Fragment>
                <Container className='text-center'>
                    <div className='section-title text-center mb-55'>
                        <h2>NEW ARRIVAL &nbsp;
                            <a className='btn btn-sm ml-2 site-btn' onClick={this.previous}><i className='fa fa-angle-left'></i></a>
                            &nbsp;
                            <a className='btn btn-sm ml-2 site-btn' onClick={this.next}><i className='fa fa-angle-right'></i></a>
                        </h2>
                        <p>Some of our Exclusive Collection, You May Like</p>
                    </div>

                    <Row>
                        <Slider ref={c => this.slider = c} {...settings}>
                            <div>
                                <Card className='image-box card'>
                                    <img className='center' src="http://white-story.com/images/slider/1slide-2022Weding.jpeg" />
                                    <Card.Body>
                                        <p className='product-name-on-card'> Gown and Wedding</p>
                                        <p className='product-price-on-card'>Price: $999.00 to 2999.00.00</p>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div>
                                <Card className='image-box card'>
                                    <img className='center' src="http://white-story.com/images/stories/virtuemart/category/cat-na-glavnoy2022-victory.jpg" />
                                    <Card.Body>
                                        <p className='product-name-on-card'> Gown and Wedding</p>
                                        <p className='product-price-on-card'>Price: $999.00 to 2999.00.00</p>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div>
                                <Card className='image-box card'>
                                    <img className='center' src="http://white-story.com/images/slider/2slide-2022Weding.jpeg" />
                                    <Card.Body>
                                        <p className='product-name-on-card'> Gown and Wedding</p>
                                        <p className='product-price-on-card'>Price: $999.00 to 2999.00.00</p>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div>
                                <Card className='image-box card'>
                                    <img className='center' src="http://white-story.com/images/slider/3slide-2022Weding.jpeg" />
                                    <Card.Body>
                                        <p className='product-name-on-card'> Gown and Wedding</p>
                                        <p className='product-price-on-card'>Price: $999.00 to 2999.00.00</p>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div>
                                <Card className='image-box card'>
                                    <img className='center' src="http://white-story.com/images/slider/Olimpia2022-smaSlider.jpeg" />
                                    <Card.Body>
                                        <p className='product-name-on-card'> Gown and Wedding</p>
                                        <p className='product-price-on-card'>Price: $999.00 to 2999.00.00</p>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div>
                                <Card className='image-box card'>
                                    <img className='center' src="http://white-story.com/images/slider/Vienna_2021-baner.jpeg" />
                                    <Card.Body>
                                        <p className='product-name-on-card'> Gown and Wedding</p>
                                        <p className='product-price-on-card'>Price: $999.00 to 2999.00.00</p>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div>
                                <Card className='image-box card'>
                                    <img className='center' src="http://white-story.com/images/slider/ABB_slider-ban.jpeg" />
                                    <Card.Body>
                                        <p className='product-name-on-card'> Gown and Wedding</p>
                                        <p className='product-price-on-card'>Price: $999.00 to 2999.00.00</p>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div>
                                <Card className='image-box card'>
                                    <img className='center' src="https://www.happywedding.app/blog/wp-content/uploads/2021/10/Matching-Groom-Attire-With-Gown.jpg" />
                                    <Card.Body>
                                        <p className='product-name-on-card'> Gown and Wedding</p>
                                        <p className='product-price-on-card'>Price: $999.00 to 2999.00.00</p>
                                    </Card.Body>
                                </Card>
                            </div>
                        </Slider>
                    </Row>

                </Container>
            </Fragment>
        )
    }
}

export default NewArrival
