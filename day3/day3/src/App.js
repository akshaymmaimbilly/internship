import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation';
import Student from './components/Student';
import View from './components/View';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
     <Navigation/>
     {/* <View/>
     <Student/> */}
     <Routes>
      <Route path="/view" element={<View/>}/>
      <Route path="/student" element={<Student/>}/>
     
     </Routes>
    </div>
  );
}

export default App;
