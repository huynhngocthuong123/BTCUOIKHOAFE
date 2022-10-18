import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes, } from "react-router-dom"
import { createBrowserHistory } from "history"
import './App.css';
// import Home from './page/Home/Home';
import Header from './Component/Header/Header.js';
import { HomeTemplate } from './Template/HomeTemplate';
import Home from './page/Home/Home';
import Course from './page/Course/Course';
import Carousel from './page/Home/Component/Carousel/Carousel';

export const history = createBrowserHistory();
function App() {
  return (
    <Router history={history} >
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/course" element={<Course />} />
      </Routes>
    </Router >
  );
}

export default App;
