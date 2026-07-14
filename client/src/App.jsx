import {BrowserRouter, Routes, Route} from "react-router-dom";
import Homepage from "./pages/Homepage";
import Skeleton from "./layouts/Skeleton";
function App() {

  return (   
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/skeleton" element={<Skeleton/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
