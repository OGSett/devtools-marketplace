import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Favorite from './pages/Fav';


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/favorite' element={<Favorite />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
