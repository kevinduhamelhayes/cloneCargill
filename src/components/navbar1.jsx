import "./navbar1.css"
export default function Navbar1() {
  return (
    <nav className="navbar1">
      <div className="navbar1-content">
        <a href="">
          <img
            src="https://www.cargill.com.br/image/1432094128551/cargill-logo.png"
            alt="imagen del logo de cargill "
          />
        </a>
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
      </div>
    </nav>
  )
}
