import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './component/Layout/Navbar';
import Show from './component/Pages/Show';
import Home from './component/Pages/Home';
import Register from './component/Pages/Register';
import Upadte from './component/Pages/Upadte.js';
import Delete from './component/Pages/Delete.js';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path='/Home' element={<Home/>}></Route>
      <Route path='/Register' element={<Register/>}></Route>
      <Route path='/Show' element={<Show/>}></Route>
      <Route path='/Upadte/:studentID' element={<Upadte/>}></Route>
      <Route path='/Delete/:student:ID' element={<Delete/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
