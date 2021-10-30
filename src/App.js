import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Footer from './Components/Footer/index';
import Navbar from './Components/Navbar/index';
import Home from './Pages/Home';
import City from './Pages/CityInfo';
import ViewportProvider from "./viewport";

function App() {
  return (
    <ViewportProvider>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route exact path="/">
            <div>
              <City />
            </div>
          </Route>
        </Switch>
        <Footer />
      </Router>
    </ViewportProvider>
  );
}

export default App;

