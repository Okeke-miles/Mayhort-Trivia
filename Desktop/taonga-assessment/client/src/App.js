import './App.scss';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../src/pages/Home/Home";
import Dashboard from "../src/pages/Dashboard/Dashboard"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/dashboard" component={Dashboard}/>
            </Switch>
          </header>
        </div>
    </BrowserRouter>
    </div>
  );
}

export default App;
