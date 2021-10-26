import React from "react";
import { Link } from "react-router-dom";
import "../Navbar/Navbar.css";
import ewblogo from "../../Images/ewb logo.png"

function Navbar() {
  return (
    <div>
      <nav class='navbar navbar-expand-lg navbar-dark navbar-custom'>
        <div class='container-fluid'>
          <Link class='navbar-brand' to='/'>
            <div>
                <img src={ewblogo} alt="ewb-iet logo"/>
                <span>IET DAVV CHAPTER</span>
            </div>
            
          </Link>
          <button
            class='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span class='navbar-toggler-icon'></span>
          </button>
          <div class='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul class='navbar-nav me-auto mb-2 mb-lg-0'>
            <li class='nav-item dropdown'>
                <a
                  class='nav-link dropdown-toggle'
                  href='#'
                  id='navbarDropdown'
                  role='button'
                  data-bs-toggle='dropdown'
                  aria-expanded='false'
                >
                  Projects
                </a>
                <ul class='dropdown-menu' aria-labelledby='navbarDropdown'>
                  <li>
                    <a class='dropdown-item' href='#'>
                      Helen Keller Blind School
                    </a>
                  </li>
                  <li>
                    <a class='dropdown-item' href='#'>
                      National Association for the Blind
                    </a>
                  </li>
                  <li>
                    <a class='dropdown-item' href='#'>
                      Social Service Group
                    </a>
                  </li>
                  <li>
                    <a class='dropdown-item' href='#'>
                      Career Guidance
                    </a>
                  </li>
                  {/* <li>
                    <hr class='dropdown-divider'></hr>
                  </li>
                  <li>
                    <a class='dropdown-item' href='#'>
                      Something else here
                    </a>
                  </li> */}
                </ul>
              </li>
              <li class='nav-item'>
                <Link class='nav-link' aria-current='page' to='/about'>
                  About
                </Link>
              </li>
              <li class='nav-item'>
                <Link class='nav-link' aria-current='page' to='/about'>
                  Contact
                </Link>
              </li>

              
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
