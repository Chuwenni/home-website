import {BrowserRouter, Routes, Route} from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import Products from '../components/skeleton/Products'
import Menubar from "../layouts/Menubar";
import {AppContext} from '../Context/appContext'
import { useToast } from "../Context/ToastContext";
const Homepage = () => {

  const { showToast} = useToast();

  useEffect(() => {
    const fetchUser = async () =>{
      try{
        const response = await axios.get(`${import.meta.env.VITE_SERVER}/getUser`, {
          withCredentials: true, 
        })

        console.log(response)
      }catch(error){
        showToast(error.message, "error")
      }
    }

    fetchUser();
  }, [])

  return (    
      <>
        <AppContext>
          <Menubar/>
          <Routes>
            <Route path='/' element={<Products count={24}/>} />
          </Routes>
        </AppContext>
      </>
  )
}

export default Homepage