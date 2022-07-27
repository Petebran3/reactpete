
import Navbar from "./Navbar"
import Home from "./Components/pages/Home"
import Products from "./Components/pages/Products"
import Contact from "./Components/pages/Contact"
import {Route, Routes} from  "react-router-dom"
import { Footer } from "./Components/Reuse/Footer"


function App() {
  

  
  return (
<>
  
  <Navbar/>
  <div className="container">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      
      <Route path="/contact" element={<Contact />} />
      
    </Routes>
    
  <Footer/>
  
  </div>
 
</>
  )
}


export default App;
