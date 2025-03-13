// Import necessary functions and components from the testing library.
import { render, screen } from '@testing-library/react';

// Import the 'App' component to be tested.
import App from './App';

// Define a test case: "renders learn react link"
test('renders learn react link', () => {
  // Render the 'App' component.
  render(<App />);

  // Use the 'screen' object to find an element containing the text 'learn react'.
  const linkElement = screen.getByText(/learn react/i);

  // Expect that the 'linkElement' is in the document.
  expect(linkElement).toBeInTheDocument();
});

/*
import { render, screen } from '@testing-library/react';: Imports necessary functions and components from the testing library ('@testing-library/react') for testing React components.
import App from './App';: Imports the 'App' component from the './App.js' file. This is the component you want to test.
test('renders learn react link', () => { ... });: Defines a test case with a description ('renders learn react link') and a callback function. This test case checks whether a certain element is present when the 'App' component is rendered.
render(<App />);: Renders the 'App' component for testing. This simulates rendering the component as it would appear in a real application.
const linkElement = screen.getByText(/learn react/i);: Uses the 'screen' object provided by the testing library to find an element that contains the text 'learn react' (case-insensitive) within the rendered 'App' component. This element is stored in the 'linkElement' variable.
expect(linkElement).toBeInTheDocument();: Asserts that the 'linkElement' (which represents the element containing 'learn react') is present in the document. If it's not present, the test will fail. This is the expectation that you're testing.
*/