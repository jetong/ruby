import React, { Component } from 'react';

import img1 from "../resources/images/gallery/almond_toffee.jpg";
import img2 from "../resources/images/gallery/autumn_mango_cake.jpg";
import img3 from "../resources/images/gallery/blood_orange.jpg";

class Food extends Component {

    render() {
        return (
            <div id="food" className="food-wrapper">
                <div className="container spacer">

                    <h2 className="font-weight-bold text-center">Inside the Kitchen</h2>

                    {/* Main Row */}
                    <div className="row justify-content-center">

                        {/* Left Carousel */}
                        <div className="col-lg-6 column-wrapper">
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="carousel-outer-wrapper">

                                        <h3 className="text-center">Savory Sensations</h3>

                                        {/* Carousel Wrapper */}
                                        <div id="carousel-1" className="carousel slide carousel-fade carousel-wrapper" data-ride="carousel-1">

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
                                            <a id="c1" className="carousel-control-prev carousel-control" href="#carousel-1" role="button" data-slide="prev" >
                                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                                <span className="sr-only">Previous</span>
                                            </a>
                                            <a className="carousel-control-next carousel-control" href="#carousel-1" role="button" data-slide="next" >
                                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                                <span className="sr-only">Next</span>
                                            </a>
                                            {/* end Controls */}

                                        </div>
                                        {/* end Carousel Wrapper  */}
                                    </div>

                                </div>
                            </div>
                        </div>
                        {/* end Left Carousel */}


                        {/* Right Carousel */}
                        <div className="col-lg-6 column-wrapper">
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="carousel-outer-wrapper">

                                        <h3 className="text-center">Sweet Temptations</h3>

                                        {/* Carousel Wrapper */}
                                        <div id="carousel-2" className="carousel slide carousel-fade carousel-wrapper" data-ride="carousel-2">

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
                                            <a className="carousel-control-prev" href="#carousel-2" role="button" data-slide="prev" >
                                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                                <span className="sr-only">Previous</span>
                                            </a>
                                            <a className="carousel-control-next" href="#carousel-2" role="button" data-slide="next" >
                                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                                <span className="sr-only">Next</span>
                                            </a>
                                            {/* end Controls */}

                                        </div>
                                        {/* end Carousel Wrapper  */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* end Right Carousel */}


                    </div>
                    {/* end Main Row */}

                </div>

            </div >

        );
    }
}

export default Food;