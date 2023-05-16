import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation';

import View from './components/View';
import { Route, Routes } from 'react-router-dom';

import Students1 from './components/Students1';


function App() {
  return (
    <div className="App">
     <Navigation/>
     {/* <View/>
     <Student/> */}
     <Routes>
      <Route path="/view" element={<View/>}/>
      <Route path="/student" element={<Students1 data={{sname:'',sgrade:''}}/>}/>
     
     </Routes>
    </div>
  );
}

export default App;
