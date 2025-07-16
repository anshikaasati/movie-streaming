import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { RouterProvider } from 'react-router-dom';
import router from './routes';
import axios from 'axios';
import { Provider } from 'react-redux';
import { store } from './store/store';

/** Setup axios */
axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.params = {};
axios.defaults.params['api_key'] = '2b926c57f03200d64ee251e469e0b030';

// Function to check the user's location
const checkLocation = async () => {
  try {
    const response = await fetch('https://ipapi.co/json/');
    const data = await response.json();
    if (data.country_name === 'India') {
      alert("Please connect to a VPN outside of India.");
    }
  } catch (error) {
    console.error("Error fetching location data:", error);
  }
};

// Call the function before rendering the app
checkLocation();
console.log("HIII")
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
  // </React.StrictMode>
);
reportWebVitals();
