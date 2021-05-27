import React from "react"
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"
import About from './Components/About';
import Home from './Components/Home';
import Form from './Components/Form';
import DatFetch from "./Components/DatFetch";

function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <ul className="navbar-nav mr-auto">
          <li>
            <Link to={"/"}> Home </Link>
          </li>
          <li>
            <Link to={"/form"}>Form</Link>
          </li>
          <button>
            <Link to={"/about"}>About</Link>
          </button>
          <button>
            <Link to={"/data"}>User Data</Link>
          </button>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/form" component={Form} />
        <Route path="/about" component={About} />
        <Route path="/data" component={DatFetch} />
      </Switch>
    </Router>
    //   <div className="App">
    //    <h1>React Router Studying</h1>
    //   </div>
  );
}

export default App;
