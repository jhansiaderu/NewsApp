//import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
//import NewsItem from './components/NewsItem';

export default class App extends Component {
 // a = 'Jhansi';
  render() {
    return (
      <div>
         <NavBar></NavBar>
         <News></News>
         
      </div>
    )
  }
}
