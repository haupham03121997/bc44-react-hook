import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">
            CyberSoft
          </a>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active mr-4">
                <NavLink to={"/"}>Home</NavLink>
              </li>
              <li className="nav-item mr-4 ">
                <NavLink to={"/about"}>About</NavLink>{" "}
              </li>
              <li className="nav-item  mr-4">
                <NavLink to={"/contact"}>Contact</NavLink>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className="btn btn-outline-success my-2 my-sm-0"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </nav>
      </div>
    </div>
  );
}
