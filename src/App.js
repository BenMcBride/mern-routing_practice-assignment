import './App.css';
import React from 'react'
import {Routes, Route, Link} from 'react-router-dom'
import { useParams } from 'react-router'
import Home from './components/Home'
import Input from './components/Input'


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:input" element={<Input />} />
        <Route path="/:input/:color/:color2" element={<Input />} />
      </Routes>
    </div>
  );
}

export default App;
