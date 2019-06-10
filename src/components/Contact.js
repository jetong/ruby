import React from 'react';

const Contact = () => {
    return (
        <section id="contact" className="contact-wrapper">
            <hr className="my-5"></hr>

            <div className="container spacer">

                <h2 className="my-5 font-weight-bold text-center">Contact me</h2>

                {/* Grid row */}
                <div className="row">

                    {/* Form contact  */}
                    <div className="col-lg-5 col-md-12">
                        <form className="grey-text">
                            <div className="md-form form-sm">
                                <i className="fas fa-user prefix"></i>
                                <input type="text" id="form3" className="form-control form-control-sm"></input>
                                <label htmlFor="form3">Your name</label>
                            </div>
                            <div className="md-form form-sm">
                                <i className="fas fa-envelope prefix"></i>
                                <input type="text" id="form2" className="form-control form-control-sm"></input>
                                <label htmlFor="form2">Your email</label>
                            </div>
                            <div className="md-form form-sm">
                                <i className="fas fa-tag prefix"></i>
                                <input type="text" id="form32" className="form-control form-control-sm"></input>
                                <label htmlFor="form32">Subject</label>
                            </div>
                            <div className="md-form form-sm">
                                <i className="fas fa-pencil-alt prefix"></i>
                                <textarea type="text" id="form8" className="md-textarea form-control form-control-sm" rows="4"></textarea>
                                <label htmlFor="form8">Your message</label>
                            </div>
                            <div className="text-center mt-4">
                                <button className="btn btn-primary">Send <i className="far fa-paper-planeml-1"></i></button>
                            </div>
                        </form>
                        {/* Form contact  */}
                    </div>

                    {/* Map */}
                    <div className="col-lg-7 col-md-7">
                        <div className="row map-outer">
                            <div className="z-depth-1-half map-inner">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12690.536424152671!2d-121.98454667934567!3d37.32749391041126!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fcaef21054665%3A0x2fa5abfd628b6fa6!2sStevens+Creek+Toyota!5e0!3m2!1sen!2sus!4v1558032106679!5m2!1sen!2sus"
                                    title="map" width="500" height="350" frameBorder="0" style={{ border: "0" }} allowFullScreen></iframe>
                            </div>
                        </div>
                    </div>

                </div>
                {/* Grid row */}

            </div>

        </section>
    );
};

export default Contact;