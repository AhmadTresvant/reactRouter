import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Blue from './components/Blue.jsx';
import Red from'./components/Red.jsx';
import Home from './components/Home.jsx';

function App() {
  return (
    <>
      <div id="container">
        <h1></h1>
        <div id="navbar">
          <Link to={'./blue'}>blue</Link>
          <Link to={'./red'}>red</Link>
          <Link to={'/'}>Home</Link>
        </div>
        <div id="main-section">
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/blue" element={<Blue/>} className = 'blue'/>
            <Route path= "/red" element={<Red/>} className = 'red'/>
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
