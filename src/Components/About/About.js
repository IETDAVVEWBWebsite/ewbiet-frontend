import React from 'react'
import simpleback9 from "../../Images/simpleback9.jpg"
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";
import { MDBContainer, MDBBtn } from 'mdb-react-ui-kit';

const myStyle = {
  backgroundImage: `url(${simpleback9})`,
  //height:'100vh',
  //marginTop:'-70px',
  fontSize: '20px',
  backgroundSize: 'cover',
  //backgroundRepeat: 'no-repeat',
  opacity: '1',
  text: '#00ff00',
};

function About() {
  return (

    <>
      <div style={myStyle}>
        <br />
        <MDBContainer className='overflow-hidden'>
          <Typography heading component="h1" variant="h2" align="center" gutterBottom color='#31695B'> Our Story </Typography>
          <Typography content component="h5" variant="h5" align="center" gutterBottom color='#000000' textAlign='justify'>
          Dealing with the challenges of nowadays requires hassle-solvers who convey specific views.
            EWB-IET emerged out of a pursuit to
            encourage and aid the community, and a desire for movements to speak louder than words.
            Established in 2014 under the guidance of Dr. Manohar Chanwani (Former Director, IET DAVV)
            and Dr. Vrinda Tokekar (Faculty Advisor, HOD, Information Technology) we’re an organization driven by progressive ideas, bold actions,
            and a strong foundation of support.
          </Typography>

          <Typography heading component="h1" variant="h2" align="center" gutterBottom color='#31695B' style={{ padding: '20px 0em' }} vertical>Our Ideology</Typography>
          <Typography content component="h5" variant="h5" align="center" gutterBottom color='#000000' textAlign='justify'>
          We believe that just as every human being should have the means to meet their basic needs, no nation,
            society, or group has the right to over-consume nature's resources. EWB-India members shall pledge to
            uphold the principles of social, economic, and gender justice in their work, as and when necessary and possible.
            It was started with the mission and vision of bringing a positive change in society and contributing
            as much as we can to the welfare and development of others.
            <hr />
            EWB-IET is a student chapter of EWB-India that has been established as a non-profit Society, under the Society's Act, to involve
            engineers, and other professionals with special or general skills, in a movement of constructive change.
            It is inspired by an urgent concern for accelerating sustainable rural development and working across
            national boundaries for social and economic justice and responsible use of technology.
            <br />
          </Typography>

          <Typography content component="h5" variant="h5" align="center" gutterBottom color='#000000' style={{ padding: '15px 0px' }} >Contact us to learn more and get involved. <br /> <br />
            <MDBBtn style={{ fontSize: '1em', height: '40px', width: '130px' }} as='a' color='success'><Link class='text-light' to="/contact">Contact Us</Link></MDBBtn>
          </Typography>

        </MDBContainer>
        <br />
        <br />
      </div>
    </>
  )
};
export default About