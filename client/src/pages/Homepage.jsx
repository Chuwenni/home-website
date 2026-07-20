import {BrowserRouter, Routes, Route} from "react-router-dom";
import Products from '../components/skeleton/Products'
import Menubar from "../layouts/Menubar";
const Homepage = () => {
  return (    
      <>
        <Menubar/>
        <Routes>
          <Route path='/' element={<Products count={24}/>} />
        </Routes>
      </>
  )
}

export default Homepage