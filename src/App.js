import './App.css';

/** React Router */
import { Routes, Route } from 'react-router-dom';
/** Pages */
import Home from './pages/Home';
import AboutApp from './pages/AboutApp';
import AboutAuthor from './pages/AboutAuthor';
import NotFound from './pages/NotFound';

  function App (props) {
    return (
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<Home />} />
        <Route path='/about/aboutApp' element={<AboutApp />} />
        <Route path='/about/aboutAuthor' element={<AboutAuthor />} />
        <Route path='#' element={<NotFound />} />
      </Routes>
    )
}

export default App;