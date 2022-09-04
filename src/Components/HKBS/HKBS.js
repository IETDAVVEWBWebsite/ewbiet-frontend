import React from "react";
import Heading from "../Heading";
// import "../HKBS/HKBS.css";
import "../style.css";
import Image from "../Image.jsx";
import hkbs1 from "./Image/hkbs1.jpeg";
import hkbs2 from "./Image/hkbs2.jpeg";
import hkbs3 from "./Image/hkbs3.jpeg";
import hkbs4 from "./Image/hkbs4.jpg";
import hkbs5 from "./Image/hkbs5.jpeg";


function HKBS() {
  return (
    <div className="maindiv">
      <Heading content="Hellen Keller Blind School" />

      <div class="container">
        <div className="row featurette d-flex justify-content-center align-items-center shadow-lg p-3 mb-5 bg-body rounded">
          <div class="lh-base content">
            <h2 class="featurette-heading">INTRODUCTION</h2>
            <p class="lead">With a vision to educate and empower the blind students, Hellen Keller Blind School Project looks forward to provide the disabled children the facilities enjoyed by normal children.</p>
          <p class="lead">Started in the year 2010, this is a volunteer based and zero funded project. Currently, we have a team of <b>15+ EWB members</b> dedicated for helping out blind students under this project.
            This progam was initiated in collaboration with an eye specialist for targeting the low vision kids in the Helen Keller Blind School located in Nalakha.</p>

          </div>
          <div className="display">
            <Image img={hkbs1} />
            <Image img={hkbs2} />
            <Image img={hkbs3} />
          </div>
        </div>
      </div>

    

      <div class="container">
        <div class="row featurette d-flex justify-content-center align-items-center shadow-lg p-3 mb-5 bg-body rounded">
          <div class="lh-base content">
            <h2 class="featurette-heading">OBJECTIVE</h2>
            <p class="lead">
              <li>Teaching English</li>
              <li>Audio recordings of books which are not available in braille.</li>
              <li>Organising Eye check up camp, in collaboration with an eye specialist for targeting the low vision kids</li>
              <li>Conducting carrer guidance and job opportunities sessions for the students</li>
              <li>Assisting stundents with writers for the exam</li>
            </p>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="row featurette d-flex justify-content-center align-items-center shadow-lg p-3 mb-5 bg-body rounded">
          <div class="lh-base content">
            <h2 class="featurette-heading">WORK UPDATES</h2>
            <p class="lead">For teaching English, we have created three sub-groups among EWB members and syllabus has been divided among them. Group
              members of respective groups go to school on daily basis to teach the students for about 1-2 hours. We also regularly visit the blind
              school to teach them basic computer technologies.</p>
            <p class="lead">Currently, due to covid situation, we could not visit to school since March. For the next few months, we plan to conduct
              teaching activity using digital sources.</p>
            <p class="lead">We have also recorded books for the students, have taken session on career guidance and job opportunities available for
              the students and have provided writers for the exam.</p>

          </div>
          <div class="display">
            <Image img={hkbs4} />
            <Image img={hkbs5} />
          </div>
        </div>
      </div>



    </div>
  );
}

export default HKBS;
