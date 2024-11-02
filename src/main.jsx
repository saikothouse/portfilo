import React from 'react';
import ReactDOM from 'react-dom/client'; // Updated for React 18
import App from './App';
import './index.css'; // Import your global CSS styles

// Create a root element for React 18
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
