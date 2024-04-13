import './App.css';
import { BrowserRouter } from 'react-router-dom';

import Navbar from './components/Navbar'
import { ReactRoutes } from './ReactRoutes';
import Home from './components/Home';


function App() {
  return (
    <>
      <BrowserRouter>
        <ReactRoutes />
      </BrowserRouter>
    </>
  );
}

export default App;
