import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import MovieDescription from './Pages/MovieDescription';
import PageNotFound from './Pages/PageNotFound';
const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/movie/:imdbID' element={<MovieDescription />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
