/*
Overview of this file:
This React component named "Header" represents the header section of a website. It uses React's useRef hook to create a reference to the navigation menu, allowing it to toggle a CSS class for menu animation. The component imports a CSS file for styling and the Container component from Reactstrap for layout. It defines an array of navigation links, including Home, About, Menu, Recipes, and Contact, with corresponding URLs. The header consists of a logo, a navigation menu that toggles when clicked, a search input field, a shopping cart icon with item count, and a mobile menu icon for responsive design. Each navigation link triggers the menuToggle function when clicked, which adds or removes the 'active__menu' class to show or hide the menu. This component provides a flexible and responsive navigation header for a website.
*/

/*
In simple terms, a "hook" in React is a special function that lets you add extra abilities to your functional components. It's like a power-up for your components.
In the world of React, components are like building blocks for your web application. They are responsible for rendering parts of your webpage and managing their behavior. However, sometimes you need to do more than just display content. You might want to manage data, handle user interactions, or perform other tasks.
Hooks come to the rescue. They are functions provided by React that you can use inside your components. Each hook serves a specific purpose, like managing state (useState), dealing with side effects (useEffect), or handling form input (useForm).
Hooks make it easier to organize and reuse code within your components. They allow you to tap into React's capabilities and build dynamic, interactive web applications without the complexity of class components. In essence, hooks empower your functional components with superpowers to create more sophisticated and feature-rich user interfaces.
*/
/*
useRef in React is like giving a nickname to something you want to remember later.
Imagine you have a toy box, and you want to remember where your favorite toy is. You could give it a nickname like "My Favorite Toy" and write it down. Then, even if you forget where it is in the box, you can always look at your note to find it easily.
In React, sometimes you want to remember and interact with things on your web page, like an input field or a button. useRef is like that note. You give a nickname (or reference) to an element on your webpage. Later, you can use that nickname to do things with that element, like change its text or focus on an input field, even if your webpage updates or changes. It's a way to keep track of things on your webpage and control them when you need to.
*/
import React, { useRef } from 'react'; // Import React and useRef hook
import './header.css'; // Import the CSS file for styling
import { Container } from 'reactstrap'; // Import the Container component from Reactstrap

const navLinks = [ // Array of navigation links
    {
        display: 'Home', // Display text for the link
        url: '#' // URL for the link (placeholder)
    },
    {
        display: 'About',
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

const Header = () => { // Header component
    // Create a ref to the navigation menu
    const menuRef = useRef();

    // Function to toggle the 'active__menu' class on the menuRef element
    const menuToggle = () => menuRef.current.classList.toggle('active__menu');

    return (
        <header className="header"> {/* Start of header container */}
            <Container> {/* Start of Bootstrap container */}
                <div className="navigation"> {/* Start of navigation container */}
                    <div className="logo"> {/* Start of logo container */}
                        <h2 className="d-flex align-items-center gap-1">
                            <span><i class="ri-restaurant-2-line"></i></span>{" "} Foodie's Haven
                        </h2>
                    </div>
                    <div className="nav__menu" ref={menuRef}> {/* Start of navigation menu container with ref */}
                        <div className="nav__list__wrapper d-flex align-items-center gap-5">
                            {/* Start of list of navigation links */}
                            <ul className="nav__list">
                                {navLinks.map((item, index) => ( // Map over navigation links
                                    <li className="nav__item" key={index}>
                                        <a href={item.url} onClick={menuToggle}>{item.display}</a>
                                    </li>
                                ))}
                            </ul>
                            {/* Start of menu right container */}
                            <div className="menu__right">
                                <div className="custom__search">
                                    {/* Start of custom search input */}
                                    <input type="text" placeholder='search item....' />
                                    <span><i class="ri-search-line"></i></span> {/* Search icon */}
                                </div>
                            </div> {/* End of menu right container */}
                        </div>
                    </div> {/* End of navigation menu container */}
                    <div> {/* Start of cart icon container */}
                        <span className="cart__icon">
                            <i class="ri-shopping-basket-line"></i> {/* Shopping basket icon */}
                            <span className="badge">2</span> {/* Cart item count */}
                        </span>
                    </div> {/* End of cart icon container */}
                    <div className="mobile__menu"> {/* Start of mobile menu icon container */}
                        <span><i class="ri-menu-line" onClick={menuToggle}></i></span> {/* Mobile menu icon with click event */}
                    </div> {/* End of mobile menu icon container */}
                </div> {/* End of navigation container */}
            </Container> {/* End of Bootstrap container */}
        {/* End of header container */}
        </header>
    );
};

export default Header; // Export the Header component