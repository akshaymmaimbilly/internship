import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Add from './components/Add';


import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      
      <Navbar/>
      {/* <Add/> */}
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/add" element={<Add/>}/>
     </Routes>
    </div>
  );
}

export default App;
