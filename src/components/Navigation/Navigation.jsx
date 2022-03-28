/* eslint-disable react/jsx-no-bind */
import { NavLink } from "react-router-dom";
import { Twirl as Hamburger } from "hamburger-react";
import { useState } from "react";
import "./Navigation.scss";

function Navigation() {
  const [isOpen, setOpen] = useState(false);
  function toggleX() {
    const nav = document.querySelector("nav");
    nav.style.transform = "translateY(-100%)";
    setOpen(false);
  }
  return (
    <>
      <Hamburger
        toggled={isOpen}
        toggle={setOpen}
        distance="sm"
        color="#2F3B54"
        rounded
        onToggle={(toggled) => {
          const nav = document.querySelector("nav");

          if (toggled) {
            nav.style.transform = "translateY(0)";
          } else {
            nav.style.transform = "translateY(-100%)";
          }
        }}
      />

      <nav>
        <NavLink onClick={toggleX} path="/" to="/">
          Home
        </NavLink>
        <NavLink onClick={toggleX} path="/profile" to="/profile">
          Profile
        </NavLink>
        <NavLink onClick={toggleX} path="projects" to="/projects">
          Projects
        </NavLink>
        {/* <NavLink onClick={toggleX} path="articles" to="/articles">
          Articles
        </NavLink> */}
        <a href="mailto:banev_dimitar@mail.com">Contact</a>
        <a
          href="https://devastion.net/downloads/resume-en.pdf"
          target="_blank"
          rel="noreferrer"
        >
          Resume / CV
        </a>
      </nav>
    </>
  );
}

export default Navigation;
