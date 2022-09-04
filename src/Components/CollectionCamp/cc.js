import React from "react";
import Image from "../Image";
import Heading from "../Heading";
import "../style.css";
import cc1 from "./Image/cc1.jpeg";
import cc2 from "./Image/cc2.jpeg";
import cc3 from "./Image/cc3.jpeg";
import cc4 from "./Image/cc4.jpeg";
import cc5 from "./Image/cc5.jpeg";
import cc6 from "./Image/cc6.jpeg";
import bd1 from "./Image/bd1.jpg";
import bd2 from "./Image/bd2.jpg";
import bd3 from "./Image/bd3.jpg";


function CC() {
    return (
        <div className="maindiv">
            <Heading content="Collection Camp" />

            <div class="container">
                <div class="row featurette d-flex justify-content-center align-items-center shadow-lg p-3 mb-5 bg-body rounded">
                    <div class="lh-base content">
                        <h2 class="featurette-heading">CLOTH COLLECTION DRIVE</h2>
                        <p class="lead">
                            <li>EWB IET chapter planned a "Collection Drive" on 25th December 2020. Using the tagline - <b>“Your Trash could be someone else's Treasure”</b>, we completed the drive successfully with good management and coordination skills of the volunteers.</li>
                            <li>We distributed around <b>800+</b> clothes to the needy ones!!</li>
                            <li>We asked people to donate old but wearable regular clothes, winter clothes (gloves, hats, socks, coats), blankets, stationery supplies etc.</li>
                            <li>It was mentioned in the circulated messages to follow the proper social distancing and safety guidelines while participating in this drive. Every member took care of it and followed the guidelines.</li>
                            <li>This drive was conducted in different cities <b>(Mumbai, Indore, Bhopal, Shahdol ,Dewas, Vidisha ,Ratlam, Sarangpur)</b> having respective leaders in each city.</li>
                        </p>
                    </div>
                    <div class=" display">
                        {/* <img src={cc1} alt="cc1" className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto image"  />
                        <img src={cc2} alt="cc2" className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto image"  />
                        <img src={cc3} alt="cc3" class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto image" /> */}
                        <Image img={cc1} />
                        <Image img={cc2} />
                        <Image img={cc3} />
                    </div>
                </div>
            </div>

            <div class="container">
                <div class="row featurette d-flex justify-content-center align-items-center shadow-lg p-3 mb-5 bg-body rounded">
                    <div class="lh-base content">
                        <h2 class="featurette-heading">COLLECTION CAMP</h2>
                        <p class="lead">
                            <li>Collection camp is organised every year during February- March.</li>
                            <li>It is a two to three day camp in which Stationary items, clothes, books-notebooks, financial donations are collected from college students and other departments of university.</li>
                            <li>Money and other items donated at Jeevanshaala School for underprivileged children and Helen Keller blind school.</li>
                        </p>
                    </div>
                    <div class="display">
                        <Image img={cc4} />
                        <Image img={cc5} />
                        <Image img={cc6} />
                    </div>
                </div>
            </div>

            <div class="container">
                <div class="row featurette d-flex justify-content-center align-items-center shadow-lg p-3 mb-5 bg-body rounded ">
                    <div class="lh-base content">
                        <h2 class="featurette-heading">BLOOD DONATION CAMP</h2>
                        <p class="lead">Organized in January 2015. In Association with “Mobile Blood Bank”- M.Y hospital, Indore. 80 units of blood donated by the students of IET DAVV.</p>
                    </div>
                    <div class="display">
                        <Image img={bd1} />
                        <Image img={bd2} />
                        <Image img={bd3} />
                    </div>
                </div>
            </div>


        </div>
    );
}

export default CC;
