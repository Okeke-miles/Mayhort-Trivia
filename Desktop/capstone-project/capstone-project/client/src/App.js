import logo from './logo.svg';
import ReactPlayer from 'react-player';
import './App.css';
import VideoPlayer from './components/VideoPlayer/VideoPlayer';
import HomePage from "./components/HomePage/HomePage"
import Header from "./components/Header/Header"
import { BrowserRouter, Route, Switch, Link } from "react-router-dom"

function App() {
  
  return ( 
    <BrowserRouter>
    <Header/>
    <div className="App">
      <header className="App-header">
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route path="/videos" component={VideoPlayer}/>
        {/* <h1>WiiWatch</h1> */}
        </Switch>
      </header>
    </div>
    </BrowserRouter>
  );
}

export default App;
