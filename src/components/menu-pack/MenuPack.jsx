/*
Overview of this file:
The "MenuPack" React component is responsible for displaying a menu of food items on a web page, categorized by different types such as Fast Food, Rice Menu, Pizza, Desserts, and Coffee. It utilizes Reactstrap's Container, Row, and Col components for layout and styling and imports a CSS file for additional styling. The component maintains a state variable called 'filter' to track the currently selected menu category, with an initial value of 'RICE-MENU'. Using the useEffect hook, it dynamically updates the 'products' state based on the selected 'filter' category. This allows for the rendering of food items specific to the chosen category. The component also provides buttons for users to filter the menu by category. Each food item is displayed using the "ProductCard" component, creating an organized and responsive menu presentation on the website.
*/

import React, { useState, useEffect } from 'react'; // Import React, useState, and useEffect from React library

import { Container, Row, Col } from 'reactstrap'; // Import Container, Row, and Col components from 'reactstrap' library
import ProductCard from '../product-card/ProductCard'; // Import the ProductCard component
import { fastFoodProducts, riceMenuProducts, pizzaProducts, dessertProducts, coffeeProducts } from '../../assets/fake-data/products'; // Import product data
import './menu-pack.css'; // Import CSS styles for MenuPack

const MenuPack = () => {
    // Define a state variable 'filter' and a function to update it 'setFilter'
    const [filter, setFilter] = useState('RICE-MENU');

    // Define a state variable 'products' and a function to update it 'setProducts' with initial data 'riceMenuProducts'
    const [products, setProducts] = useState(riceMenuProducts);

    // Use the 'useEffect' hook to run this function whenever 'filter' changes
    useEffect(() => {
        // Check the value of 'filter' and update 'products' accordingly
        if (filter === 'RICE-MENU') {
            setProducts(riceMenuProducts);
        }
        if (filter === 'FAST-FOOD') {
            setProducts(fastFoodProducts);
        }
        if (filter === 'PIZZA') {
            setProducts(pizzaProducts);
        }
        if (filter === 'DESSERTS') {
            setProducts(dessertProducts);
        }
        if (filter === 'COFFEE') {
            setProducts(coffeeProducts);
        }
    }, [filter]); // The effect runs whenever 'filter' changes

    return (
        // Render a section element
        <section>
          {/* Create a container for content */}
          <Container>
            {/* Create a row for aligning content */}
            <Row>
              {/* Title for the menu */}
              <Col lg='12' className='text-center mb-4'>
                <h3 className="menu__title">Our Menu Pack</h3>
              </Col>
              {/* Buttons for filtering the menu */}
              <Col lg='12' className='text-center mb-5'>
                {/* Render buttons with classNames based on the 'filter' value */}
                <button className={`filter-btn ${filter === 'FAST-FOOD' ? 'active__btn' : ''}`} onClick={() => setFilter("FAST-FOOD")}>Fast Food</button>
                <button className={`filter-btn ${filter === 'RICE-MENU' ? 'active__btn' : ''}`} onClick={() => setFilter("RICE-MENU")}>Rice Menu</button>
                <button className={`filter-btn ${filter === 'PIZZA' ? 'active__btn' : ''}`} onClick={() => setFilter("PIZZA")}>Pizza</button>
                <button className={`filter-btn ${filter === 'DESSERTS' ? 'active__btn' : ''}`} onClick={() => setFilter("DESSERTS")}>Desserts</button>
                <button className={`filter-btn ${filter === 'COFFEE' ? 'active__btn' : ''}`} onClick={() => setFilter("COFFEE")}>Coffee</button>
              </Col>

              {/* Map through 'products' and render ProductCard components */}
              {
                products.map(item => (
                  <Col lg='3' md='4' sm='6' xs='6' key={item.id} className="mb-4">
                    {/* Render ProductCard component with 'item' prop */}
                    <ProductCard item={item} />
                  </Col>
                ))
              }
            </Row>
          </Container>
        </section>
      );
}

export default MenuPack

/*
<section>: Represents a section of the webpage.
<Container>: Bootstrap container for content alignment.
<Row>: Bootstrap row for arranging content in a grid.
<Col>: Bootstrap column for defining column layouts.
<h3>: Heading element for the menu title.
<button>: These buttons are used for filtering the menu items based on categories. They have the filter-btn class for styling.
{filter === 'CATEGORY' ? 'active__btn' : ''}: This ternary operator conditionally adds the class active__btn to a button when it matches the current filter value. If the filter matches the category, it's considered "active" and gets the active__btn styling.
{products.map(item => (...))}: Maps through the products array and renders ProductCard components for each item in the array.
<ProductCard item={item} />: Renders the ProductCard component and passes an item prop to it.
*/

/*
Sure, I can explain useState and useEffect in simple terms with everyday examples:
useState:
Imagine you have a box, and you want to put something in it and take it out later. useState is like that box. It helps you create a special box to store a piece of information (like a number, a word, or even a list of things) while your app is running. You can change what's inside the box whenever you want. For example, if you're building a to-do list app, you can use useState to keep track of the tasks you add or remove from the list.
useEffect:
Think of useEffect like a watchman for your box (the state). The watchman is always looking at the box, and when something inside the box changes, the watchman can do something about it. For example, if you have a weather app, you can use useEffect to watch for changes in your location. When your location changes (let's say you move from one city to another), the useEffect can update the weather information for your new location. It's like an automatic reaction to changes in your app.
So, useState is for storing and changing data in your app, while useEffect is for responding to changes and taking actions based on those changes. They work together to make your app dynamic and interactive.

Of course, let's relate useState and useEffect to your code:
In your code, you have:
const [filter, setFilter] = useState('RICE-MENU')
Here, useState is like creating a box called filter. This box can store a value, which is initially set to 'RICE-MENU'. So, it's like having a box with the label "filter" and putting the word "RICE-MENU" inside it.
Then, you use this filter value to decide which products to display based on the category selected by the user. When the user clicks on different category buttons (like "Fast Food" or "Rice Menu"), you update the value inside the filter box using setFilter. It's like changing the content of the "filter" box to reflect the user's choice.
Now, regarding useEffect:
useEffect(() => {
    if (filter === 'RICE-MENU') {
        setProducts(riceMenuProducts);
    }
    // Other if statements for different categories...

}, [filter]);
In this part, useEffect acts like a watchman for the filter box. It's saying, "Hey, whenever the content of the filter box changes (like when the user clicks a different category), do something."
When the filter value changes (when the user clicks a category button), useEffect checks what's inside the filter box (filter === 'RICE-MENU'), and based on that, it updates the products displayed (setProducts(riceMenuProducts)). So, it's like the watchman responding to the change in the "filter" box's content by showing the right products.
In summary, useState creates a box to store data (the selected category), and useEffect watches that box and reacts when its content changes, updating the displayed products accordingly. This combination makes your menu dynamic and responsive to user choices.
*/