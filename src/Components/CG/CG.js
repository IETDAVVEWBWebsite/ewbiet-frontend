import React from "react";
import Image from "../Image";
import Heading from "../Heading";
import "../style.css";
import cg1 from "./Image/cg1.jpeg";
import cg2 from "./Image/cg2.jpeg";
import cg3 from "./Image/cg3.jpeg";
import cg4 from "./Image/cg4.jpeg";
import cg5 from "./Image/cg5.jpeg";
import cg6 from "./Image/cg6.jpeg";


function CG() {
  return (
    <div className="maindiv">
      <Heading content="Career Guidance" />

      <div class="container">
        <div class="row featurette d-flex justify-content-center align-items-center shadow-lg p-3 mb-5 bg-body rounded">
          <div class="lh-base content">
            <h2 class="featurette-heading">Contribution Till Now</h2>
            <p class="lead">
              <li>WE HAVE INTRODUCED  VARIOUS CAREER OPPORTUNITIES</li>
              <li>INTRODUCTION TO GOVERNMENT SCHEMES AND RESERVATION</li>
              <li> LISTING OF NGO'S that are working  specifically for blind people </li>
              <li>EXPLORING THE OPPORTUNITY IN SPORTS FOR BLIND PEOPLE (PARALYMPICS )</li>
              <li>PROVIDING THE ABOVE INFORMATION IN  BILINGUAL FORM AND IN AUDIBLE FORM</li>
              <li>INTRODUCING TO THE SUCCESSFUL BLIND PEOPLE THROUGH THEIR BIOGRAPHY AUDIOS </li>
            </p>

          </div>
          <div class="display">
            <Image img={cg2} />
            <Image img={cg3} />
            <Image img={cg4} />
          </div>
        </div>
      </div>

      <div class="container">
        <div class="row featurette d-flex justify-content-center align-items-center shadow-lg p-3 mb-5 bg-body rounded">
          <div class="lh-base content">
            <h2 class="featurette-heading">PLANNING AHEAD</h2>
            <p class="lead">
              <li>ESTABLISHING CONTACT  TO HRs AND MANAGERS  WHO HIRES BLIND PEOPLE</li>
              <li>HOLDING VIRTUAL OR  PHYSICAL SUMMIT WHICH GIVES OPPORTUNITY TO BLIND STUDENTS TO MEET SUCCESSFUL BLIND  PERSONALITIES</li>
              <li>GATHERING INFORMATION ABOUT BLIND SCHOLARSHIPS</li>
              <li>CREATING A FUND TO SUPPORT</li>
            </p>
          </div>
          <div class="display">
            <Image img={cg5} />
            <Image img={cg6} />
            <Image img={cg1} />
          </div>
        </div>
      </div>

    </div>
  );
}

export default CG;

