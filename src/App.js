import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Pages/Login/Login/Login';
import Signup from './Pages/Sign Up/Sign Up/Signup';
import TestPage from './Pages/TestPage/TestPage/TestPage';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    {/*<Route index element={<TestPage/>} />
                    <Route path="/TestPage" element={<TestPage/>*/}
                    {<Route index element={<Login/>} />}
                    {<Route path="/Login" element={<Login/>}/>}
                    {<Route path="/Signup" element={<Signup/>}/>}
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
