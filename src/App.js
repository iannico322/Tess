import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route,Navigate } from "react-router-dom";
import LoginPage from './screens/authentication/login/login';
import User from './screens/user/dashboard/user';
import Admin from './screens/admin/dashboard/admin';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate replace to="/admin" />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/home" element={<User/>} />



          <Route path="/admin" element={<Admin/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
