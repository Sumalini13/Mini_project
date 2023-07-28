import logo from './logo.svg';
import './App.css';
import LoginPage from './Components/login';
import Register from './Components/Register';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Header from './Components/Header';
import Orders from './Components/Orders';
function App() {
  return (
  
   <Router>
    <Routes>
      { <Route path="/" element={<LoginPage/>}/> }
      { <Route path="/for" element={<forgetpass/>}/> }
      { <Route path="/homepage" element={<Header/>}/> }
      <Route path="/Register" element={<Register/>}/>
      <Route path="/Login" element={<LoginPage/>}/> 
      <Route path="/orders" element={<Orders/>}/> 

    </Routes>
   </Router>
  );
}

export default App;
