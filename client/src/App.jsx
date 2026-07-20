import {BrowserRouter, Routes, Route} from "react-router-dom";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import ForgotPassword from './pages/Password';
import Register from "./pages/Register";
function App() {

  return (   
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/password' element={<ForgotPassword/>}/>
        <Route path="/*" element={<Homepage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
