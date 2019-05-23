import React, { Component } from 'react';
import Coco from "../resources/images/coconut_buttercream_macarons.jpg"
import Cupcake from "../resources/images/cupcake.jpg"

class Food extends Component {
    render() {
        return (
            <div id="food_gallery" className="food_wrapper">
                Food Gallery
                <div className="carousel_wrapper">
                    <div className="container">
                        <div id="food_carousel" className="carousel slide container" data-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src={Coco} className="d-block w-100 img-fluid" alt="..."></img>
                                    <div className="carousel-caption d-none d-md-block">
                                        <h5>Coconut Buttercream Macarons</h5>
                                        <p>Cocunut</p>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img src={Cupcake} className="d-block w-100 img-fluid" alt="..."></img>
                                    <div className="carousel-caption d-none d-md-block">
                                        <h5>Second slide label</h5>
                                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img src={Coco} className="d-block w-100 img-fluid" alt="..."></img>
                                    <div className="carousel-caption d-none d-md-block">
                                        <h5>Third slide label</h5>
                                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                    </div>
                                </div>
                            </div>
                            <a className="carousel-control-prev" href="#food_carousel" role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#food_carousel" role="button" data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Food;