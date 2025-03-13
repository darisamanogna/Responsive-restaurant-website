// Import the 'app.css' file for styling.
import './app.css';

// Import the 'Home' component from the 'Home.js' file.
import Home from "./pages/Home";

// Define a functional component called 'App'.
function App(){
  // In the component's render function, return the 'Home' component.
  return <Home />;
}

// Export the 'App' component as the default export of this module.
export default App;

/*
import './app.css';: Imports the CSS file named 'app.css' for styling the 'App' component.
import Home from "./pages/Home";: Imports the 'Home' component from the './pages/Home.js' file. This component is used within the 'App' component.
function App() {...}: Defines a functional component named 'App'. This component represents the root component of your application.
return <Home />;: In the component's rendering function, it returns the 'Home' component. This means that when the 'App' component is rendered, it will display the contents of the 'Home' component.
export default App;: Exports the 'App' component as the default export of this module, making it available for use in other parts of your application.
*/