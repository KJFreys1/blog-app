import React from 'react';
import Header from './components/Header'
import Aside from './components/Aside'
import About from './components/About'
import Post from './components/Post'
import data from './data/data.json'
import {Route, Redirect} from 'react-router-dom'
import './App.css';

function App() {
  return (
    <>
      <Header />
      <main>
        <Aside data={data}/>
        <div className='content-container'>
          <Route path='/' exact>
            <Redirect to='blog/Introduction' />
          </Route>
          <Route path='/about' component={About} />
          <Route path='/blog/:title' render={props => <Post {...props} data={data} /> } />
        </div>
      </main>
    </>
  );
}

export default App;
