import React from "react";
import Image from "../Image";
import Heading from "../Heading";
import "../style.css";
import plantation1 from "./Images/plantation1.jpeg";
import plantation2 from "./Images/plantation2.jpeg";
import plantation3 from "./Images/plantation3.jpg";
import plantation4 from "./Images/plantation4.jpg";
import plantation5 from "./Images/plantation5.jpeg";


function PLANTATION() {
    return (
        <div className="maindiv">
            <Heading content="Plantation" />

            <div class="container">
                <div class="row featurette d-flex justify-content-center align-items-center shadow-lg p-3 mb-5 bg-body rounded block">
                    <div class="lh-base content">
                        <h2 class="featurette-heading">INTRODUCTION</h2>
                        <p class="lead">IET DAVV Campus is situated at Khandwa road, Indore and our aim is to aware and educate people for plantation of Trees and protection of environment We have a team of <b>50+ EWB members</b> who participate every year once for plantation activity.</p>
                    </div>
                    <div class="display">
                    <Image img={plantation1}/>
                    <Image img={plantation2}/>
                    <Image img={plantation3}/>
                    </div>
                </div>
            </div>

            <div class="container">
                <div class="row featurette d-flex justify-content-center align-items-center shadow-lg p-3 mb-5 bg-body rounded">
                    <div class="lh-base content">
                        <h2 class="featurette-heading">OBJECTIVE</h2>
                        <p class="lead">
                        The objective of the program was to create awareness among the students regarding the importance of ecology and the natural environment and to keep the campus <b>Clean and Green</b>.
                        </p>
                    </div>
                </div>
            </div>

            <div class="container">
                <div class="row featurette d-flex justify-content-center align-items-center shadow-lg p-3 mb-5 bg-body rounded ">
                    <div class="content">
                        <h2 class="featurette-heading">WORK DONE TILL DATE</h2>
                        <p class="lead">On 15th AUG 2015 on the occasion of 69th INDEPENDENCE DAY, we conducted <b>PLANTATION DRIVE</b> for the first time with motive to educate people for plantation.</p>
                        <p class="lead">In order to keep the campus clean and green, we took responsibility of planting the saplings. To plant these saplings, we spent 1 day every year. Till now we have planted about <b>10000+ trees</b> in our huge campus area.</p>
                        <p class="lead">Every year we conduct a in-campus plantation activity with all the IET DAVV's ewb members and try to spread greenery in the campus.</p>
                        <p class="lead">The IET DAVV students participated in the drive enthusiastically and helped each other in planting the saplings. All the saplings were planted in the school ground by students.</p>
                        <p class="lead">The students planted various saplings including Ashoka, Neem, Belpatra, Gulmohar, Kadamb and Mango.</p>
                        <p class="lead">In association with Shiva Shri nursery,Indore we planted 2000 sapling every year since 2015.</p>
                        <p class="lead">The campaign’s main aim was to direct student’s mind in constructive activities with the positive outcome through the facilitation of contributing to the society.</p>
                        <p class="lead">In the blind race of development, we forget the mantra of Indian culture that nature is our mother and it cannot be exploited. This is the reason why the temperature of the earth is increasing and badly affected climate. The world is afraid of climate change. There is the only way which our saints and ‘puranas’ had told us that trees are friends of human and only trees can save us. Indian culture has accepted the importance of trees and encouraged it.</p>

                    </div>
                    <div class="display">
                    <Image img={plantation4}/>
                    <Image img={plantation5}/>
                    </div>
                </div>
            </div>

            


        </div>
    );
}

export default PLANTATION;
