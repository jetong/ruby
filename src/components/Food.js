import React, { Component } from 'react';

import img1 from "../resources/images/gallery/almond_toffee.jpg";
import img2 from "../resources/images/gallery/autumn_mango_cake.jpg";
import img3 from "../resources/images/gallery/blood_orange.jpg";

class Food extends Component {

    render() {
        return (
            <div id="food" className="container food-wrapper">

                <h2 className="font-weight-bold my-4 text-center">The Unique Flavors</h2>

                <div className="row justify-content-center">

                    {/* Carousel Wrapper */}
                    <div id="carousel" className="carousel slide carousel-fade carousel-wrapper" data-ride="carousel">

                        {/* Slides */}
                        <div className="carousel-inner" role="listbox">
                            <div className="carousel-item active">
                                <div className="view img-size">
                                    <img className="d-block" src={img1}
                                        alt={img1} />
                                </div>
                            </div>
                            <div className="carousel-item">
                                {/* Mask color */}
                                <div className="view img-size">
                                    <img className="d-block" src={img2}
                                        alt="Second slide" />
                                </div>
                            </div>
                            <div className="carousel-item">
                                {/* Mask color */}
                                <div className="view img-size">
                                    <img className="d-block" src={img3}
                                        alt="Third slide" />
                                </div>
                            </div>
                        </div>
                        {/* end Slides */}

                        {/* Controls */}
                        <a className="carousel-control-prev" href="#carousel" role="button" data-slide="prev" >
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carousel" role="button" data-slide="next" >
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                        {/* end Controls */}

                    </div>
                    {/* end Carousel Wrapper  */}

                </div>

            </div >

        );
    }
}

export default Food;