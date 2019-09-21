import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import { Route } from 'react-router-dom';
import SubNavBar from './Components/SubNavBar';

function App() {
  return (
    <div className="App">
      <Navbar />

      <Route path="/" exact />
      <Route
        path="/mac/"
        render={props => (
          <SubNavBar
            {...props}
            details={[
              'Macbook Air',
              'Macbook Pro',
              'iMac',
              'iMac Pro',
              'Mac Pro',
              'Mac mini',
              'Compare',
              'Pro Display XDR',
              'Mojave'
            ]}
          />
        )}
      />
      <Route
        path="/ipad/"
        render={props => (
          <SubNavBar
            {...props}
            details={[
              'iPad Pro',
              'iPad Air',
              'iPad',
              'iPad Mini',
              'Compare',
              'Apple Pencil',
              'Smart Keyboard',
              'iOS 12'
            ]}
          />
        )}
      />
      <Route
        path="/iphone/"
        render={props => (
          <SubNavBar
            {...props}
            details={[
              'iPhone Xs',
              'iPhone XR',
              'iPhone 8',
              'iPhone 7',
              'iOS 12',
              'AirPods',
              'Compare'
            ]}
          />
        )}
      />
      <Route
        path="/music/"
        render={props => (
          <SubNavBar
            {...props}
            details={['Apple Music', 'iTunes', 'AirPods', 'iPod Touch']}
          />
        )}
      />
    </div>
  );
}

export default App;
