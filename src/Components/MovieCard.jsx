import { Link } from 'react-router-dom';

const MovieCard = (props) => {
  const { data } = props;
  return (
    <div className='overflow-hidden h-[360px] p-2 md:p-4 relative group hover:scale-105 transition-all duration-300 ease-in-out flex flex-col gap-2 justify-center items-center align-middle'>
      <Link to={`/movie/${data.imdbID}`}>
        <div className='w-[250px] md:w-[200px] overflow-hidden mx-auto flex items-center justify-center'>
          <img
            src={data.Poster}
            className='h-[250px] md:h-[280px] group-hover:scale-110 transition duration-300 ease-in-out'
            alt={data.Title}
          />
        </div>
        <div className='text-sm capitalize text-gray-300 w-full justify-center py-2 flex flex-col items-center group-hover:scale-110 transition duration-300 ease-in-out mt-2'>
          <h4 className='text-md font-semibold max-w-[180px]'>{data.Title}</h4>
          <p className='font-medium text-sm text-gray-500'>{data.Year}</p>
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;
