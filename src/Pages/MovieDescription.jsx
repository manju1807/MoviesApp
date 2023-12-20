import { useEffect } from 'react';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchAsyncMovieOrShowDetail,
  getSelectedMovieOrShow,
  removeSelectedMovieOrShow,
} from '../ReduxTK/Features/MovieSlice.js';
import { FaStar } from 'react-icons/fa6';
import { FaThumbsUp } from 'react-icons/fa';
import { BiSolidFilm } from 'react-icons/bi';
import { FaCalendar } from 'react-icons/fa6';

const MovieDescription = () => {
  const { imdbID } = useParams();
  const dispatch = useDispatch();
  const data = useSelector(getSelectedMovieOrShow);
  useEffect(() => {
    dispatch(fetchAsyncMovieOrShowDetail(imdbID));
    return () => {
      dispatch(removeSelectedMovieOrShow());
    };
  }, [dispatch, imdbID]);
  return (
    <div className='container px-6 pt-[6rem] md:pt-0 md:px-4 min-h-[90vh] grid place-content-center '>
      {Object.keys(data).length === 0 ? (
        <div className='text-2xl font-headingcursive text-center '>
          ...Loading
        </div>
      ) : (
        <div className='flex flex-col-reverse gap-6 justify-between md:px-12 items-center md:grid md:grid-cols-12'>
          <div className='flex flex-col gap-4 md:grid md:col-span-8 text-white  py-12'>
            <div className='text-4xl font-medium'>{data.Title}</div>
            <div className='flex flex-row leading-6 justify-start items-center align-middle flex-wrap space-x-6 text-sm text-gray-500'>
              <div className='flex flex-row items-center'>
                <span className='flex pr-2'>IMDB Rating</span>
                <span className='flex flex-row items-center space-x-2'>
                  <span className='flex flex-row items-center space-x-2'>
                    <FaStar className='text-yellow-200 mr-1' />:
                  </span>
                  <span>{data.imdbRating}</span>
                </span>
              </div>

              <div className='flex flex-row items-center'>
                <span className='flex pr-2'>IMDB Votes</span>
                <span className='flex flex-row items-center space-x-1'>
                  <span className='flex flex-row items-center space-x-2'>
                    {' '}
                    <FaThumbsUp className='text-gray-100 mr-1' />:
                  </span>
                  <span> {data.imdbVotes}</span>
                </span>
              </div>

              <div className='flex flex-row items-center'>
                <span className='flex pr-2'>Runtime</span>
                <span className='flex flex-row items-center space-x-1'>
                  <span className='flex flex-row items-center space-x-2'>
                    {' '}
                    <BiSolidFilm className='text-gray-300 mr-1' />:
                  </span>
                  <span> {data.Runtime}</span>
                </span>
              </div>

              <div className='flex flex-row items-center'>
                <span className='flex pr-2'>Year</span>
                <span className='flex flex-row items-center space-x-1'>
                  <span className='flex flex-row items-center space-x-2'>
                    {' '}
                    <FaCalendar className='text-blue-400 mr-1' />:
                  </span>
                  <span> {data.Year}</span>
                </span>
              </div>
            </div>

            <div className='text-[0.9rem] font-light leading-[1.6] max-w-[45rem]'>
              {data.Plot}
            </div>
            <div className='flex flex-col space-y-1 text-sm text-gray-400'>
              <div>
                <span className='text-gray-100'>Director: </span>
                <span>{data.Director}</span>
              </div>
              <div>
                <span className='text-gray-100'>Stars: </span>
                <span>{data.Actors}</span>
              </div>
              <div>
                <span className='text-gray-100'>Generes: </span>
                <span>{data.Genre}</span>
              </div>
              <div>
                <span className='text-gray-100'>Languages: </span>
                <span>{data.Language}</span>
              </div>
              <div>
                <span className='text-gray-100'>Awards: </span>
                <span>{data.Awards}</span>
              </div>
            </div>
          </div>
          <div className='flex justify-center items-center md:grid md:col-span-4'>
            <img src={data.Poster} alt={data.Title} className='rounded-sm' />
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieDescription;
