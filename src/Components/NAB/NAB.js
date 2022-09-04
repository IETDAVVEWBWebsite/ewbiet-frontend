import React from "react";
import Image from "../Image";
import Heading from "../Heading";
import "../style.css";
import nab1 from "./Image/nab1.jpeg";
import nab2 from "./Image/nab2.jpeg";
import nab3 from "./Image/nab3.jpeg";
import nab4 from "./Image/nab4.jpeg";
import nab5 from "./Image/nab5.jpeg";
import nab6 from "./Image/nab6.jpeg";


function NAB() {
    return (
        <div className="maindiv">
             <Heading content="National Association for the Blind" />

            <div class="container">
                <div class="row featurette d-flex justify-content-center align-items-center shadow-lg p-3 mb-5 bg-body rounded">
                    <div class="lh-base content">
                        <h2 class="featurette-heading">INTRODUCTION</h2>
                        <p class="lead">NAB is situated near Bombay Hospital Indore and is residence of about 35 partial and complete blind students ( from Higher Secondary to Post Graduation level ). We have a team of <b>15+ EWB members</b> dedicated for NAB activity.</p>
                    </div>
                    <div class="display">
                    <Image img={nab1}/>
                    <Image img={nab2}/>
                    <Image img={nab3}/>
                    </div>
                </div>
            </div>

            <div class="container">
                <div class="row featurette d-flex justify-content-center align-items-center shadow-lg p-3 mb-5 bg-body rounded">
                    <div class="lh-base content">
                        <h2 class="featurette-heading">OBJECTIVE</h2>
                        <p class="lead">
                        To empower visually challenged population of our country , thus enabling them to lead a life of dignity and productivity.
                        </p>
                    </div>
                </div>
            </div>

            <div class="container">
                <div class="row featurette d-flex justify-content-center align-items-center shadow-lg p-3 mb-5 bg-body rounded ">
                    <div class="lh-base content">
                        <h2 class="featurette-heading">WORK DONE TILL DATE</h2>
                        <p class="lead">On 19th OCT 2019, we visited NAB for the first time and tried to understand the problems students usually face . A few of the key problems include unavailability of book content in recorded form, problem in understanding and speaking English and unavailability of scribe (writers) for exams.</p>
                        <p class="lead">In order to provide book content in recorded form , we took responsibility of recording 6 books. To record these books, we spent <b>80+ hours and helped more than 30 students.</b> Till now we have recorded about<b> 15+ books</b> and spent <b>300+ hours .</b></p>
                        <p class="lead">To address the writer shortage problem, we have prepared a database of EWB members who are eligible and willing to contribute as writers. We provide writer access to blind students as and when a need arises. Till now, we have provided writer access to <b>15+ students.</b></p>
                        <p class="lead">To address the teaching English part, we have prepared detailed curriculum at our end and intend to schedule the session at the earliest.</p>
                        <p class="lead">We are also working on the two key areas - First, various career/job opportunities available for blind students and Second, how we can leverage tecnhology (such as Apps ) to help minimize day to day challenges faced by blind students.</p>
                        

                    </div>
                    <div class="display">
                    <Image img={nab4}/>
                    <Image img={nab5}/>
                    <Image img={nab6}/>
                    </div>
                </div>
            </div>


        </div>
    );
}

export default NAB;
