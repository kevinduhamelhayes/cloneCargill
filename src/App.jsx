import { useState } from "react"

import "./App.css"
import "./App.css"
import Navbar1 from "./components/navbar1.jsx"
import Navbar from "./components/navbar2.jsx"
import Footer from "./components/footer.jsx"
const App = () => {
  return (
    <>
      <div>
        <Navbar1 />
        <Navbar />
        <Footer />
        <h1>React App</h1>
      </div>
    </>
  )
}

export default App
