import NavBar from "./components/Navbar/Navbar"
import AppRouters from "./routes/AppRouters"
import Footer from "./components/Footer/Footer"
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'


const App = () => {
  return (
    <>
    <ToastContainer/> {/* Incorporación de ventana de msj (toast) */}
    <Router>
      <NavBar/>
        <AppRouters/>
      <Footer/>
    </Router>
    </>
  )
}

export default App