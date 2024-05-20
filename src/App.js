import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './Pages/Main'
import Home from './Pages/Home'
import Matches from './Pages/Matches';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path= "/" element={<Home/>}/>
        <Route path="/Main" element={<Main/>}/>
        <Route path="/Matches" element={<Matches/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
