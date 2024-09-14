import "./Navbar.css"

function Navbar() {
  return (
  <>
  <div className="navbar">
    <a href="/" className="navbar-menu">Home</a>
    <a href="/about" className="navbar-menu">About</a>
    <a href="/contact" className="navbar-menu">Contact</a>
  </div>
  </>
  )
}

export default Navbar