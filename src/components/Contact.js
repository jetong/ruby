import React from 'react';

const Contact = () => {
    return (
        <section id="contact">

            {/* Heading */}
            <h2 className="mb-5 font-weight-bold text-center">Contact me</h2>

            {/* Grid row */}
            <div className="row mb-5">

                {/* Grid column */}
                <div className="col-lg-5 col-md-12">
                    {/* Form contact  */}
                    <form className="p-5 grey-text">
                        <div className="md-form form-sm">
                            <i className="fas fa-user prefix"></i>
                            <input type="text" id="form3" className="form-control form-control-sm"></input>
                            <label htmlfor="form3">Your name</label>
                        </div>
                        <div className="md-form form-sm">
                            <i className="fas fa-envelope prefix"></i>
                            <input type="text" id="form2" className="form-control form-control-sm"></input>
                            <label htmlfor="form2">Your email</label>
                        </div>
                        <div className="md-form form-sm">
                            <i className="fas fa-tag prefix"></i>
                            <input type="text" id="form32" className="form-control form-control-sm"></input>
                            <label htmlfor="form32">Subject</label>
                        </div>
                        <div className="md-form form-sm">
                            <i className="fas fa-pencil-alt prefix"></i>
                            <textarea type="text" id="form8" className="md-textarea form-control form-control-sm" rows="4"></textarea>
                            <label htmlfor="form8">Your message</label>
                        </div>
                        <div className="text-center mt-4">
                            <button className="btn btn-primary">Send <i className="far fa-paper-planeml-1"></i></button>
                        </div>
                    </form>
                    {/* Form contact  */}
                </div>
                {/* Grid column */}

                {/* Grid column */}
                <div className="col-lg-5 col-md-12">

                    {/* Grid row */}
                    <div className="row text-center">

                        {/* Grid column */}
                        <div className="col-lg-4 col-md-12 mb-3">

                            <p><i className="fas fa-map fa-1x mr-2 grey-text"></i>SF Bay Area</p>

                        </div>
                        {/* Grid column */}

                        {/* Grid column */}
                        <div className="col-lg-4 col-md-6 mb-3">

                            <p><i className="fas fa-building fa-1x mr-2 grey-text"></i>Mon - Fri, 8:00-22:00</p>

                        </div>
                        {/* Grid column */}

                        {/* Grid column */}
                        <div className="col-lg-4 col-md-6 mb-3">

                            <p><i className="fas fa-phone fa-1x mr-2 grey-text"></i>+ 01 234 567 89</p>

                        </div>
                        {/* Grid column */}

                    </div>
                    {/* Grid row */}


                    {/* Grid row */}
                    <div className="row">

                        {/* Google map */}
                        <div id="map-container" className="z-depth-1-half map-container mb-5" style={{ height: "400px" }}>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12690.536424152671!2d-121.98454667934567!3d37.32749391041126!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fcaef21054665%3A0x2fa5abfd628b6fa6!2sStevens+Creek+Toyota!5e0!3m2!1sen!2sus!4v1558032106679!5m2!1sen!2sus"
                                title="map" width="600" height="450" frameborder="0" style={{ border: "0" }} allowfullscreen></iframe>
                        </div>

                    </div>
                    {/* Grid row */}

                </div>
                {/* Grid column */}

            </div>
            {/* Grid row */}

        </section>
    );
};

export default Contact;