import { useEffect } from "react"
import "./navbar2.css"
import { useState } from "react"

const Navbar = () => {
  const [scroll, setScroll] = useState(false)
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 90 ? true : false)
    })
  })
  return (
    <nav className={`navbar2 ${scroll && "navbar-2-scrolled"}`}>
      <div className="navbar2-content">
        <ul className="navbar2-ul">
          <li className="navbar2-li">Home</li>
          <li className="navbar2-li">About</li>
          <li className="navbar2-li">sustentability</li>
          <li className="navbar2-li">Products</li>
          <li className="navbar2-li">Services</li>
          <li className="navbar2-li">Blog</li>
          <li className="navbar2-li">Contact</li>
        </ul>
      </div>
    </nav>
  )
}
export default Navbar
