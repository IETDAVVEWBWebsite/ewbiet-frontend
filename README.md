# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

**********************************************************************************************

/*function Home() {
  return (
    <div className='homemain'>
      <div className='homemainheading'>
        <h1>Unleashing Great Minds on Great Problems</h1>
      </div>
      <div className='homemaincontent'>
        Engineers Without Borders IET DAVV builds a better world through engineering projects that empower communities to meet their basic human needs and equip leaders to solve the world’s most pressing challenges. Our members work with communities to find appropriate solutions for water supply, sanitation, energy, agriculture, civil works and structures.
      </div>
      <div className='homefooter'>
         Copyright © Engineers Without Borders 2021
      </div>
    </div>
   


  )
}
*/

GFG FOOTER

import { Link } from "react-router-dom";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";

<>
    <Box>
      <h4 style={{ color: "white", 
                   textAlign: "left", 
                   marginTop: "-60px",
                   marginRight:"900px"}}>
         EWB- IET is a university chapter of Engineers Without Borders-India that designs and implements sustainable engineering projects that address pressing needs within underprivileged communities.
      </h4>
     
      <Container>
        <Row> 
           
        <Column>
            <Heading>Social Media</Heading>
            <FooterLink href="https://www.facebook.com/ewbietdavv/">
              <i className="fab fa-facebook-f">
                <span style={{ marginLeft: "10px" }}>
                  Facebook
                </span>
              </i>
            </FooterLink>
            <FooterLink href="https://www.instagram.com/ietewb/?hl=en">
              <i className="fab fa-instagram">
                <span style={{ marginLeft: "10px" }}>
                  Instagram
                </span>
              </i>
            </FooterLink>
            <FooterLink href="https://www.youtube.com/channel/UCP6ARdn85DyIZjUKNpz4eIQ">
              <i className="fab fa-youtube">
                <span style={{ marginLeft: "10px" }}>
                  Youtube
                </span>
              </i>
            </FooterLink>
          </Column>
         
          <Column>
            <Heading>Quick Links</Heading>
            <FooterLink href="#">About</FooterLink>
            <FooterLink href="#">Get Involved</FooterLink>
            <FooterLink href="#">Meet the Team</FooterLink>
            <FooterLink href="#">Donate</FooterLink>
            <FooterLink href="#">Contact Us</FooterLink>
          </Column>
          
        </Row>
      </Container>
      <footer className="background-white text-center" >
       <p>
       Developed and managed by EWB IET
               <br /> ©Copyright 2021
       </p>
     </footer>
    </Box>

     
  </>
  ***************************************************************
  GFG STYLING
  import styled from 'styled-components';
   
export const Box = styled.div`
  padding: 80px 60px;
  background: rgb(49, 105, 91);
  position: bottom
  bottom:0;
  height:30%;
  width: 100%;
  
   
  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;
   
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1000px;
    margin: 0 auto;
    /* background: red; */
`
   
export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: right;
  margin-left: 60px;
`;
   
export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 
                         minmax(185px, 1fr));
  grid-gap: 20px;
   
  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, 
                           minmax(200px, 1fr));
  }
`;
   
export const FooterLink = styled.a`
  color: #fff;
  margin-bottom: 20px;
  font-size: 18px;
  text-decoration: none;
   
  &:hover {
      color: green;
      transition: 200ms ease-in;
  }
`;
   
export const Heading = styled.p`
  font-size: 24px;
  color: #fff;
  margin-bottom: 30px;
  font-weight: bold;
`;

export const Footer = styled.div`
color: green;
bottom:0;

`;

*************************************************************************
BOOTSTRAP FOOTER

