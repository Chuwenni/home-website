import {BrowserRouter, Routes, Route} from "react-router-dom";
import Homepage from "./pages/Homepage";
import Skeleton from "./layouts/Skeleton";
import Products from "./pages/Products";
function App() {

  return (   
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/skeleton" element={<Skeleton/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
