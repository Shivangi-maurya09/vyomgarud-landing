function Navbar() {
  return (
    <header className="navbar">
      <div className="nav-inner container">
        <div className="logo">
          <span className="logo-mark">V</span>
          <span className="logo-text">VyomGarud</span>
        </div>

        <nav className="nav-links">
          <a href="#hero">Home</a>
          <a href="#about">About</a>
          <a href="#capabilities">Capabilities</a>
          <a href="#highlights">Highlights</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