<div class="container my-5">
  <footer
           class="text-center text-lg-start text-dark"
          style={{backgroundColor: "#ECEFF1"}}
          >
    <section
             class="d-flex justify-content-between p-4 text-white"
             style={{backgroundColor: "#21D192"}}
             >
      <div class="me-5">
        <span>Get connected with us on social networks:</span>
      </div>
    
      <div>
        <a href="" class="text-white me-4">
          <i class="fab fa-facebook-f"></i>
        </a>
        <a href="" class="text-white me-4">
          <i class="fab fa-twitter"></i>
        </a>
        <a href="" class="text-white me-4">
          <i class="fab fa-google"></i>
        </a>
        <a href="" class="text-white me-4">
          <i class="fab fa-instagram"></i>
        </a>
        <a href="" class="text-white me-4">
          <i class="fab fa-linkedin"></i>
        </a>
        <a href="" class="text-white me-4">
          <i class="fab fa-github"></i>
        </a>
      </div>
    
    </section>
   
    <section class="">
      <div class="container text-center text-md-start mt-5">
      
        <div class="row mt-3">
      
          <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
      
            <h6 class="text-uppercase fw-bold">Company name</h6>
            <hr
                class="mb-4 mt-0 d-inline-block mx-auto"
                style={{width: "60px",
                backgroundColor: "#7c4dff", 
                height: "2px"}}
                />
            <p>
              Here you can use rows and columns to organize your footer
              content. Lorem ipsum dolor sit amet, consectetur adipisicing
              elit.
            </p>
          </div>
      
          <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            
            <h6 class="text-uppercase fw-bold">Products</h6>
            <hr
                class="mb-4 mt-0 d-inline-block mx-auto"
                style="width: 60px; background-color: #7c4dff; height: 2px"
                />
            <p>
              <a href="#!" class="text-dark">MDBootstrap</a>
            </p>
            <p>
              <a href="#!" class="text-dark">MDWordPress</a>
            </p>
            <p>
              <a href="#!" class="text-dark">BrandFlow</a>
            </p>
            <p>
              <a href="#!" class="text-dark">Bootstrap Angular</a>
            </p>
          </div>
         
          <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
            
            <h6 class="text-uppercase fw-bold">Useful links</h6>
            <hr
                class="mb-4 mt-0 d-inline-block mx-auto"
                style="width: 60px; background-color: #7c4dff; height: 2px"
                />
            <p>
              <a href="#!" class="text-dark">Your Account</a>
            </p>
            <p>
              <a href="#!" class="text-dark">Become an Affiliate</a>
            </p>
            <p>
              <a href="#!" class="text-dark">Shipping Rates</a>
            </p>
            <p>
              <a href="#!" class="text-dark">Help</a>
            </p>
          </div>
          
          <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
           
            <h6 class="text-uppercase fw-bold">Contact</h6>
            <hr
                class="mb-4 mt-0 d-inline-block mx-auto"
                style="width: 60px; background-color: #7c4dff; height: 2px"
                />
            <p><i class="fas fa-home mr-3"></i> New York, NY 10012, US</p>
            <p><i class="fas fa-envelope mr-3"></i> info@example.com</p>
            <p><i class="fas fa-phone mr-3"></i> + 01 234 567 88</p>
            <p><i class="fas fa-print mr-3"></i> + 01 234 567 89</p>
          </div>
          
        </div>
        
      </div>
    </section>
    
    <div
         class="text-center p-3"
         style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}
         >
      © 2020 Copyright:
      <a class="text-dark" href="https://mdbootstrap.com/"
         >MDBootstrap.com</a
        >
    </div>
    
  </footer>

</div>

**************************************************************************

