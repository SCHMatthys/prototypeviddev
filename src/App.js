import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import Films from "./components/pages/Films"
import Series from "./components/pages/Series"
import Nouveautes from "./components/pages/Nouveautes"
import Error from "./components/pages/Error"
import Login from './components/pages/Login';

const App = () => {
  return (
    <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/films" element={<Films/>}/>
            <Route path="/series" element={<Series/>}/>
            <Route path="/nouveautes" element={<Nouveautes/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="*" element={<Error/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  );
};

export default App;