import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from "./Pages/Home"
import About from "./Pages/About"
import Setting from "./Pages/Setting"


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<Home />} ></Route>
          <Route path='/about' exact element={<About />} ></Route>
          <Route path='/setting' exact element={<Setting />} ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
