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
              <img className="logo" src={ewblogo} alt="ewb-iet logo" />
              <span>IET CHAPTER</span>
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
                  Our Activities
                </a>

                <ul class='dropdown-menu' aria-labelledby='navbarDropdown'>
                 <li>
                    <Link class='dropdown-item' to="/hkbs">
                      Helen Keller Blind School
                    </Link>
                  </li>
                  
                  <li>
                    <Link class='dropdown-item' to="/plantation">
                      Plantation
                    </Link>
                  </li>

                  <li>
                    <Link class='dropdown-item' to="/nab">
                      National Association for the Blind
                    </Link>
                  </li>

                  <li>
                    <Link class='dropdown-item' to="/induction">
                      Induction and Recruitment Process
                    </Link>
                  </li>

                  {/* <li>
                    <Link class='dropdown-item' to="/resume">
                      Resume Building
                    </Link>
                  </li> */}

                  <li>
                    <Link class='dropdown-item' to="/collectioncamp">
                      Collection Camp
                    </Link>
                  </li>

                  <li>
                    <Link class='dropdown-item' to="/ssg">
                      Social Service Group
                    </Link>
                  </li>

                  <li>
                    <Link class='dropdown-item' to="/cg">
                      Career Guidance
                    </Link>
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
                <Link class='nav-link' aria-current='page' to='/Home'>
                  Home
                </Link>
              </li>

              <li class='nav-item'>
                <Link class='nav-link' aria-current='page' to='/about'>
                  About
                </Link>
              </li>

              <li class='nav-item'>
                <Link class='nav-link' aria-current='page' to='/project'>
                  Projects
                </Link>
              </li>
{/*}
              <li class='nav-item'>
                <Link class='nav-link' aria-current='page' to='/Team'>
                  Meet the Team
                </Link>
              </li>

                */}

              <li class='nav-item'>
                <Link class='nav-link' aria-current='page' to='/contact'>
                  Contact Us
                </Link>
              </li>

            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
