import "./navbar1.css"
export default function Navbar1() {
  return (
    <nav className="navbar1">
      <div>
        <a href="">
          <img
            src="https://www.cargill.com.br/image/1432094128551/cargill-logo.png"
            alt="imagen del logo de cargill "
          />
        </a>
      </div>
      <ul>
        <li className="navbar1-li">languages</li>
        <li className="navbar1-li">login</li>
        <form className="form" action="search">
          <input type="text" name="search" id="search" />
          <button className="submit" type="submit">
            search
          </button>
        </form>
      </ul>
    </nav>
  )
}
