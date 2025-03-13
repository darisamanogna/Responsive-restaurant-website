/*
Overview of this file:
The "ChooseUs" React component represents a section on a web page where users can learn about the benefits offered by a service or business. It uses Reactstrap's Container, Row, and Col components for layout and imports a CSS file for styling. The component displays an image of pasta on one side and textual content on the other. The content includes a heading, a subheading, and a paragraph describing the benefits. Additionally, it showcases four features in two flex containers, each containing an icon, a title, and a description. These features include free home delivery, return & refund policy, secure payment options, and 24/7 customer support. This component provides an attractive and informative way to present key selling points to website visitors.
*/

// Import React library
import React from 'react';

// Import Container, Row, and Col components from Reactstrap
import { Container, Row, Col } from 'reactstrap';

// Import CSS file for styling
import './choose-us.css';

// Import an image asset
import pastaImg from '../../assets/images/pasta.png';

// Define the ChooseUs functional component
const ChooseUs = () => {
  return (
    // Create a section element
    <section>
      {/* Use the Container component for layout */}
      <Container>
        {/* Create a row to hold columns */}
        <Row>
          {/* Create a column for displaying an image */}
          <Col lg="6" md="6">
            {/* Display an image with a class name */}
            <img src={pastaImg} alt="" className="w-100" />
          </Col>

          {/* Create another column for content */}
          <Col lg="6" md="6">
            {/* Create a div for the content */}
            <div className="choose__content">
              {/* Display a heading */}
              <h4>Who we are?</h4>

              {/* Display a subheading */}
              <h2>Take a look at the benefits we offer you</h2>

              {/* Display a paragraph */}
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
                officiis impedit rem neque minus adipisci.
              </p>
            </div>

            {/* Create a div for features */}
            <div className="features mt-4">
              {/* Create a flex container for feature items */}
              <div className="feature1 d-flex align-items-center gap-5">
                {/* Create a div for a single feature */}
                <div className="single__feature">
                  {/* Display an icon */}
                  <span>
                    <i class="ri-truck-line"></i>
                  </span>

                  {/* Display a feature title */}
                  <h6>Free Home Delivery</h6>

                  {/* Display a feature description */}
                  <p>Lorem ipsum dolor sit amet.</p>
                </div>

                {/* Create another div for a single feature */}
                <div className="single__feature">
                  {/* Display an icon */}
                  <span className="feature__icon-two">
                    <i class="ri-money-dollar-box-line"></i>
                  </span>

                  {/* Display a feature title */}
                  <h6>Return & Refund</h6>

                  {/* Display a feature description */}
                  <p>Lorem ipsum dolor sit amet.</p>
                </div>
              </div>

              {/* Create another flex container for feature items */}
              <div className="feature1 mt-3 d-flex align-items-center gap-5">
                {/* Create a div for a single feature */}
                <div className="single__feature">
                  {/* Display an icon */}
                  <span className="feature__icon-3">
                    <i class="ri-secure-payment-line"></i>
                  </span>

                  {/* Display a feature title */}
                  <h6>Secure Payment</h6>

                  {/* Display a feature description */}
                  <p>Lorem ipsum dolor sit amet.</p>
                </div>

                {/* Create another div for a single feature */}
                <div className="single__feature">
                  {/* Display an icon */}
                  <span className="feature__icon-4">
                    <i class="ri-24-hours-line"></i>
                  </span>

                  {/* Display a feature title */}
                  <h6>24/7 Hours Support</h6>

                  {/* Display a feature description */}
                  <p>Lorem ipsum dolor sit amet.</p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

// Export the ChooseUs component as the default export
export default ChooseUs;