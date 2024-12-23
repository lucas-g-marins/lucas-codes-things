import "./Nav.scss";

function Nav() {
  return (
    <nav className="nav">
      <a href="/" className="nav__link">
        Home
      </a>
      <a
        href="#tally-open=nr2ZZ2&tally-layout=modal&tally-emoji-text=👋&tally-emoji-animation=wave"
        className="nav__link"
      >
        Get in touch
      </a>
    </nav>
  );
}

export default Nav;
