//import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
//import NewsItem from './components/NewsItem';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


export default class App extends Component {
 // a = 'Jhansi';
  render() {
    const pageSize=7;
    return (
      <div>
        <Router>
         <NavBar></NavBar>
         
         <Switch>
          <Route exact path="/"><News key="general"pageSize={this.pageSize} country="in" category="general"></News></Route>
          <Route exact path="/Business"><News key="business" pageSize={this.pageSize} country="in" category="business"></News></Route>
          <Route exact path="/entertainment"><News key="entertainment" pageSize={this.pageSize} country="in" category="entertainment"></News></Route>
          <Route exact path="/general"><News key="general" pageSize={this.pageSize} country="in" category="general"></News></Route>
          <Route exact path="/health"><News key="health" pageSize={this.pageSize} country="in" category="health"></News></Route>
          <Route exact path="/science"><News key="science" pageSize={this.pageSize} country="in" category="science"></News></Route>
          <Route exact path="/sports"><News key="sports" pageSize={this.pageSize} country="in" category="sports"></News></Route>
          <Route exact path="/technology"><News key="technology" pageSize={this.pageSize} country="in" category="technology"></News></Route>
           
           
          
        </Switch>
        </Router>
      </div>
    )
  }
}
