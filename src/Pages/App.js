//import logo from './logo.svg';
import './Global.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Home/index'
import Login from './Login/index'
import User from './User/index'


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} > </Route>

        <Route exact path="/login" element={<Login />} > </Route>

        <Route exact path="/user" element={<User />} > </Route>
      </Routes>
    </Router>
  );
}

export default App;
