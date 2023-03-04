//import logo from './logo.svg';
import './Global.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Home/index'
import Data from './Data/index';
import User from './User/index'
import Delete from './DELETE';
import PUT from './PUT';


function App() {
  return (
    <>
      <head>
        <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.3/dist/leaflet.css"
          integrity="sha256-kLaT2GOSpHechhsozzB+flnD+zUyjE2LlfWPgU04xyI="
          crossorigin="" />
      </head>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} > </Route>

          <Route exact path="/data" element={<Data />} > </Route>

          <Route exact path="/user" element={<User />} > </Route>

          <Route exact path="/delete" element={<Delete />} > </Route>

          <Route exact path="/put" element={<PUT />} > </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
