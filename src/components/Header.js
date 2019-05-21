import React from 'react';
import macarons from "../resources/images/coconut_buttercream_macarons.jpg"

const Header = () => {
  return (
    <div className="header_wrapper">
      <nav className="navbar navbar-expand-sm">

        <div className="container">
          <a href="/" className="navbar-brand">Ruby's Kitchen</a>
          <div className="collapse navbar-collapse">
            <ul className="nav navbar-nav ml-auto">
              <li className="nav-item"><a className="nav-link" href="/">Home</a></li>
              <li className="nav-item"><a className="nav-link" href="/">Story</a></li>
              <li className="nav-item"><a className="nav-link" href="/">Gallery</a></li>
              <li className="nav-item"><a className="nav-link" href="/">Testimonials</a></li>
              <li className="nav-item"><a className="nav-link" href="/">Art</a></li>
              <li className="nav-item"><a className="nav-link" href="/">Contact</a></li>
            </ul>
          </div>

        </div>
      </nav>


      <img id="background_image" src={macarons} alt="coconut buttercream macarons"></img>

      <div className="container">
        <main>
          <h1>Ruby's Kitchen</h1>

        </main>
      </div>
    </div>
  );
};

export default Header;