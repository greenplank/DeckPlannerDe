import React from "react";
import { Link } from "react-router-dom";
import lang_var from "../../multilanguage";

class Navbar extends React.Component {
  render() {
    return (
      <React.Fragment>
        <nav className="navbar main-navbar px-5 navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="/">
            <img
              src="./images/Bygfix-Logo.png"
              alt="Logo"
              width="170"
              height="100%"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#handel_navbar"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="handel_navbar">
            <ul className="navbar-nav ml-auto">
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  {this.props.selected_language}
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  {this.props.all_languages.map((lang) => (
                    <a class="dropdown-item" onClick={()=>this.props.set_language(lang.name)} href="#">
                      {lang.name}
                    </a>
                  ))}
                </div>
              </li>
              <li className="nav-item px-0 px-sm-5">
                <Link to="/" className="nav-link">
                  { lang_var.home[this.props.selected_language]}
                </Link>
              </li>
              <li className="nav-item px-0 px-sm-5">
                <Link to="/help" className="nav-link">
                { lang_var.help[this.props.selected_language]}
                </Link>
              </li>
              <li className="nav-item px-0 px-sm-5">
                <Link to="/information" className="nav-link">
                { lang_var.information[this.props.selected_language]}
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}
export default Navbar;
