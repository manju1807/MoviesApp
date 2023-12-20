import { useEffect } from 'react';
import MovieListing from '../Components/MovieListing';
import HeroSection from '../Components/HeroSection.jsx';
import { useDispatch } from 'react-redux';
import {
  fetchAsyncMovies,
  fetchAsyncShows,
} from '../ReduxTK/Features/MovieSlice.js';

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAsyncMovies());
    dispatch(fetchAsyncShows());
  }, [dispatch]);

  return (
    <>
      <HeroSection />
      <MovieListing />
    </>
  );
};

export default Home;
