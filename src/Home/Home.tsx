import { useState } from "react";
import "./Home.scss";
import Nav from "../components/Nav/Nav";
import Hero from "../components/Hero/Hero";
import menuIcon from "../assets/menu.svg";
import closeIcon from "../assets/close.svg";

function Home() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }

  return (
    <>
      <Nav />
      <main className={menuOpen ? "open" : ""}>
        <button
          className="menu-toggle menu-toggle__button"
          onClick={toggleMenu}
        >
          <img src={menuOpen ? closeIcon : menuIcon} />
          <p className="menu-toggle__text">{menuOpen ? "Close" : "Menu"}</p>
        </button>
        <Hero />
      </main>
    </>
  );
}

export default Home;
