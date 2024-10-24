import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Pages/Login/Login/Login';
import Signup from './Pages/Sign Up/Sign Up/Signup';
import TestPage from './Pages/TestPage/TestPage/TestPage'; 
import AddEmployee from './Pages/Add Employee/AddEmployee';
import InputInventory from './Pages/Inventory Management/InputInventory';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    {/* <Route index element={<TestPage/>} />
                    <Route path="/TestPage" element={<TestPage/>}/> */}
                     {/* { <Route index element={<Login/>} /> }
                    <Route path="/Login" element={<Login/>}/>
                    <Route path="/Signup" element={<Signup/>}/>  */}
                    {/* <Route index element={<AddEmployee/>}/> */}
                    <Route index element={<InputInventory/>} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
