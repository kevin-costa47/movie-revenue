import React from "react";
import { BrowserRouter as Router, Route, Switch,Redirect} from "react-router-dom";
import MovieProvider from "./context/movie/MovieProvider";
import Home from "./components/Home.js";
import NavBar from "./components/navbar/NavBar";

import './App.css';

const App = () => {
  return (
    <MovieProvider>
      <Router>
        <div className="App">
          <div className="darkSpace"/>
          <div className="home_layout">
            <NavBar/>
    
          <Switch>
            <Route  path="/home" component={Home}></Route>
            <Route exact path="/">
                <Redirect to="/home" />
            </Route>
          </Switch>
          </div>
        </div>
      </Router>
    </MovieProvider>
  );
};

export default App;
