import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RecipesList from '../containers/RecipesList';
import RecipeItem from './RecipeItem';
import '../assets/styles/index.css';

function App() {
  return (
    <BrowserRouter>
      <div className="app panel-bg">
        <Routes>
          <Route exact path="/" element={<RecipesList />} />
          <Route path="/recipe/:id" element={<RecipeItem />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
