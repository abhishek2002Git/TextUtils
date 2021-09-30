import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      // ^ this is how navbar's color is changing
    >
      <div className={`container-fluid text-${props.mode==='light'?'dark':'light'}`}>
        <Link  className="navbar-brand" to="/">
          {props.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link style={{color: props.mode==='dark'?'white':'black', textDecoration: 'none'}} className="nav-a active" aria-current="page" to="/">
                {props.home}
              </Link>
            </li>
            <li className="nav-item mx-3">
              <Link style={{color: props.mode==='dark'?'white':'black', textDecoration: 'none'}} className="nav-a" to="/about">
                {props.aboutText}
              </Link>
            </li>
          </ul>
          <div className={`form-check form-switch mx-5 text-${props.mode==='light'?'dark':'light'}`}> 
                {/* // to change the color of text */}
            <input
              className="form-check-input"
              type="checkbox"
              id="flexSwitchCheckDefault"
              onClick={props.toggleMode}
            />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
              Dark Mode
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired,
  home: PropTypes.string.isRequired,
};
// defining the type of props

Navbar.defaultProps = {
  title: "Set title here",
  aboutText: "Set About Text here",
  home: "Home",
};
// these are default values of props which will be display if they are not defined
