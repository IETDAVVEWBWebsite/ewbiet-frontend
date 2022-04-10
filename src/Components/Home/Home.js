import React from 'react'
import { Link } from "react-router-dom";
import 'semantic-ui-css/semantic.min.css';
import "../Home/Home.css";
import ewbhome from "../../Images/Home.jpg"
import solar from "../../Images/solar.jpg"
import plantation from "../../Images/plantation.jpg"
import slum from "../../Images/slum.jpg"
import collar_drive from "../../Images/collar_drive.jpg"
import ind2 from "../../Images/ind2.jpeg"
import youtube from "../../Images/youtube.png"
import garbage from "../../Images/garbage.jpg"
import water from "../../Images/water.jpg"
import Technical1 from "../../Images/Technical1.jpg"
import simpleback10 from "../../Images/simpleback10.jpg"
import Carousel from 'react-bootstrap/Carousel'
import Typography from '@mui/material/Typography';
import { MDBBtn, MDBContainer } from 'mdb-react-ui-kit';
import { Container, Grid, Header, Segment } from 'semantic-ui-react'


const myStyle = {
  backgroundImage: `url(${simpleback10})`,
  //height: '100vh',
  //marginTop: '-70px',
  fontSize: '10px',
  backgroundSize: 'cover',
  //backgroundRepeat: 'no-repeat',
};

const Home = () => (
  (

    <>
      <div style={myStyle}>


        <Carousel className="carousel" showControls fade >
          <Carousel.Item>
            <img src={ind2} className="img-fluid animated" alt="First Slide" />
            <Carousel.Caption>
              <h1 className='carousel_text'>Our Team</h1>
              <h5>New members come and go but our vision and mission remain the same.</h5>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img src={collar_drive} className="img-fluid animated" alt="Second Slide" />
            <Carousel.Caption>
              <h1 className='carousel_text'>Collar drive for Animals</h1>
              <h5>We regularly conduct several drives for the protection and health of animals.</h5>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img src={youtube} className="img-fluid animated" alt="Third Slide" />
           {/*} <Carousel.Caption>
              <h1 className='carousel_text'>Better Education</h1>
              <h5>We work for better Education for blind and poor children education.</h5>
  </Carousel.Caption> */}
          </Carousel.Item>

          <Carousel.Item>
            <img src={Technical1} className="img-fluid animated" alt="Fourth Slide" />
            <Carousel.Caption>
       {/*}       <h1 className='carousel_text'>Treatment of Garbage</h1>
              <h5>Proper recycling of garbage for less pollution.</h5>
              */}
            </Carousel.Caption>

          </Carousel.Item>

          <Carousel.Item>
            <img src={plantation} className="img-fluid animated" alt="Fifth Slide" />
            <Carousel.Caption>
              <h1 className='carousel_text'>Plantation Drive</h1>
              <h5>We regularly conduct plantation drives in campus.</h5>
            </Carousel.Caption>
          </Carousel.Item>

        
        </Carousel>

        <Typography heading component="h1" variant="h2" align="center" gutterBottom color='#31695B' style={{ padding: '2em 0px 0px 0px' }} vertical> Our Mission </Typography>

        <MDBContainer className='overflow-hidden'>
          <Typography variant="h5" align="middle" color="text.secondary" paragraph textAlign='justify' >
          The mission of EWB-IET is to design and implement sustainable activities
            that address pressing needs within the underprivileged communities.
            The club aims to utilize the engineering and technical talents of IET students
            and faculty to help aid communities in gaining access to basic human needs and conduct various drives
            such as cloth distribution drive, blind education, and sanitation facilities.
          </Typography>
        </MDBContainer>


        <Segment style={{ padding: '5em 0em' }} vertical >

          <Grid container stackable verticalAlign='left' >
            <Grid.Row >
              <Grid.Column width={8} >
                <Header as='h3' style={{ fontSize: '2em' }}>
                  Unleashing Great Minds on Great Problems
                </Header>
                <p style={{ fontSize: '1.33em', textAlign: 'justify' }} >
                Engineers Without Borders IET DAVV builds a better world through some activities and engineering projects that
                  empower communities to meet their basic human needs and equip leaders to solve the
                  most pressing challenges. Our members work with communities to find appropriate solutions
                  for blind children's education, sanitation, clean water, etc. Since our
                  founding in 2009, we have embarked on a variety of projects across different engineering
                  disciplines, addressing a spectrum of pressing issues around the world.
                </p>
                <Header as='h3' style={{ fontSize: '2em' }}>
                  We works to improve the quality of life for communities
                </Header>
                <p style={{ fontSize: '1.33em', textAlign: 'justify' }}>
                At EWB-IET we look for students with an aspiration to help others and the motivation to do good.
                  We pride ourselves on our core values of; leadership, innovation, altruism, dedication,
                  collaboration, and diversity. We hope to bring together like-minded students to create innovative
                  engineering-based solutions to remove barriers to human development.
                </p>
              </Grid.Column>
              <Grid.Column floated='' width={8} >
                <img src={ewbhome} className="img-fluid1 animated" alt="home-img" />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column textAlign='center'>

              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>

        

        <Segment style={{ padding: '3em 0em' }} vertical>
          <Container text>

            <Header as='h3' style={{ fontSize: '2em' }}>
              Breaking The Grid, Grabs Your Attention through our projects
            </Header>
            <p style={{ fontSize: '1.33em', textAlign: 'justify' }}>
            The chapter has undertaken the Ralamandal School Project which comprises a number of smaller segments
              like installation of the water purification system, implementation of rainwater harvesting model.
            </p>
            <MDBBtn style={{ fontSize: '1em', height: '40px', width: '1h50px',}} as='a' color='success'><Link class='text-light' to="/project">Projects</Link></MDBBtn>

            <Header as='h3' style={{ fontSize: '2em' }}>
              Did We Tell You About Our Activities?
            </Header>
            <p style={{ fontSize: '1.33em', textAlign: 'justify' }}>
            The Chapter has also been vital in guiding the recruits of engineering to do their bit for
              the society by organizing events like Blood Donation Camp, Hardware Collection Camp, Prudence, and many more.
            </p>
            <MDBBtn style={{ fontSize: '1em', height: '40px', width: '110px' }} as='a' color='success'><Link class='text-light' to="/activities">Activities</Link></MDBBtn>

            <Header as='h3' style={{ fontSize: '2em' }}>
              Have a look at the gallery
            </Header>
            <p style={{ fontSize: '1.33em', textAlign: 'justify' }}>
            EWB-IET is working for over a decade for the betterment of society and the needy. Along with that, we focus on the development of
              students with extra activities have a look at them in the gallery.
            </p>
            <MDBBtn style={{ fontSize: '1em', height: '40px', width: '110px' }} as='a' color='success'><Link class='text-light' to="/gallery">Gallery</Link></MDBBtn>
          </Container>
        </Segment>
      </div>

    </>
  )
);

export default Home;