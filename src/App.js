import './App.css';
import { Auth } from './Components/Auth';
import Login from './Pages/Login/Login/Login';
import Signup from './Pages/Sign Up/Sign Up/Signup';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route index element={<Login/>} />
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Signup" element={<Signup/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