/*
const Footer = () => {
  return (

    
    <>

      <div className="container my-5">
        <footer
          className="text-center text-lg-start text-dark"
          style={{ backgroundColor: "#ECEFF1" }}
        >
          <section
            className="d-flex justify-content-between p-4 text-white"
            style={{ backgroundColor: "#21D192" }}
          >
            <div className="me-5">
              <span>Get connected with us on social networks:</span>
            </div>

            <div>
              <a href="" className="text-white me-4">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="" className="text-white me-4">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="" className="text-white me-4">
                <i className="fab fa-google"></i>
              </a>
              <a href="" className="text-white me-4">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="" className="text-white me-4">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="" className="text-white me-4">
                <i className="fab fa-github"></i>
              </a>
            </div>

          </section>

          <section className="">
            <div className="container text-center text-md-start mt-5">

              <div className="row mt-3">

                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

                  <h6 className="text-uppercase fw-bold">Company name</h6>
                  <hr
                    className="mb-4 mt-0 d-inline-block mx-auto"
                    style={{
                      width: "60px",
                      backgroundColor: "#7c4dff",
                      height: "2px"
                    }}
                  />
                  <p>
                    Here you can use rows and columns to organize your footer
                    content. Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit.
                  </p>
                </div>

                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

                  <h6 className="text-uppercase fw-bold">Products</h6>
                  <hr
                    className="mb-4 mt-0 d-inline-block mx-auto"
                    style={{
                      width: "60px",
                      backgroundColor: "#7c4dff",
                      height: "2px"
                    }}
                  />
                  <p>
                    <a href="#!" className="text-dark">MDBootstrap</a>
                  </p>
                  <p>
                    <a href="#!" className="text-dark">MDWordPress</a>
                  </p>
                  <p>
                    <a href="#!" className="text-dark">BrandFlow</a>
                  </p>
                  <p>
                    <a href="#!" className="text-dark">Bootstrap Angular</a>
                  </p>
                </div>

                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

                  <h6 className="text-uppercase fw-bold">Useful links</h6>
                  <hr
                    className="mb-4 mt-0 d-inline-block mx-auto"
                    style={{
                      width: "60px",
                      backgroundColor: "#7c4dff",
                      height: "2px"
                    }}
                  />
                  <p>
                    <a href="#!" className="text-dark">Your Account</a>
                  </p>
                  <p>
                    <a href="#!" className="text-dark">Become an Affiliate</a>
                  </p>
                  <p>
                    <a href="#!" className="text-dark">Shipping Rates</a>
                  </p>
                  <p>
                    <a href="#!" className="text-dark">Help</a>
                  </p>
                </div>

                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

                  <h6 className="text-uppercase fw-bold">Contact</h6>
                  <hr
                    className="mb-4 mt-0 d-inline-block mx-auto"
                    style={{
                      width: "60px",
                      backgroundColor: "#7c4dff",
                      height: "2px"
                    }}
                  />
                  <p><i className="fas fa-home mr-3"></i> New York, NY 10012, US</p>
                  <p><i className="fas fa-envelope mr-3"></i> info@example.com</p>
                  <p><i className="fas fa-phone mr-3"></i> + 01 234 567 88</p>
                  <p><i className="fas fa-print mr-3"></i> + 01 234 567 89</p>
                </div>

              </div>

            </div>
          </section>

          <div
            className="text-center p-3"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
          >
            © 2020 Copyright:
            <a className="text-dark" href="https://mdbootstrap.com/"
            >MDBootstrap.com</a
            >
          </div>

        </footer>

      </div>
    </>
      );
};

    

var Footer = React.createClass({
  render: function () {
    return (

      */





      ***********************************************************************
      /*


/*
import React from 'react'
import { Link } from "react-router-dom";
import "../Home/Home.css";
import ewbhome from "../../Images/Home.jpg"
import ewbhome1 from "../../Images/solar.jpg"
import ewbhome2 from "../../Images/plantation.jpg"
import ewbhome3 from "../../Images/slum.jpg"p
import ewbhome4 from "../../Images/garbage.jpg"
import ewbhome5 from "../../Images/water.jpg"
import ewbhome6 from "../../Images/pollution.jpg"
import hkbs from "../../Images/hkbs.jpg"
import rha from "../../Images/rha.jpg"
import plantation from "../../Images/plantation1.jpg"
import nab from "../../Images/hkbs3.jpeg"
import cc from "../../Images/cloth.jpg"
import ssg from "../../Images/ssg1.jpg"
import Carousel from 'react-bootstrap/Carousel'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const Home = () => {

  return (
    <>

      <Carousel fade>
        <Carousel.Item>
          <img src={ewbhome1} className="img-fluid animated" alt="First Slide" />

          <Carousel.Caption>
            <h3>Solar</h3>
            <p>Aim: To use renewable energy.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={ewbhome2} className="img-fluid animated" alt="Second Slide" />

          <Carousel.Caption>
            <h3>Plantation</h3>
            <p>Aim: Conducting Plantation drive in city.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={ewbhome3} className="img-fluid animated" alt="Third Slide" />

          <Carousel.Caption>
            <h3>Education</h3>
            <p>Aim: Better Education for poor.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img src={ewbhome4} className="img-fluid animated" alt="Fourth Slide" />

          <Carousel.Caption>
            <h3>Garbage</h3>
            <p>Aim: Reduce pollution by recycling garbage .</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img src={ewbhome5} className="img-fluid animated" alt="Fifth Slide" />

          <Carousel.Caption>
            <h3>Water Scarcity</h3>
            <p>Aim: To eradicate Water scarcity.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img src={ewbhome6} className="img-fluid animated" alt="Sixth Slide" />

          <Carousel.Caption>
            <h3>Pollution</h3>
            <p>Aim: To make a pollution free tomorrow.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <section id="header" className="d-flex align-items center">
        <div className="container-fluid nav_bg">
          <div className='row'>
            <div className="col-10 mx-auto">
              <div className="row">

                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1>
                    Unleashing Great Minds on Great Problems
                  </h1>

                  <h2 className="my-3">
                    The EWB chapter of IET DAVV Indore. a non profit organisation aims at building a better society &
                    harnessing the potential of engineering to create an equitable reality for the planet and its people
                  </h2>

                  <div className="mt-3">
                    Engineers Without Borders IET DAVV builds a better world through engineering projects that empower communities to meet their basic human needs and equip leaders to solve the world’s most pressing challenges. Our members work with communities to find appropriate solutions 3for water supply, sanitation, energy, agriculture, civil works and structures.Since our founding in 2014, we have embarked on a variety of projects across different engineering disciplines, addressing a spectrum of pressing issues around the world. 
                    EWB-IET Chapter is a student chapter of EWB-India, The chapter has undertaken the Ralamandal School Project which comprises of a number of smaller segments like installation of water purification system, implementation of rainwater harvesting model, recording lectures for the blind and setting up of a feasible computer lab and hence, promoting E-learning ; so as to help the concerned community combat the daily-life scurries and raise their standard of living. The Chapter has also been vital in guiding the new recruits of engineering to do their bit for the society by organizing events like Blood Donation Camp, Hardware Collection Camp, Prudence and many more. The Chapter has also contributed to EWB-India by designing the entire framework of it’s website and successfully establishing the EWB-India Knowledge Repository, an online database that systematically captures, organizes, and categorizes knowledge-based information regarding every move of all the chapters of EWB India.
                  </div>

                  <div className="mt-3">
                    <Link className='btn-get-started' to="/gallery">Gallery-></Link>
                  </div>

                </div>
                <div className="col-lg-6 order-1 order-lg-2 header-img">
                  <img src={ewbhome} className="img-fluid animated" alt="home-img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="my-5">
        < section className="d-flex justify-content-between p-4 text-white" style={{ backgroundColor: '#31695B' }}>

          < div className="me-5" >
            <h1>OUR ACTIVITIES</h1>
          </div >
        </section >
      </div>

      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <img src={hkbs} class="card-img-top" alt="..." />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Hellen Keller Blind School
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <img src={hkbs} class="card-img-top" alt="..." />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Hellen Keller Blind School
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

    </>
  );
};

*/


                        <MDBCol>
                            <MDBCard class="square border border-success">
                                <MDBCardImage
                                    src='https://mdbcdn.b-cdn.net/img/new/standard/city/044.webp'
                                    alt='...'
                                    position='top'
                                />
                                <MDBCardBody>
                                    <h2>Resume Building</h2>
                                    <MDBCardText>
                                        This is a longer card with supporting text below as a natural lead-in to additional content.
                                        This content is a little bit longer.
                                    </MDBCardText>
                                    <MDBBtn as='a' color='success'><Link class='text-light' to="/Resume Building">More Details</Link></MDBBtn>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
