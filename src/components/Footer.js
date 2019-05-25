import React from 'react';

const Footer = () => {
    return (
        <footer className="page-footer unique-color-dark">

            {/* Social buttons */}
            <div className="primary-color">
                <div className="container">
                    {/* Grid row */}
                    <div className="row py-4 d-flex align-items-center">

                        {/* Grid column */}
                        <div className="col-md-6 col-lg-5 text-center text-md-left mb-4 mb-md-0">
                            <h6 className="mb-0 white-text">Get connected with us on social networks!</h6>
                        </div>
                        {/* Grid column */}

                        {/* Grid column */}
                        <div className="col-md-6 col-lg-7 text-center text-md-right">
                            {/* Facebook */}
                            <a className="fb-ic ml-0"><i className="fab fa-facebook-f white-text mr-4"></i></a>
                            {/* Twitter */}
                            <a className="tw-ic"><i className="fab fa-twitter white-text mr-4"></i></a>
                            {/* Google + */}
                            <a className="gplus-ic"><i className="fab fa-google-plus-g white-text mr-4"></i></a>
                            {/* Linkedin */}
                            <a className="li-ic"><i className="fab fa-linkedin-in white-text mr-4"></i></a>
                            {/* Instagram */}
                            <a className="ins-ic"><i className="fab fa-instagram white-text mr-lg-4"></i></a>
                        </div>
                        {/* Grid column */}

                    </div>
                    {/* Grid row */}
                </div>
            </div>
            {/* Social buttons */}



            {/* Footer Links */}
            <div className="container mt-5 mb-4 text-center text-md-left">
                <div className="row mt-3">

                    {/* First column */}
                    <div className="col-md-3 col-lg-4 col-xl-3 mb-4">
                        <h6 className="text-uppercase font-weight-bold">
                            <strong>Ruby's Kitchen</strong>
                        </h6>
                        <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" }}></hr>
                        <p>Here you can use rows and columns here to organize your footer content. Lorem ipsum dolor sit
            amet, consectetur adipisicing elit.</p>
                    </div>
                    {/* First column */}

                    {/* Second column */}
                    <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                        <h6 className="text-uppercase font-weight-bold">
                            <strong>Products</strong>
                        </h6>
                        <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" }}></hr>
                        <p>
                            <a href="#!">Bakery</a>
                        </p>
                        <p>
                            <a href="#!">Pho</a>
                        </p>
                        <p>
                            <a href="#!">Desserts</a>
                        </p>
                        <p>
                            <a href="#!">Artwork</a>
                        </p>
                    </div>
                    {/* Second column */}

                    {/* Third column */}
                    <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                        <h6 className="text-uppercase font-weight-bold">
                            <strong>Useful links</strong>
                        </h6>
                        <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" }}></hr>
                        <p>
                            <a href="#!">Your Account</a>
                        </p>
                        <p>
                            <a href="#!">Become an Affiliate</a>
                        </p>
                        <p>
                            <a href="#!">Shipping Rates</a>
                        </p>
                        <p>
                            <a href="#!">Help</a>
                        </p>
                    </div>
                    {/* Third column */}

                    {/* Fourth column */}
                    <div className="col-md-4 col-lg-3 col-xl-3">
                        <h6 className="text-uppercase font-weight-bold"><strong>Contact</strong></h6>
                        <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" }}></hr>
                        <p><i className="fas fa-home  mr-3"></i> Serving SF Bay Area, US</p>
                        <p><i className="fas fa-envelope mr-3"></i> ruby@rubyskitchen.com</p>
                        <p><i className="fas fa-phone mr-3"></i> + 01 234 567 88</p>
                        <p><i className="fas fa-print mr-3"></i> + 01 234 567 89</p>
                    </div>
                    {/* Fourth column */}

                </div>
            </div>
            {/* Footer Links */}

            {/* Copyright */}
            <div className="footer-copyright text-center py-3">© 2019 Copyright:
                <a href="/"> RubysKitchen.com</a>
            </div>
            {/* Copyright  */}

        </footer >

    );
};

export default Footer;