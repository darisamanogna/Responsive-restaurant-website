/*
Overview of this file:
The "Download" React component is designed to encourage users to download a mobile app. It uses Reactstrap's Container, Row, and Col components for layout and imports a CSS file for styling. The component consists of two columns, one displaying an app image and the other presenting app-related content. The content includes an h5 heading, an h2 heading with a margin, a descriptive paragraph, and two buttons for downloading the app from the Apple Store and Google Play, each with corresponding icons. Overall, this component offers an attractive and informative way to promote and facilitate app downloads on a website.
*/

import React from 'react'; // Import React library
import './download.css'; // Import CSS for styling
import appImg from '../../assets/images/app.png'; // Import an image
import { Container, Row, Col } from 'reactstrap'; // Import Container, Row, and Col components from 'reactstrap'

const Download = () => { // Define a functional component named Download
  return (
    <section> {/* Start of a section */}
        <Container className="app__container"> {/* Use Container component from 'reactstrap' with a custom class */}
            <Row> {/* Start of a row */}
                <Col lg='6' md='6'> {/* Create a column with lg and md breakpoints */}
                    <div className="app__img"> {/* Create a div with a custom class */}
                        <img src={appImg} alt="" /> {/* Render an image using the imported image */}
                    </div>
                </Col>
                <Col lg='6' md='6'> {/* Create another column with lg and md breakpoints */}
                    <div className="app__content"> {/* Create a div with a custom class */}
                        <h5>Download our app</h5> {/* Render an h5 heading */}
                        <h2 className="mb-4">Never Fell Hungry! Download Our Mobile App Order Delicious Food</h2> {/* Render an h2 heading with a margin-bottom */}
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit duciums
                            iste minus quidem optio natus, ullam omnis! Esse, sint quia.
                        </p> {/* Render a paragraph of text */}
                        <div className="app__btns d-flex align-items-cneter gap-5 mt-4"> {/* Create a div with custom classes */}
                            <button className="btn__apple d-flex align-items-center gap-3"> {/* Render a button with a custom class */}
                                <i class="ri-apple-line"></i><a href="#">Apple Store</a> {/* Render an Apple Store link with an icon */}
                            </button>
                            <button className="btn__google d-flex align-items-center gap-3"> {/* Render a button with a custom class */}
                                <i class="ri-google-play-line"></i><a href="#">Google Play</a> {/* Render a Google Play link with an icon */}
                            </button>
                        </div> {/* Close the div for app buttons */}
                    </div> {/* Close the div for app content */}
                </Col> {/* Close the second column */}
            </Row> {/* Close the row */}
        </Container> {/* Close the container */}
    {/* Close the section */}
    </section>
  );
}

export default Download; // Export the Download component