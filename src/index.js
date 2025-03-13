// Import the React library.
import React from 'react';

// Import the ReactDOM library. Note that it's using `ReactDOM.createRoot` for concurrent mode.
import ReactDOM from 'react-dom/client';

// Import the main application component.
import App from './App';

// Import the utility for measuring web vitals.
import reportWebVitals from './reportWebVitals';

// Import the Bootstrap CSS for styling.
import 'bootstrap/dist/css/bootstrap.min.css';

// Import the Remixicon font icons for additional icons.
import 'remixicon/fonts/remixicon.css';

// Import the CSS for the Slick Carousel library (for image carousels).
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Create a root instance using `ReactDOM.createRoot` and specify the DOM element to render the app into.
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the main application component wrapped in a <React.StrictMode> element.
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to measure performance in your app, you can pass a function to log the results using `reportWebVitals`.
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

/*
In simple words, the reportWebVitals() function is used to measure and report the performance of your web application. It helps you understand how well your website is performing in terms of speed, interactivity, and other key metrics.
When you call reportWebVitals(), it collects data about your website's performance and can send this data to various analytics tools or services. This information is valuable for identifying areas where your website may need optimization or improvement to ensure a better user experience.
In summary, reportWebVitals() is a tool to keep track of your website's performance and diagnose any performance-related issues, allowing you to make necessary improvements for a smoother and faster user experience.
*/