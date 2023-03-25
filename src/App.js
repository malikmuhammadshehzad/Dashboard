 
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Sidenav from './component/Sidenav';
 
import About from './component/About';
import Setting from './component/Setting';
import Home from './component/Home';
 

function App() {
  return (
    <>
 <BrowserRouter>
 <Routes>
  <Route path='/' element={<Sidenav/>}>
  <Route  index element={<Home/>}/> 
  <Route path='/about' element={<About/>}/> 
  <Route path='/setting' element={<Setting/>}/> 
  </Route>
 </Routes>
 </BrowserRouter>

   </>
  );
}

export default App;
