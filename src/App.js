import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';

import Form from './pages/Form';

// import Review from './Review';
function App() {
  return (
    <Routes>
      <Route exact path='/' element={<Home />} />

      <Route path='/Form' element={<Form />} />
    </Routes>
  );
}

export default App;
