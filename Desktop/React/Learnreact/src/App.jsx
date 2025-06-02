import { useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Homepage from './pages/Homepage';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Homepage/>}></Route>
          <Route path='/page1' element={<Page1/>}></Route>
          <Route path='/page2' element={<Page2/>}></Route>
          <Route path='/page3' element={<Page3/>}></Route>
        </Routes>
      </Router>
    </>
  );

}
export default App
