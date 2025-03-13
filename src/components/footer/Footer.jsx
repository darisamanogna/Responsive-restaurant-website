/*
Overview of this file:
The "Footer" React component represents the footer section of a web page. It incorporates various elements and information, including the site's logo, quick links, footer links, and contact information. The footer is divided into two sections: the top section containing the logo and various links, and the bottom section displaying copyright information. It uses the Reactstrap library's Container, Row, Col, ListGroup, and ListGroupItem components for layout and styling and imports a CSS file for further customization. The component dynamically renders quick links and footer links based on predefined arrays, and contact information is also displayed. Overall, this component provides a comprehensive and visually appealing footer for a website.
*/

// Import React and necessary components and styles
import React from 'react';
import "./footer.css"; // Import the CSS styles for the footer
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap'; // Import components from 'reactstrap'

// Define an array of quick links for the footer
const footerQuickLinks = [
    {
        display: 'Terms & Conditions',
        url: '#'
    },
    {
        display: 'Privacy Policy',
        url: '#'
    },
    {
        display: 'Return & Refund',
        url: '#'
    },
    {
        display: 'Payment Method',
        url: '#'
    }
]

// Define an array of footer links
const footerLinks = [
    {
        display: 'About Us',
        url: '#'
    },
    {
        display: 'Menu',
        url: '#'
    },
    {
        display: 'Recipes',
        url: '#'
    },
    {
        display: 'Contact',
        url: '#'
    }
]

// Define the Footer component
const Footer = () => {
  return (
    <footer className="footer"> {/* Define the footer section */}
        {/* Top section of the footer */}
        <div className="footer__top">
            <Container> {/* Use a Container component from 'reactstrap' */}
                <Row className="align-items-start"> {/* Create a row with aligned items */}

                    {/* Column for the logo */}
                    <Col lg="4" md="4" sm="6"> {/* Define a column */}
                        <div className="logo"> {/* Create a logo section */}
                            <h2 className="d-flex align-items-center gap-1 mb-4"> {/* Create a heading with a flex layout */}
                                <span>
                                    <i class="ri-restaurant-2-line"></i> {/* Add an icon */}
                                </span>{" "}
                                Foodie's Haven {/* Display text */}
                            </h2>
                            <p>
                                {/* Add a paragraph with Lorem Ipsum text */}
                                Lorem ipsum dolor sit amet consecutetur adipisicing elit. Fuga facere
                                eligendi laboriosam id exercitationem tempore.
                            </p>
                        </div>
                    </Col>

                    {/* Column for Info Links */}
                    <Col lg='2' md='4' sm='6' className="align-items-start"> {/* Define another column */}
                        <h5 className="footer__link-title"> {/* Add a heading */}
                            Info Links {/* Display text */}
                        </h5>
                        <ListGroup> {/* Create a list group */}
                            {/* Map through footerQuickLinks array and create list items */}
                            {footerQuickLinks.map((item, index) => (
                                <ListGroupItem key={index} className="link__item"> {/* Create a list group item */}
                                    <a href={item.url}>{item.display}</a> {/* Add a link with display text */}
                                </ListGroupItem>
                            ))}
                        </ListGroup>
                    </Col>

                    {/* Column for Quick Links */}
                    <Col lg='2' md='4' sm='6' className="align-items-start"> {/* Define another column */}
                        <h5 className="footer__link-title"> {/* Add a heading */}
                            Quick Links {/* Display text */}
                        </h5>
                        <ListGroup> {/* Create a list group */}
                            {/* Map through footerLinks array and create list items */}
                            {footerLinks.map((item, index) => (
                                <ListGroupItem key={index} className="link__item"> {/* Create a list group item */}
                                    <a href={item.url}>{item.display}</a> {/* Add a link with display text */}
                                </ListGroupItem>
                            ))}
                        </ListGroup>
                    </Col>

                    {/* Column for Contact information */}
                    <Col lg="4" md="4" sm="6" className="align-items-start"> {/* Define another column */}
                        <h5 className="footer__link-title"> {/* Add a heading */}
                            Contact {/* Display text */}
                        </h5>
                        <ListGroup> {/* Create a list group */}
                            {/* List items for contact information */}
                            <ListGroupItem className="link__item d-flex align-items-center gap-3">
                                <i class="ri-map-pin-line"></i> Sylhet, Bangladesh{" "}
                            </ListGroupItem>

                            <ListGroupItem className="link__item d-flex align-items-center gap-3">
                                <i class="ri-mail-line"></i> example@gmail.com{" "}
                            </ListGroupItem>

                            <ListGroupItem className="link__item d-flex align-items-center gap-3">
                                <i class="ri-phone-line"></i> +880 123 456 7890
                            </ListGroupItem>
                        </ListGroup>
                    </Col>
                </Row>
            </Container>
        </div>

        {/* Bottom section of the footer */}
        <div className="footer__bottom">
            <Container> {/* Use a Container component */}
                <Row>
                    <Col lg='12'>
                        <p>copyright 2023, developed by Neeraja Kallamadi. All rights reserved</p>
                    </Col>
                </Row>
            </Container>
        </div>
    </footer>
  )
}

