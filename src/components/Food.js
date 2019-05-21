import React, { Component } from 'react';
import Coco from "../resources/images/coconut_buttercream_macarons.jpg"
import Cupcake from "../resources/images/cupcake.jpg"

class Food extends Component {
    render() {
        return (
            <div className="food_wrapper">
                Food Gallery
                <div className="carousel_wrapper">
                    <div className="container">
                        <div id="food_carousel" class="carousel slide container" data-ride="carousel">
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img src={Coco} class="d-block w-100 img-fluid" alt="..."></img>
                                    <div class="carousel-caption d-none d-md-block">
                                        <h5>Coconut Buttercream Macarons</h5>
                                        <p>Cocunut</p>
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <img src={Cupcake} class="d-block w-100 img-fluid" alt="..."></img>
                                    <div class="carousel-caption d-none d-md-block">
                                        <h5>Second slide label</h5>
                                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <img src={Coco} class="d-block w-100 img-fluid" alt="..."></img>
                                    <div class="carousel-caption d-none d-md-block">
                                        <h5>Third slide label</h5>
                                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                    </div>
                                </div>
                            </div>
                            <a class="carousel-control-prev" href="#food_carousel" role="button" data-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="sr-only">Previous</span>
                            </a>
                            <a class="carousel-control-next" href="#food_carousel" role="button" data-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="sr-only">Next</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Food;