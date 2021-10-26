import React from "react";
import { Link } from "react-router-dom";
import "../Navbar/Navbar.css";

function Navbar() {

  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark navbar-custom">
        <div class="container-fluid">
          <Link class="navbar-brand" to="/">
            EWB IET DAVV CHAPTER
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link" aria-current="page" to="/about">
                  About
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/hkbs">
                  HKBS
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/nab">
                  NAB
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/ssg">
                  SSG
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/cg">
                  Career Guidance
                </Link>
              </li>
              

              {/* <li class='nav-item dropdown'>
                <a
                  class='nav-link dropdown-toggle'
                  href='#'
                  id='navbarDropdown'
                  role='button'
                  data-bs-toggle='dropdown'
                  aria-expanded='false'
                >
                  Dropdown
                </a>
                <ul class='dropdown-menu' aria-labelledby='navbarDropdown'>
                  <li>
                    <a class='dropdown-item' href='#'>
                      Action
                    </a>
                  </li>
                  <li>
                    <a class='dropdown-item' href='#'>
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr class='dropdown-divider'></hr>
                  </li>
                  <li>
                    <a class='dropdown-item' href='#'>
                      Something else here
                    </a>
                  </li>
                </ul>
              </li> */}
              {/* <li class='nav-item'>
                <a class='nav-link disabled'>Disabled</a>
              </li> */}
            </ul>
            <form class="d-flex">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-outline-success btn-sm" type="submit">
                <span class="material-icons">search</span>
              </button>
            </form>
            {/* <ul> */}
            <Link to={!user && "/signup"}>
              <button
                onClick={handleAuthentication}
                id="signup"
                class="btn btn-outline-danger "
              >
                {user ? (
                  <div>
                    Sign Out <span class="st material-icons">logout</span>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                  </div>
                ) : (
                  <div>
                    Sign Up <span class="st material-icons ">login</span>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                  </div>
                )}
              </button>
            </Link>
            {/* </ul> */}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
