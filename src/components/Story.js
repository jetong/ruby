import React from 'react';

import Photo from "../resources/images/cupcake.jpg"

const Story = () => {
    return (
        <div id="story" className="story_wrapper">
            <div className="container">
                <div className="row">

                    <div className="col-lg-6 text-center">
                        <h2>My Story</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, maiores soluta est laboriosam id sequi vero magni, praesentium labore autem voluptatum iste aspernatur tenetur neque, eum nulla accusamus placeat porro!
                        </p>
                    </div>

                    <div className="col-lg-6 text-center">
                        <h2>
                            <img src={Photo} alt="Henry with cupcake"></img>
                        </h2>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Story;