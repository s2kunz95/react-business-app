import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
// Component
import TopMenu from './Components/TopMenu';
import Home from './Pages/Home';
import Products from './Pages/Products';

//Contexts
import { CartProvider } from './Contexts/Cart';

import './App.css';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="container">
          <TopMenu />

          <Switch>
            <Route path="/products">
              <Products />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
