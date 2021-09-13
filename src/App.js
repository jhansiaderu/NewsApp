//import logo from './logo.svg';
import './App.css';

import React , {useState} from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
//import NewsItem from './components/NewsItem';
import LoadingBar from 'react-top-loading-bar'
 

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


const App =()=> {
 // a = 'Jhansi';
  const pageSize = 5;
  const  apiKey = process.env.REACT_APP_NEWS_API
  const [progress, setProgress] = useState(0)
 //pageSize=7;
 // apiKey = process.env.REACT_APP_NEWS_API
 
  
     
    return (
      <div>
        <Router>
         <NavBar>
         <LoadingBar
         height={3}
        color='#f11946'
        progress={ progress}
        
      />
         </NavBar>
         
         <Switch>
          <Route exact path="/"><News setProgress={ setProgress }  apiKey={  apiKey}  key="general"pageSize={ pageSize} country="in" category="general"></News></Route>
          <Route exact path="/business"><News setProgress={ setProgress }  apiKey={  apiKey}  key="business" pageSize={ pageSize} country="in" category="business"></News></Route>
          <Route exact path="/entertainment"><News setProgress={ setProgress }  apiKey={  apiKey}  key="entertainment" pageSize={ pageSize} country="in" category="entertainment"></News></Route>
          <Route exact path="/general"><News setProgress={ setProgress }  apiKey={  apiKey}  key="general" pageSize={ pageSize} country="in" category="general"></News></Route>
          <Route exact path="/health"><News setProgress={ setProgress }  apiKey={  apiKey}  key="health" pageSize={ pageSize} country="in" category="health"></News></Route>
          <Route exact path="/science"><News setProgress={ setProgress }  apiKey={  apiKey}  key="science" pageSize={ pageSize} country="in" category="science"></News></Route>
          <Route exact path="/sports"><News setProgress={ setProgress }  apiKey={  apiKey}  key="sports" pageSize={ pageSize} country="in" category="sports"></News></Route>
          <Route exact path="/technology"><News setProgress={ setProgress }  apiKey={  apiKey}  key="technology" pageSize={ pageSize} country="in" category="technology"></News></Route>
           
           
          
        </Switch>
        </Router>
      </div>
    )
  }

  export default App;
