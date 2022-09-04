import React from "react";
import Heading from "../Heading";
import "../style.css";
import Image from "../Image";
import ssg1 from "./Image/ssg1.jpeg";
import ssg2 from "./Image/ssg2.jpeg";
import ssg3 from "./Image/ssg3.jpeg";
import ssg4 from "./Image/ssg4.jpeg";
import ssg5 from "./Image/ssg5.jpeg";
import ssg6 from "./Image/ssg6.jpeg";
import ssg7 from "./Image/ssg7.jpeg";
import ssg8 from "./Image/ssg8.jpeg";
import ssg9 from "./Image/ssg9.jpeg";



function SSG() {
    return (
        <div className="maindiv">
            <Heading content="Social Service Group" />

            <div class="container">
                <div class="row featurette d-flex justify-content-center align-items-center shadow-lg p-3 mb-5 bg-body rounded block">
                    <div class="content">
                        {/* <h2 class="featurette-heading">INTRODUCTION</h2> */}
                        <p class="lead">Social service group is a platform where you get to learn a lot not only you develop your skills but also you get to know what empathy is. Here what empathy means is that how close you get to a person you are helping to. You get to know the circumstances they live in as well as their urge to live everyday ,working hard. </p>
                    </div>
                    <div class="display">
                    <Image img={ssg1}/>
                    <Image img={ssg2}/>
                    <Image img={ssg3}/>
                    </div>
                </div>
            </div>

            <div class="container">
                <div class="row featurette d-flex justify-content-center align-items-center shadow-lg p-3 mb-5 bg-body rounded">
                    <div class="content">
                        {/* <h2 class="featurette-heading">OBJECTIVE</h2> */}
                        <p class="lead">
                        This group works dynamically. It is not only about helping others but also self learning about the values we get from them. As a member you get to learn different aspects of life from your co-members as well. The knowledge and teaching  you get from your seniors is worth being here because it helps through out. 
                        </p>
                    </div>
                    <div class="display">
                    <Image img={ssg4}/>
                    <Image img={ssg5}/>
                    <Image img={ssg6}/>
                    </div>
                </div>
            </div>

            <div class="container">
                <div class="row featurette d-flex justify-content-center align-items-center shadow-lg p-3 mb-5 bg-body rounded">
                    <div class="lh-base content">
                        <p class="lead">Talking about the work we do here is various clothes drives which basically is a clothes distribution program where we provide clothes to the people in need and spread smiles. We conducted it in several cities like Indore,Bhopal,vidisha because our members are present there . This shows how dynamically we work. As we support "no wastage of food" we run food drives where we try to collect food from hotels or restaurants and distribute it to people of different slums like kali basti,  slums near bombay hospital in Indore and many more.</p>
                    </div>
                    <div class="display">
                    <Image img={ssg7}/>
                    <Image img={ssg8}/>
                    <Image img={ssg9}/>
                    </div>
                </div>
            </div>

            <div class="container">
                <div class="row featurette d-flex justify-content-center align-items-center shadow-lg p-3 mb-5 bg-body rounded ">
                    <div class="content">
                        <p class="lead">Talking about the work we do here is various clothes drives which basically is a clothes distribution program where we provide clothes to the people in need and spread smiles. We conducted it in several cities like Indore,Bhopal,vidisha because our members are present there . This shows how dynamically we work. As we support    "no wastage of food" we run food drives where we try to collect food from hotels or restaurants and distribute it to people of different slums like kali basti,  slums near bombay hospital in Indore and many more.</p>
                    </div>
                </div>
            </div>


        </div>
    );
}

export default SSG;

