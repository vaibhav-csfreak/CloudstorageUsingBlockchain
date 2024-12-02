import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import './index.css';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    
  } from 'react-router-dom';
  import LoginForm from './components/Loginform';
  import HomePage from './components/HomePage';
  import Files from './components/Files';
ReactDOM.render(

  <Router>
    <Routes>
    <Route exact path='/' element={< HomePage />}></Route>
    <Route exact path='/login' element={< LoginForm />}></Route>
    <Route exact path='/homePage' element={< App />}></Route>
    
    </Routes>  
</Router>, 
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
