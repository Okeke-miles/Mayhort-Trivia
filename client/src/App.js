import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom"
import MainPage from "../src/component/MainPage/MainPage"
import HomePage from "../src/component/HomePage/HomePage"
import './App.scss';
import ScorePage from './component/ScorePage/ScorePage';


function App () {

  return (
    <div className="App">
    <BrowserRouter>
    <Switch>

      <Route exact path="/" component={HomePage}/>
      <Route path="/trivia" component={MainPage}/>
      <Route path="/result" component={ScorePage}/>
    
    </Switch>
    </BrowserRouter>
    </div>
  );
  }



export default App;
