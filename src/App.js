import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes, } from "react-router-dom"
import { createBrowserHistory } from "history"
import './App.css';
// import Home from './page/Home/Home';
import Header from './Component/Header/Header.js';
import { HomeTemplate } from './Template/HomeTemplate';
import Home from './page/Home/Home';
import Contact from './page/Contact/Contact';

export const history = createBrowserHistory();
function App() {
  return (
    <Router history={history} >
      <Routes>
        <Route exact path="/" element={<Home />} >
          <Route exact path="/contact" element={<Contact />} />
        </Route>
        {/* </Routes> */}
      </Routes>
      {/* <Header /> */}
      {/* <Home /> */}
    </Router >
  );
}

export default App;
