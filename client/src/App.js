import React from 'react';
import {
  BrowserRouter ,
  Routes,
  Route
} from "react-router-dom";
// import Home from './Components/Home/home';
import "./App.css";
import About from './Components/About/about';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<About />} />
        </Routes>
      </BrowserRouter>
      </div>
  );
}

export default App;