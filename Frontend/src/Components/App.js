import '../App.css';
import Navbar from './Navbar';
import{BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from './Homepage';
import About from './About';
import Menu from './Menu';
import Contact from './Contact';
import Cart from'./Cart';
import {useState} from 'react';

function App() {
  const [items,setItems] = useState([]);
  return (
    <div className="App">
      <Router>
        <Navbar items={items}/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/About" element={<About/>}/>
            <Route path="/Menu" element={<Menu items={items} setItems={setItems}/>}/>
            <Route path="/Contact" element={<Contact/>}/>
            <Route path="/Cart" element={<Cart items={items}/>}/>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
