import { useState } from 'react';

// Sample data for slides
const slides = [
  {
    id: 1,
    image:
      'https://r4.wallpaperflare.com/wallpaper/696/292/11/game-of-thrones-jon-snow-digital-art-fantasy-art-wallpaper-18f62df890506c28001c61ae88c2b42a.jpg',
    name: 'Game of thrones',
    description:
      'Epic battles, political intrigue, and dragons shape the fate of Westeros in this fantasy masterpiece.',
  },
  {
    id: 2,
    image:
      'https://r4.wallpaperflare.com/wallpaper/485/122/476/pirates-of-the-caribbean-dead-men-tell-no-tales-movies-pirates-of-the-caribbean-wallpaper-23ecbb99911527ab10512d304664aadd.jpg',
    name: 'The Pirates of the Carribean',
    description:
      'Captain Jack Sparrow embarks on a swashbuckling adventure, encountering curses, treasure, and high seas antics.',
  },
  {
    id: 3,
    image:
      'https://r4.wallpaperflare.com/wallpaper/21/919/714/the-witcher-netflix-tv-series-tv-series-henry-cavill-orange-eyes-hd-wallpaper-eeacfb2e7f162268406aa64a0bbaab2a.jpg',
    name: 'The Witcher',
    description:
      'Geralt of Rivia, a monster hunter, navigates a dark fantasy world filled with magic, monsters, and moral ambiguity.',
  },
  {
    id: 4,
    image:
      'https://r4.wallpaperflare.com/wallpaper/818/1022/411/money-heist-money-heist-comic-hd-wallpaper-d050b5396f46ee5308cf77561b46b438.jpg',
    name: 'Money Heist',
    description:
      'A mastermind known as "The Professor" plans the perfect heist, orchestrating chaos and drama in this thrilling Spanish series.',
  },
  // Add more slide objects as needed
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + slides.length) % slides.length
    );
  };

  return (
    <div className='min-h-[70vh] relative container'>
      <div id='slide' className='relative container'>
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`item ${
              index === currentSlide ? '' : 'hidden'
            } w-[100%] h-[60vh] bg-cover container bg-center absolute transition-all ease-in-out duration-300 z-10`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className='overlay absolute container inset-0 bg-gradient-to-r from-gray-900 via-transparent to-gray-900 z-10 opacity-50'></div>
            <div className='overlay absolute container inset-0 bg-gradient-to-r from-gray-900 via-transparent to-gray-900 z-10 opacity-50'></div>
            <div className='z-20 container absolute top-2/3 md:top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col justify-start px-4 md:px-6 space-y-2 text-white'>
              <div className='text-3xl max-w-[70%] md:max-w-sm md:text-4xl z-20 font-semibold text-left'>
                {slide.name}
              </div>
              <p className='text-left max-w-[350px]'>{slide.description}</p>
              <div className='flex'>
                <button className='bg-red-500 text-white px-4 py-2 mt-4 shadow-sm'>
                  See more
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className='container z-20 flex flex-row justify-end px-4 gap-6 absolute md:bottom-6 bottom-6 left-1/2 transform -translate-x-1/2'>
        <button
          id='prev'
          className='text-white hover:bg-red-500 px-4 py-2 rounded-full border border-gray-400 transition duration-500'
          onClick={handlePrev}
        >
          &lt;
        </button>
        <button
          id='next'
          className='text-white hover:bg-red-500 px-4 py-2 rounded-full border border-gray-400 transition duration-500'
          onClick={handleNext}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
