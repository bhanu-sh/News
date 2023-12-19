import {BrowserRouter, Route, Routes} from 'react-router-dom';

import './App.css';
import Home from './components/Home.jsx';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar.jsx';
import News from './components/News.jsx';
import NotFound from './components/NotFound.jsx';

function App() {
  return (
    <div>
      <Toaster position='top right' />
        <BrowserRouter>
            <Navbar />
            <Routes>
              <Route element = {<Home />} path="/" />
              <Route element = {<News /> } path="/news/:id" />
              <Route element = {<NotFound />} path="*" />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;