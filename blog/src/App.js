import React from 'react';
import Header from './components/Header'
import Aside from './components/Aside'
import Blog from './components/Blog'
import About from './components/About'
import data from './data/data.json'
import {Route} from 'react-router-dom'
import './App.css';

function App() {
  return (
    <>
      <Header />
      <main>
        <Aside />
        <div className='content-container'>
          <Route path='/' exact component={Blog} />
          <Route path='/about' component={About} />
        </div>
      </main>
    </>
  );
}

export default App;
