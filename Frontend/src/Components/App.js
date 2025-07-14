import '../App.css';
import Navbar from './Navbar';
import{BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from './Homepage';
import About from './About';
import Menu from './Menu';
import Contact from './Contact';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/About" element={<About/>}/>
            <Route path="/Menu" element={<Menu/>}/>
            <Route path="/Contact" element={<Contact/>}/>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
