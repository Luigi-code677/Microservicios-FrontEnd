import './App.css'
import Login from './pages/Login'
import Register from './pages/Register';
import MailForPassword from './pages/MailForPassword';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      {" "}
      <Routes>
        {" "}
        <Route path="/" element={<Login />}/>
        <Route path="/register" element={<Register />}/>    
        <Route path="/restore-account" element={<MailForPassword />}/>   

      </Routes>{" "}
    </BrowserRouter>
  )
}

export default App
