import React from "react";
import "../RHA/RHA.css";
import rbn1 from "./Image/rbn1.jpeg";
import rbn4 from "./Image/rbn4.jpeg";
import rbn5 from "./Image/rbn5.jpeg";


function RHA() {
    return (
        <div className="maindiv">
            <div className="mainheading font-link"><b>Robinhood Army</b></div>


            <div class="container">
                <div class="row featurette d-flex justify-content-center align-items-center shadow-lg p-3 mb-5 bg-body rounded block">
                    <div class="col-md-7 order-md-1 lh-base content">
                        <h2 class="featurette-heading">INTRODUCTION</h2>
                        <p class="lead">The Robin Hood Army is a volunteer based, zero-funds organization that works to get surplus food from restaurants and the community to serve less fortunate people.</p>
                        <p class="lead">Along with food distribution, the group conducts accademic sessions to empower street and underpriviledged children with basic primary education.</p>
                    </div>
                    <div class="col-md-5 order-md-2 img">
                        <img src={rbn1} alt="rbn1" className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto image" width="400" height="400"/>
                    </div>
                </div>
            </div>

            <div class="container">
                <div class="row featurette d-flex justify-content-center align-items-center shadow-lg p-3 mb-5 bg-body rounded">
                    <div class="col-md-7 order-md-2 lh-base content">
                        <h2 class="featurette-heading">OBJECTIVE</h2>
                        <p class="lead">
                            <li>To beat hunger and bring out the best of humanity using food a s a medium.</li>
                            <li>The purpose of the academic sessions is to be a bridge between the street and schools, by giving our children the tools and knowledge to go to school.</li>
                        </p>
                    </div>
                    <div class="col-md-5 order-md-2 img">
                        <img src={rbn4} alt="rbn4" class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto image" width="400" height="400" />

                    </div>
                </div>
            </div>

            <div class="container">
                <div class="row featurette d-flex justify-content-center align-items-center shadow-lg p-3 mb-5 bg-body rounded ">
                    <div class="col-md-7 order-md-1 lh-base content">
                        <h2 class="featurette-heading">WORK DONE TILL DATE</h2>
                        <p class="lead">We have a team of 15+ EWB members dedicated for RHA activity. We have served areas of Indore which includes Kali Basti(near Apple Hospital), Mahalaxmi Nagar, Chikitsak Colony (near Bombay Hospital), Scheme 114 and Slum areas near World Cup Square.</p>
                        <p class="lead">We have seerved 600+ children and collectively have spent 40+ hours.


                        </p>


                    </div>
                    <div class="col-md-5 order-md-2 img">
                        <img src={rbn5} alt="rbn5" class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto image" width="400" height="400" />
                    </div>
                </div>
            </div>


        </div>
    );
}

export default RHA;
