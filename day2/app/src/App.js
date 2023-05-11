import logo from './logo.svg';
import './App.css';
import Basics from './components/Basics';
import { StateBasics } from './components/StateBasics';
import Exp from './components/Exp';

import Navigation from './components/Navigation';
import { TableArray } from './components/TableArray';
import { Route, Routes } from 'react-router-dom';
import ViewData from './components/ViewData';

function App() {
  return (
    <div className="App">
      {/* <Basics/> */}
     {/* <StateBasics/> */}
     {/* <Exp/> */}
     {/* <TableArray/> */}
     <Navigation/>
     <Routes>
      <Route path="/" element={<StateBasics/>}/>
      <Route path="/table" element={<TableArray/>}/>
      <Route path="/axios" element={<ViewData/>}/>
     </Routes>
     
    </div>
  );
}

export default App;
