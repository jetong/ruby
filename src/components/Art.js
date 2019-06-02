import React from 'react';

import img01 from "../resources/images/art/img01.jpg";
import img02 from "../resources/images/art/img02.jpg";
import img03 from "../resources/images/art/img03.jpg";
import img04 from "../resources/images/art/img04.jpg";
import img05 from "../resources/images/art/img05.jpg";
import img07 from "../resources/images/art/img07.jpg";
import img08 from "../resources/images/art/img08.jpg";
import img09 from "../resources/images/art/img09.jpg";
import img10 from "../resources/images/art/img10.jpg";
import img11 from "../resources/images/art/img11.jpg";

const Art = () => {
    return (
        <div id="art" className="section-wrapper">
            <hr className="my-5"></hr>
            <h2 className="font-weight-bold my-5 text-center">Art Work</h2>

            <div className="container">
                {/* First row */}
                <div className="row">

                    {/* First column */}
                    <div className="col-md-12">

                        <div id="mdb-lightbox-ui"></div>

                        {/* Full width lightbox */}
                        <div className="mdb-lightbox">

                            <div className="row">

                                <figure className="col-md-3">
                                    <a href={img01} data-size="781x1172" data-toggle="lightbox" data-gallery="art-gallery">
                                        <img src={img01} className="img-fluid" alt="img01"></img>
                                    </a>
                                </figure>

                                <figure className="col-md-3">
                                    <a href={img02} data-size="781x1172" data-toggle="lightbox" data-gallery="art-gallery">
                                        <img src={img02} className="img-fluid" alt="img02"></img>
                                    </a>
                                </figure>

                                <figure className="col-md-3">
                                    <a href={img03} data-size="781x1172" data-toggle="lightbox" data-gallery="art-gallery">
                                        <img src={img03} className="img-fluid" alt="img03"></img>
                                    </a>
                                </figure>

                                <figure className="col-md-3">
                                    <a href={img04} data-size="781x1172" data-toggle="lightbox" data-gallery="art-gallery">
                                        <img src={img04} className="img-fluid" alt="img04"></img>
                                    </a>
                                </figure>
                            </div>

                            <div className="row">

                                <figure className="col-md-4">
                                    <a href={img05} data-size="1600x1067" data-toggle="lightbox" data-gallery="art-gallery">
                                        <img src={img05} className="img-fluid" alt="img05"></img>
                                    </a>
                                </figure>

                                <figure className="col-md-4">
                                    <a href={img07} data-size="1600x1067" data-toggle="lightbox" data-gallery="art-gallery">
                                        <img src={img07} className="img-fluid" alt="img07"></img>
                                    </a>
                                </figure>


                                <figure className="col-md-4">
                                    <a href={img08} data-size="1600x1067" data-toggle="lightbox" data-gallery="art-gallery">
                                        <img src={img08} className="img-fluid" alt="img08"></img>
                                    </a>
                                </figure>

                            </div>

                            <div className="row">

                                <figure className="col-md-4">
                                    <a href={img09} data-size="781x1172" data-toggle="lightbox" data-gallery="art-gallery">
                                        <img src={img09} className="img-fluid" alt="img09"></img>
                                    </a>
                                </figure>

                                <figure className="col-md-4">
                                    <a href={img10} data-size="781x1172" data-toggle="lightbox" data-gallery="art-gallery">
                                        <img src={img10} className="img-fluid" alt="img10"></img>
                                    </a>
                                </figure>

                                <figure className="col-md-4">
                                    <a href={img11} data-size="781x1172" data-toggle="lightbox" data-gallery="art-gallery">
                                        <img src={img11} className="img-fluid" alt="img11"></img>
                                    </a>
                                </figure>

                            </div>

                        </div>
                        {/* /Full width lightbox */}

                    </div>
                    {/* /First column */}

                </div>
                {/* /First row */}

            </div>

        </div>
    );
};

export default Art;