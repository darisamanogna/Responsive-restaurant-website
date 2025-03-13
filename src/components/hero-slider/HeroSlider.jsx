/*
Overview of this file:
The "HeroSlider" React component is responsible for rendering a hero image slider on a web page. It imports necessary dependencies, including Reactstrap's Container component and the "react-slick" Slider component. The slider's configuration settings allow for infinite looping, set slide transition speed, specify the number of slides to show and scroll at a time, and enable automatic sliding with a defined interval. The component maps over an array of slider data items, each containing a unique ID, title, description, and image URL. It utilizes Bootstrap classes for layout and styling, creating a flex container for alignment and spacing. The slider displays slide titles, descriptions, and a "Explore Food" button on the left side, with corresponding images on the right side. Overall, this component provides a customizable and responsive hero slider for showcasing content on a website.
*/

import React from 'react'; // Import React library
import { Container } from 'reactstrap'; // Import Container component from Reactstrap library
import Slider from 'react-slick'; // Import Slider component from 'react-slick' library

import { sliderData } from '../../assets/fake-data/slider'; // Import sliderData from fake data file
import './slider.css'; // Import CSS styles for the slider

const HeroSlider = () => { // HeroSlider component definition
    // Configuration settings for the Slider component
    const settings = {
        infinite: true, // Allows infinite looping of slides
        speed: 500, // Slide transition speed in milliseconds
        slidesToShow: 1, // Number of slides to show at once
        slidesToScroll: 1, // Number of slides to scroll at a time
        autoplay: true, // Automatically advance slides
        autoplaySpeed: 3000, // Time interval for auto-advancing slides (in milliseconds)
    };

    return (
        <section> {/* Start of slider section */}
            <Container> {/* Start of Bootstrap container */}
                <Slider {...settings}> {/* Slider component with settings */}
                    {/* Mapping over each item in the sliderData array */}
                    {sliderData.map(item => (
                        <div key={item.id}> {/* Unique key for each slide */}
                            <div className="slider__wrapper d-flex align-items-center
                            justify-content-between pt-5"> {/* Slide wrapper */}
                            {/*
                            - "slider__wrapper" is a custom CSS class used for styling the slider's container.
                            - "d-flex" is a Bootstrap class that makes the container a flex container, allowing for flexible layout.
                            - "align-items-center" centers the items vertically within the container.
                            - "justify-content-between" evenly distributes items along the horizontal axis with space between them.
                            - "pt-5": It's a Bootstrap class. "pt" stands for padding-top, and "5" indicates the padding size. In this case, it adds a top padding of 5 units (likely in pixels or other units) to create spacing between the slider and the content above.
                            */}
                                <div className="slider__content w-50 ps-2"> {/* Left side content */}
                                {/*
                                ps-2 is a Bootstrap class. It stands for "padding-start" and is used for adding padding to the left side (in left-to-right languages like English) of an element. The 2 in ps-2 indicates the padding size, likely in pixels or other units.
                                So, ps-2 adds padding to the left side of the element, creating spacing between the element's content and its left edge.
                                */}
                                    <h2 className="mb-3">{item.title}</h2> {/* Slide title */}
                                    {/*
                                    - "mb-3": It's a Bootstrap class. "mb" stands for margin-bottom, and "3" indicates the margin size.
                                    In this case, it adds a bottom margin of 3 units (likely in pixels or other units) to create spacing below the heading.
                                    */}
                                    <p>{item.desc}</p> {/* Slide description */}
                                    <button className="btn">Explore Food</button> {/* Button */}
                                </div>
                                <div className="slider__img w-50"> {/* Right side image */}
                                    <img src={item.imgUrl} alt="" className="w-100" /> {/* Slide image */}
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </Container> {/* End of Bootstrap container */}
        {/* End of slider section */}
        </section>
    );
};

export default HeroSlider; // Export the HeroSlider component

/*
Bootstrap classes and CSS classes are indeed different, but Bootstrap is built on top of CSS and uses CSS classes extensively.
Here's the distinction:
CSS Classes: These are classes defined in Cascading Style Sheets (CSS) files or directly in HTML elements. You can create custom CSS classes or use existing ones to apply styling to HTML elements. CSS classes provide a way to control the appearance and layout of web content.
Bootstrap Classes: Bootstrap is a popular CSS framework that provides a set of pre-defined CSS classes and components for building responsive and styled web interfaces. Bootstrap classes are CSS classes specifically designed by the Bootstrap framework. These classes offer a consistent and responsive design out of the box and can be applied to HTML elements to quickly style and structure your web content.
In your code, you are using both Bootstrap classes (like ps-2, mb-3, w-50, etc.) and custom CSS classes (like slider__wrapper, slider__content, etc.) to style your components. Bootstrap classes are convenient for achieving a consistent and responsive design without writing extensive custom CSS, while custom CSS classes allow you to add specific styles tailored to your project's requirements.
*/