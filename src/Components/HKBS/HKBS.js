import React from "react";
import "../HKBS/HKBS.css";
import hkbs1 from "./Image/hkbs1.jpeg";
import hkbs2 from "./Image/hkbs2.jpeg";
import hkbs3 from "./Image/hkbs3.jpeg";
import hkbs4 from "./Image/hkbs4.jpg";

function HKBS() {
  return (
    <div className="maindiv">
    <div className="mainheadinghkbs font-link"><b>Hellen Keller Blind School</b></div>


    <div class="container hkbsdiv1">
      <div class="row featurette d-flex justify-content-center align-items-center shadow-lg p-3 mb-5 bg-body rounded block">
        <div class="col-md-7 order-md-1 lh-base content">
          <h2 class="featurette-heading">INTRODUCTION</h2>
          <p class="lead">With a vision to educate and empower the blind students, Hellen Keller Blind School Project looks forward to provide the disabled children the facilities enjoyed by normal children.</p>
          <p class="lead">Started in the year 2010, this is a volunteer based and zero funded project. Currently, we have a team of <b>15+ EWB members</b> dedicated for helping out blind students under this project.
            This progam was initiated in collaboration with an eye specialist for targeting the low vision kids in the Helen Keller Blind School located in Nalakha.</p>
        </div>
        <div class="col-md-5 order-md-2 img">
          <img src={hkbs1} alt="hkbs1" className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto hkbsimage" width="400" height="400" /*style={{border:"5px solid grey"}}*//>
        </div>
      </div>
      </div>

      <div class="container hkbsdiv2">
      <div class="row featurette d-flex justify-content-center align-items-center shadow-lg p-3 mb-5 bg-body rounded">
        <div class="col-md-7 order-md-2 lh-base content">
          <h2 class="featurette-heading">OBJECTIVE</h2>
          <p class="lead">
            <li>Teaching English</li>
            <li>Audio recordings of books which are not available in braille.</li>
            <li>Organising Eye check up camp, in collaboration with an eye specialist for targeting the low vision kids</li>
            <li>Conducting carrer guidance and job opportunities sessions for the students</li>
            <li>Assisting stundents with writers for the exam</li>
          </p>
        </div>
        <div class="col-md-5 order-md-2 img">
          <img src={hkbs2} alt="hkbs2" class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto hkbsimage" width="400" height="400" />

        </div>
      </div>
      </div>

      <div class="container hkbsdiv3">
      <div class="row featurette d-flex justify-content-center align-items-center shadow-lg p-3 mb-5 bg-body rounded /*bg-secondary text-white*/">
        <div class="col-md-7 order-md-1 lh-base content">
          <h2 class="featurette-heading">WORK UPDATES</h2>
          <p class="lead">For teaching English, we have created three sub-groups among EWB members and syllabus has been divided among them. Group
            members of respective groups go to school on daily basis to teach the students for about 1-2 hours. We also regularly visit the blind
            school to teach them basic computer technologies.</p>
            <p class="lead">Currently, due to covid situation, we could not visit to school since March. For the next few months, we plan to conduct
            teaching activity using digital sources.</p>
          <p class="lead">We have also recorded books for the students, have taken session on career guidance and job opportunities available for
            the students and have provided writers for the exam.</p>
          
        </div>
        <div class="col-md-5 order-md-2 img">
          <img src={hkbs3} alt="hkbs3" class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto hkbsimage" width="400" height="400" />
        </div>
      </div>
      </div>

      
    </div>
  );
}

export default HKBS;
