import React from "react";
import { MDBCard, MDBCardImage, MDBCardBody, MDBRow, MDBCol, MDBContainer } from 'mdb-react-ui-kit';
import Typography from '@mui/material/Typography';
import simpleback9 from "../../Images/simpleback9.jpg"
import stuti from "../../Images/stuti.jpg"
import twinkle from "../../Images/twinkle.jpg"
//import jatin from "../../Images/jatin.jpg"
//import avi from "../../Images/avi.jpg"
//import swasti from "../../Images/swasti.jpg"
//import ishita from "../../Images/ishita.jpg"
//import chhavi from "../../Images/chhavi.jpg"
//import rashi from "../../Images/rashi.jpg"

const myStyle = {
  backgroundImage: `url(${simpleback9})`,
  //height: '130vh',
  //marginTop:'-70px',
  fontSize: '20px',
  backgroundSize: 'cover',
  //backgroundRepeat: 'no-repeat',
};

const Team = () => {
  return (

    <>
      <div style={myStyle}>
        <br />

        <Typography component="h1" variant="h2" align="center" gutterBottom color='#31695B'> Meet Our Team </Typography>
        <MDBContainer className='overflow-hidden'>
          <MDBRow className='row-cols-1 row-cols-md-3 g-4 mb-4' >

            <MDBCol>
              <MDBCard  class="square border" style={{ margin: 15 }} sx={{ minWidth: 500 }}q>
                <MDBCardImage
                  src={stuti} alt='president' position='top'
                />
                <MDBCardBody>
                  <Typography component="h5" variant="h5" align="center" gutterBottom color='#006622'>Kunal Verma</Typography>
                  <Typography component="h5" variant="h5" align="center" gutterBottom color='#00b3b3'>President</Typography>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>

            <MDBCol>
              <MDBCard class="square border" style={{ margin: 15 }}>
                <MDBCardImage
                  src={stuti} alt='Vice President' position='top'
                />
                <MDBCardBody>
                  <Typography component="h5" variant="h5" align="center" gutterBottom color='#006622'>Stuti Chouhan</Typography>
                  <Typography component="h5" variant="h5" align="center" gutterBottom color='#00b3b3'>Vice President</Typography>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>

            <MDBCol>
              <MDBCard class="square border" style={{ margin: 15 }}>
                <MDBCardImage
                  src={stuti} alt='Treasurer' position='top'
                />
                <MDBCardBody>
                  <Typography component="h5" variant="h5" align="center" gutterBottom color='#006622'>Seegal Gadekar</Typography>
                  <Typography component="h5" variant="h5" align="center" gutterBottom color='#00b3b3'> Treasurer</Typography>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>

            <MDBCol>
              <MDBCard class="square border" style={{ margin: 15 }}>
                <MDBCardImage
                  src={stuti} alt='Secretary' position='top'
                />
                <MDBCardBody>
                  <Typography component="h5" variant="h5" align="center" gutterBottom color='#006622'>Abhishek Singh</Typography>
                  <Typography component="h5" variant="h5" align="center" gutterBottom color='#00b3b3'>Secretary</Typography>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>

            <MDBCol>
              <MDBCard class="square border" style={{ margin: 15 }}>
                <MDBCardImage
                  src={stuti} alt='president' position='top'
                />
                <MDBCardBody>
                  <Typography component="h5" variant="h5" align="center" gutterBottom color='#006622'>Devansh Tare</Typography>
                  <Typography component="h5" variant="h5" align="center" gutterBottom color='#00b3b3'>Chief Of Operation</Typography>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>

            <MDBCol>
              <MDBCard  class="square border" style={{ margin: 15 }}>
                <MDBCardImage
                  src={stuti} alt='Vice President' position='top'
                />
                <MDBCardBody>
                  <Typography component="h5" variant="h5" align="center" gutterBottom color='#006622'>Muskan Tanwani</Typography>
                  <Typography component="h5" variant="h5" align="center" gutterBottom color='#00b3b3'>Projects Mentor</Typography>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>

            <MDBCol>
              <MDBCard  class="square border" style={{ margin: 15 }}>
                <MDBCardImage
                  src={stuti} alt='Treasurer' position='top'
                />
                <MDBCardBody>
                  <Typography component="h5" variant="h5" align="center" gutterBottom color='#006622'>Atindra Singh</Typography>
                  <Typography component="h5" variant="h5" align="center" gutterBottom color='#00b3b3'>Public Relation and Marketing Head</Typography>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>

            <MDBCol>
              <MDBCard class="square border" style={{ margin: 15 }}>
                <MDBCardImage
                  src={twinkle} alt='Secretary' position='top'
                />
                <MDBCardBody>
                  <Typography component="h5" variant="h5" align="center" gutterBottom color='#006622'>Twinkle Makhija</Typography>
                  <Typography component="h5" variant="h5" align="center" gutterBottom color='#00b3b3'>Students Relation Head</Typography>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            

          </MDBRow>
        </MDBContainer>
        <br />
      </div>
    </>
  );
};
export default Team;