// Export the Footer component
export default Footer;

/*
does lg = 2 that must be an integer or can i give floating point number too ?
In the context of the Bootstrap grid system, the values for lg, md, sm, and xs should be integers representing the number of columns that a column should occupy. These values typically range from 1 to 12, with 12 being the full width of the grid.
For example, if you want a column to occupy half of the available space on large screens (lg), you would set it to lg="6" (12 columns divided by 2).
Using floating-point numbers for these values is not a standard practice and might not work as expected. It's best to stick to integer values within the range of 1 to 12 when defining the column sizes in the Bootstrap grid system.

difference between listgroup and ul ?
<ul> and <ListGroup> are HTML elements used for structuring lists, but they serve different purposes and have different features.
<ul> (Unordered List):
<ul> is a basic HTML element used to create unordered lists.
It is typically used for creating bulleted lists where each item is represented by a bullet point.
You can add list items <li> within <ul> to create the individual list elements.
It doesn't provide any special styling or interactivity by default and is mainly used for simple lists of items.
Example:
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
<ListGroup> (Bootstrap List Group):
<ListGroup> is a component provided by the Bootstrap CSS framework for creating stylized lists.
It offers additional styling and features compared to a basic <ul>.
<ListGroup> allows you to create styled lists with items that can include headings, text, badges, and other Bootstrap components.
It is commonly used in web applications to create navigation menus, sidebars, or lists of items that require more styling and interactivity.
Example (using React and Bootstrap):
import { ListGroup, ListGroupItem } from 'reactstrap';
<ListGroup>
  <ListGroupItem>Item 1</ListGroupItem>
  <ListGroupItem>Item 2</ListGroupItem>
  <ListGroupItem>Item 3</ListGroupItem>
</ListGroup>
In summary, <ul> is a basic HTML element for creating simple unordered lists, while <ListGroup> is a Bootstrap component that provides enhanced styling and features for creating more sophisticated lists with additional components and interactivity.

what are the additional styling components that bootstrap provide to listgroup ?
Bootstrap's <ListGroup> component provides several styling and utility classes that you can use to enhance the appearance and functionality of your lists. Some of the additional styling components and classes include:
List Groups: The basic <ListGroup> component is a styled container for list items.
List Group Items: Each individual item in the list can be styled using the <ListGroupItem> component. You can add various content elements to each list item.
Active and Disabled Items: You can use the active and disabled props with <ListGroupItem> to indicate active or disabled items in the list.
Badges: You can add badges to list items using the <Badge> component. Badges are often used to display additional information, like item counts or statuses.
Contextual Variations: Bootstrap provides contextual classes like list-group-item-primary, list-group-item-success, list-group-item-danger, etc., to give different styling to list items based on their context.
Flush List: You can create a flush list (with no borders or rounded corners) using the list-group-flush class.
Horizontal Layout: You can display list items horizontally using the list-group-horizontal class.
Custom Content: You can add custom content to list items, including headings, paragraphs, buttons, and more.
Active State: The active class can be added to a list item to highlight it as the active or selected item.
Link Items: You can turn list items into clickable links by adding the list-group-item-action class.
JavaScript Behavior: Bootstrap provides JavaScript functions for enhancing list group behavior, like adding dismissible alerts.
These are some of the key styling components and features that Bootstrap offers for list groups. Depending on your needs, you can use these classes and components to create visually appealing and functional lists in your web applications.

<p>copyright 2023, developed by Neeraja Kallamadi. All rights reserved</p>
what does this line mean ?
The line <p>copyright 2023, developed by Neeraja Kallamadi. All rights reserved</p> is typically found in the footer section of a website and conveys the following information:
Copyright Year: "copyright 2023" indicates the year in which the content or website was copyrighted. This signifies the year in which the intellectual property rights for the website's content were established.
Author or Developer: "developed by Neeraja Kallamadi" mentions the name of the person or entity responsible for creating and developing the website. In this case, it's attributed to Neeraja Kallamadi.
All Rights Reserved: "All rights reserved" is a standard copyright notice that indicates that the copyright holder (in this case, Neeraja Kallamadi) retains all legal rights provided by copyright law, such as the right to reproduce, distribute, and display the content. It serves as a reminder that others should not copy or use the website's content without permission.
In summary, this line is a copyright notice that specifies the copyright year, attributes the development of the website to Neeraja Kallamadi, and asserts that all rights to the website's content are reserved by the copyright holder. It's a legal statement commonly used to protect intellectual property on websites.

copyrighted mean in single line ?
"Copyrighted" means that the work or content is protected by copyright law, and the copyright holder (usually the creator or owner) has exclusive rights to reproduce, distribute, and display that work. Others cannot use, copy, or distribute it without the permission of the copyright holder.
*/