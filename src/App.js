import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import MobileNavigation from './components/MobileNavigation';
import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setBannerData,setImageURL } from './store/movieoSlice';

function App() {
  const dispatch = useDispatch()

  useEffect(()=>{
    const fetchTrendingData = async()=>{
      try {
          console.log('Fetching trending data...');
          const response = await axios.get('/trending/all/week');
          console.log('Trending response:', response.data);
          dispatch(setBannerData(response.data.results));
      } catch (error) {
          console.error("Trending fetch error:", error.response || error);
      }
    }

    const fetchConfiguration = async()=>{
      try {
          console.log('Fetching configuration...');
          const response = await axios.get("/configuration");
          console.log('Configuration response:', response.data);
          dispatch(setImageURL(response.data.images.secure_base_url+"original"));
      } catch (error) {
          console.error("Configuration fetch error:", error.response || error);
      }
    }

    fetchTrendingData();
    fetchConfiguration();
  },[dispatch])
  
  return (
    <main className='pb-14 lg:pb-0'>
        <Header/>
        <div className='min-h-[90vh]'>
            <Outlet/>
        </div>
        <Footer/>
        <MobileNavigation/>
    </main>
  );
}

export default App;
