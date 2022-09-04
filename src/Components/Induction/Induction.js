import React from "react";
import Image from "../Image";
import Heading from "../Heading";
import ind1 from "./Image/ind1.jpeg";
import ind2 from "./Image/ind2.jpeg";
import "../style.css";


function INDUCTION() {
    return (
        <div className="maindiv">
            <Heading content="Induction and Recruitment process" />

            <div class="container">
                <div class="row featurette d-flex justify-content-center align-items-center shadow-lg p-3 mb-5 bg-body rounded block">
                    <div class="lh-base content">
                        <h2 class="featurette-heading">INDUCTION PROCESS</h2>
                        <p class="lead">EWB IET chapter plans an induction process for all the new recruited members every year as soon as the recruitment process gets over . It takes place in the presence of <b>Our Founder</b>(Mr. Aditya Agrawal) and <b>Our Faculty Head</b>( Dr. Mrs. Vrinda Tokekar)</p>
                    </div>
                    <div class="display">
                    <Image img={ind1}/>
                    <Image img={ind2}/>
                    </div>
                </div>
            </div>

            <div class="container">
                <div class="row featurette d-flex justify-content-center align-items-center shadow-lg p-3 mb-5 bg-body rounded">
                    <div class="lh-base content">
                        <h2 class="featurette-heading">OBJECTIVE</h2>
                        <p class="lead">
                            The basic objectives of induction is making the new members fully knowledgeable regarding their role in the organization and how we at IET DAVV chapter of EWB treat everyone as a part of one big family!
                        </p>
                    </div>
                </div>
            </div>

            <div class="container">
                <div class="row featurette d-flex justify-content-center align-items-center shadow-lg p-3 mb-5 bg-body rounded ">
                    <div class="lh-base content">
                        <h2 class="featurette-heading">RECRUITMENT PROCEDURE</h2>
                        <p class="lead">The recruitment process compromises of three stages : <b>1. Filling out the google form we circulate among all the students of first and second year. 2. First round consists of screening the students based on their response in the google form. 3. The final round is the personal interview round, in which an interview is taken by our core team members.</b></p>
                        <p class="lead">The selected indivuals from the last round then become a member of our chapter. The recruitment process is followed by an induction program for welcoming the new recruits.</p>



                    </div>
                    
                </div>
            </div>


        </div>
    );
}

export default INDUCTION;
