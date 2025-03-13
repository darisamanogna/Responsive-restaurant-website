/*
Overview of this file:
The "PopularMenu" React component is responsible for displaying a section of popular food menu items on a web page. It utilizes Reactstrap's Container, Row, and Col components for layout and responsiveness. The component imports data from a fake data source for popular menu items and the "ProductCard" component for rendering each item. Within the section, it creates a title for the popular menu and maps through the menu data, creating ProductCard components for each item. The columns are configured to span different numbers of columns based on screen size, ensuring a responsive layout. This component provides a flexible way to showcase popular menu items in a visually appealing manner on a website.
*/

import React from 'react'

// Importing Container, Row, and Col components from "reactstrap" for layout
import { Container, Row, Col } from "reactstrap";

// Importing data from a fake data source for popular menu items
import { popularMenuFood } from '../../assets/fake-data/products'

// Importing the ProductCard component
import ProductCard from '../product-card/ProductCard';

// Importing CSS styles for the PopularMenu component
import './popular-menu.css'

// PopularMenu functional component
const PopularMenu = () => {
  return (
    // Creating a section element with top padding (pt-0)
    <section className="pt-0">
        {/* Using the Container component to create a container for content */}
        <Container>
            {/* Creating a row */}
            <Row>
                {/* Creating a column that spans 12 columns on large screens */}
                <Col lg='12' className="mb-5">
                    {/* Displaying a heading for the popular menu */}
                    <h2 className="popular__menu-title">Popular Food Menu</h2>
                </Col>

                {/* Mapping through the popular menu data and creating ProductCard components */}
                {
                    popularMenuFood.map(item => (
                        /* Creating a column that spans 3 columns on large screens,
                           4 columns on medium screens, 6 columns on small and extra-small screens */
                        <Col lg="3" md="4" sm="6" xs="6" className="mb-4" key={item.id}>
                            {/* Rendering the ProductCard component and passing the item data as a prop */}
                            <ProductCard item={item}/>
                        </Col>
                    ))
                }
            </Row>
        </Container>
    </section>
  )
}

// Exporting the PopularMenu component as the default export
export default PopularMenu

/*
when you see lg="3" within the <Col> component, it's using a responsive design approach based on screen size breakpoints. Here's what it means:
lg: This stands for "large" screens. It's a common convention to use screen size breakpoints like "lg" (large), "md" (medium), "sm" (small), and "xs" (extra-small) to define how many columns a layout element should span for different screen sizes.
So, lg="3" means that on large screens (typically desktop or wide screens), the column should span 3 out of the 12 available columns in the grid system. This allows you to create responsive layouts where the number of columns a component spans can change depending on the screen size.
For example, if you have a row with three columns and you set them to lg="3", they will each take up one-fourth (3 out of 12) of the available horizontal space on large screens. On smaller screens, you might set different values like md="4" (spanning one-third of the available space on medium screens) or sm="6" (spanning half the space on small screens) to optimize the layout for those screen sizes.
It's a flexible way to create responsive designs that adapt to various screen sizes and orientations.
*/