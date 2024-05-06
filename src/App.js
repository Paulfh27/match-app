import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Profile from './Pages/Profile.js';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path= '/' element={<Home/>}/>
        <Route path='/Profile' elemet={<Profile/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
