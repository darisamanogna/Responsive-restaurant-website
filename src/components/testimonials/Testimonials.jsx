/*
Overview of this file:
The "Testimonials" React component is designed to showcase customer reviews and feedback on a web page. It employs the Reactstrap library's Container, Row, and Col components for layout and styling and imports CSS styles for further customization. The component features a Slider that displays customer testimonials with settings for infinite looping, transition speed, number of visible slides, and autoplay. Each testimonial includes a reviewer's name and profession, along with their feedback. The slider is presented alongside an image to create an engaging visual presentation. Overall, this component provides an attractive and interactive way to display customer testimonials on a website.
*/

import React from 'react'; // Import React library
import { Container, Row, Col } from 'reactstrap'; // Import Container, Row, and Col components from 'reactstrap' library
import './testimonial.css'; // Import styles from 'testimonial.css' file
import testimonialImg from '../../assets/images/review1.png'; // Import an image

import Slider from 'react-slick'; // Import Slider component from 'react-slick' library

const Testimonials = () => { // Define a functional component named 'Testimonials'
    const settings = { // Define settings for the Slider component
        infinite: true, // Enable infinite looping of slides
        speed: 500, // Set the transition speed (in milliseconds)
        slidesToShow: 1, // Number of slides to show at a time
        autoplay: true, // Enable autoplay
        autoplaySpeed: 3000, // Autoplay interval (in milliseconds)
    };

    return ( // Return JSX elements to render
        <section> {/* Start of a section */}
            <Container> {/* Use 'Container' component from 'reactstrap' for layout */}
                <Row> {/* Create a row for aligning content */}
                    <Col lg="8" sm="12" md="12" className="m-auto"> {/* Create a column for centering content */}
                        <div className="slider__wrapper d-flex align-items-center gap-5"> {/* Create a wrapper div for slider content */}
                            <div className="slider__content w-50"> {/* Left side of the slider */}
                                <h2 className="mb-4 ps-3">What our customers are saying</h2> {/* Heading */}
                                <Slider {...settings}> {/* Render Slider component with settings */}
                                    <div> {/* Slide 1 */}
                                        <div className="single__testimonial"> {/* Testimonial content */}
                                            <p className="review__content">
                                                "Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                                Perferendis aliquam numquam laudantium atque velit
                                                accusamus ipsum molestias, maiores amet: Earum nobis neque
                                                odit natus cumque a expedita, corrupti libero! Praesentium!"
                                            </p> {/* Review content */}
                                            <h6>Jhon Doe</h6> {/* Reviewer's name */}
                                            <p>Web Developer</p> {/* Reviewer's profession */}
                                        </div>
                                    </div>
                                    <div> {/* Slide 2 */}
                                        <div className="single__testimonial"> {/* Testimonial content */}
                                            <p className="review__content">
                                                "Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                                Perferendis aliquam numquam laudantium atque velit
                                                accusamus ipsum molestias, maiores amet: Earum nobis neque
                                                odit natus cumque a expedita, corrupti libero! Praesentium!"
                                            </p> {/* Review content */}
                                            <h6>Jhon Doe2</h6> {/* Reviewer's name */}
                                            <p>Web Developer</p> {/* Reviewer's profession */}
                                        </div>
                                    </div>
                                </Slider> {/* End of Slider component */}
                            </div> {/* End of left side of the slider */}
                            <div className="slider__img w-50"> {/* Right side of the slider */}
                                <img src={testimonialImg} alt="" className='w-100'/> {/* Display an image */}
                            </div> {/* End of right side of the slider */}
                        </div> {/* End of slider wrapper */}
                    </Col> {/* End of column */}
                </Row> {/* End of row */}
            </Container> {/* End of container */}
        {/* End of section */}
        </section>
    );
}

export default Testimonials; // Export the 'Testimonials' component as the default export

/*
In general English, a "testimonial" refers to a formal statement or written declaration provided by a person or entity that expresses their support, approval, or recommendation for a product, service, person, or organization. Testimonials are often used in marketing and advertising to showcase positive feedback from satisfied customers or clients, with the aim of building trust and credibility. They can take the form of written statements, video endorsements, or other means of expressing satisfaction or endorsement. Testimonials are used to highlight the positive experiences and opinions of individuals or entities to influence others positively.
*/