import { useSelector } from 'react-redux';
import { getAllMovies, getAllShows } from '../ReduxTK/Features/MovieSlice';
import MovieCard from '../Components/MovieCard';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

const MovieListing = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  useEffect(() => {
    if (isInView) {
      mainControls.start('visible');
    }
  }, [isInView, mainControls]);

  const movies = useSelector(getAllMovies);
  const shows = useSelector(getAllShows);

  let renderMovies, renderShows;

  if (movies.Response === 'True') {
    renderMovies = movies.Search.map((movie, index) => (
      <MovieCard key={index} data={movie} />
    ));
  } else {
    renderMovies = (
      <div className='movies-error'>
        <h3>{movies.Error}</h3>
      </div>
    );
  }

  if (shows.Response === 'True') {
    renderShows = shows.Search.map((show, index) => (
      <MovieCard key={index} data={show} />
    ));
  } else {
    renderShows = (
      <div className='shows-error'>
        <h3>{shows.Error}</h3>
      </div>
    );
  }

  return (
    <div className='container flex flex-col px-6 space-y-12 text-gray-200'>
      <div className='container justify-center items-start flex flex-col gap-4'>
        <motion.h2
          variants={{
            hidden: { opacity: 0, y: 100 },
            visible: { opacity: 1, y: 1 },
          }}
          initial='hidden'
          animate={mainControls}
          transition={{
            duration: 0.6,
            delay: 0.1,
          }}
          className='text-xl'
        >
          Action <span className='text-red-500'> Movies</span>
        </motion.h2>
        <motion.div
          ref={ref}
          variants={{
            hidden: { opacity: 0, y: 100 },
            visible: { opacity: 1, y: 1 },
          }}
          initial='hidden'
          animate={mainControls}
          transition={{
            duration: 0.6,
            delay: 0.6,
          }}
          className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5  gap-[40px] max-w-sm mx-auto md:max-w-none md:mx-0'
        >
          {renderMovies}
        </motion.div>
      </div>
      <div className='container justify-center items-start flex flex-col gap-4'>
        <motion.h2
          ref={ref}
          variants={{
            hidden: { opacity: 0, y: 100 },
            visible: { opacity: 1, y: 1 },
          }}
          initial='hidden'
          animate={mainControls}
          transition={{
            duration: 0.6,
            delay: 0.12,
          }}
          className='text-xl'
        >
          Trending <span className='text-red-500'> Shows</span>
        </motion.h2>
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 100 },
            visible: { opacity: 1, y: 1 },
          }}
          initial='hidden'
          animate={mainControls}
          transition={{
            duration: 0.6,
            delay: 0.14,
          }}
          className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-[40px] max-w-sm mx-auto md:max-w-none md:mx-0'
        >
          {renderShows}
        </motion.div>
      </div>
    </div>
  );
};

export default MovieListing;
