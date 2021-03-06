import React from 'react';

const Header = () => {
  return (

    // Main Navigation
    <header className="header-wrapper">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top scrolling-navbar">

        <div className="container">

          {/* Navbar brand */}
          <a className="navbar-brand" href="#">Ruby's Kitchen</a>

          {/* Collapse button */}
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#basicExampleNav"
            aria-controls="basicExampleNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Collapsible content */}
          <div className="collapse navbar-collapse" id="basicExampleNav">

            {/* Links */}
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a className="nav-link" href="#header">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#story">Story</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#food">Gallery</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#testimonials">Testimonials</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#art">Art</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">Contact</a>
              </li>
            </ul>
            {/* end Links */}

            {/* Social Icon */}
            <ul className="navbar-nav nav-flex-icons">
              <li className="nav-item">
                <a className="nav-link"><i className="fab fa-facebook-f"></i></a>
              </li>
              <li className="nav-item">
                <a className="nav-link"><i className="fab fa-twitter"></i></a>
              </li>
              <li className="nav-item">
                <a className="nav-link"><i className="fab fa-instagram"></i></a>
              </li>
            </ul>
          </div>
          {/* end Collapsible content */}

        </div>

      </nav>



      {/* Mask */}
      <div id="header" className="view">

        <div className="mask rgba-black-light">

          <div className="container-fluid d-flex align-items-center justify-content-center h-100">

            <div className="row d-flex justify-content-center text-center">

              <div className="col-md-10">

                {/* Heading */}
                <h2 className="display-4 font-weight-bold white-text pt-5 mb-2">OMG Sooo GOOD...</h2>

                {/* Divider */}
                <hr className="hr-light"></hr>

                {/* Description */}
                <h4 className="white-text my-4">Even the toughest critics have quietly surrendered to the tastes.</h4>
                <a href="#story"><button type="button" className="btn btn-outline-white">Find out why<i className="fas fa-arrow-down ml-2"></i></button></a>

              </div>

            </div>

          </div>

        </div>

      </div>
      {/* end Mask */}

    </header >

  );
};

export default Header;