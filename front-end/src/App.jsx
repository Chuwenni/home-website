import {BrowserRouter, Routes, Route} from "react-router-dom";
import menuButton from './components/menuButton/menuButton'
function App() {

  return (   
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<menuButton/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
