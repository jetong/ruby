import React from 'react';

import Photo from "../resources/images/cupcake.jpg"

const Story = () => {
    return (
        <div id="story" className="story-wrapper">
            <div className="container spacer">

                <div className="row px-5">

                    <div className="col-lg-6 py-5 text-center">
                        <div className="story-text">
                            <h2 className="align-text-bottom">Her Story</h2>
                            <p className="center-y spacer">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, maiores soluta est laboriosam id sequi vero magni, praesentium labore autem voluptatum iste aspernatur tenetur neque, eum nulla accusamus placeat porro!
                            </p>
                        </div>
                    </div>

                    <div className="col-lg-6 text-center">
                        <h2>
                            <img src={Photo} alt="Henry with cupcake" className="img-fluid"></img>
                        </h2>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Story;