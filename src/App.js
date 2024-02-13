import logo from './logo.svg';
import './App.css';
import { Home } from "./components/pages/Home";
import { Login } from './components/pages/Login';
import { LoginFailed } from './components/pages/LoginFailed';
import { Register } from './components/pages/Register';
import { NotFound } from './components/pages/NotFound';
import { Routes, Route} from "react-router-dom";
import { LoginUserProvider } from './components/elements/providers/LoginUserProvider';
import {Footer} from "./components/templates/Footer"

function App() {
  return (
    <LoginUserProvider>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home/>}/> 
          <Route path="/login" element={<Login/>}/>
          <Route path="/loginfailed" element={<LoginFailed/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/notfound" element={<NotFound/>}/>
        </Routes>
      </div>
      <Footer/>
    </LoginUserProvider>
  );
}

export default App;
