import React from 'react';
import { MDBCard, MDBCardImage, MDBCardBody, MDBCardText, MDBCardTitle, MDBBtn } from 'mdb-react-ui-kit';
import { MDBCol, MDBRow, MDBContainer } from 'mdb-react-ui-kit';
import Typography from '@mui/material/Typography';
import simpleback9 from "../../Images/simpleback9.jpg"
import VrindaMam from "../../Images/VrindaMam.jpeg"
import Sakshi from "../../Images/SakshiMam.jpg"
import twinkle from "../../Images/twinkle.jpg"
import aayush2 from "../../Images/aayush2.jpg"
import jatin from "../../Images/Jatin.jpg"

const myStyle = {
  backgroundImage: `url(${simpleback9})`,
  //height: '230vh',
  //marginTop:'-70px',
  fontSize: '20px',
  backgroundSize: 'cover',
  //backgroundRepeat: 'no-repeat',
};

const Developers = () => {
  return (

    <>
      <div style={myStyle}>
        <br />
        <Typography component="h1" variant="h2" align="center" gutterBottom color='#31695B'> Developer Team </Typography>
        <br />
{/*
        <MDBContainer className='overflow-hidden'>
          <MDBRow className='row-cols-1 row-cols-md-2 g-4 mb-3 '>
            <Grid container spacing={0} direction="column" alignItems="center" justify="center" style={{ minHeight: '50vh' }} >
              <Grid item xs={3}>
                <Card sx={{ minWidth: 300 }} >
                  <CardMedia
                    component="img"
                    height="300"
                    src={stuti} alt='president' position='top'
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Aayush Sharma
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <MDBBtn href='#'>Linkedin</MDBBtn>
                    <Button size="small">Learn More</Button>
                  </CardActions>
                </Card>
              </Grid>
            </Grid>



            <Grid
              container
              spacing={0}
              direction="column"

              style={{ minHeight: '50vh' }}
            >
              <Grid item xs={3}>
                <Card sx={{ minWidth: 300 }}  >
                  <CardMedia
                    component="img"
                    height="300"
                    src={stuti} alt='president' position='top'

                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Twinkle Makhija
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <MDBBtn href='#'>Linkedin</MDBBtn>
                    <Button size="small">Learn More</Button>
                  </CardActions>
                </Card>
              </Grid>
            </Grid>


          </MDBRow>

        </MDBContainer>


        <Typography component="h1" variant="h2" align="center" gutterBottom color='#31695B'> Mentor </Typography>
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justify="center"
          style={{ minHeight: '50vh' }}
        >
          <Grid item xs={3}>
            <Card sx={{ maxWidth: 345 }} sx={{ minWidth: 200 }} >
              <CardMedia
                component="img"
                height="300"
                src={stuti} alt='president' position='top'

              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Jatin Karla
                </Typography>
              </CardContent>
              <CardActions>
                <MDBBtn href='#'>Linkedin</MDBBtn>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>

  
        <br />

  */}




<MDBContainer className='overflow-hidden'>
          <MDBRow className='row-cols-1 row-cols-md-3 g-4 mb-3' >
          <MDBCol>
              <MDBCard  class="square border"  style={{ margin: 15 }} >
                <MDBCardImage
                  src={VrindaMam} alt='aayush' position='top'
                />
                <MDBCardBody>
                  <Typography component="h5" variant="h5" align="center" gutterBottom color='#006622'>Dr. Vrinda Tokekar</Typography>
                  <Typography component="h5" variant="h5" align="center" gutterBottom color='#00b3b3'>Guide</Typography>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>

            <MDBCol>
              <MDBCard  class="square border"  style={{ margin: 15 }} >
                <MDBCardImage
                  src={Sakshi} alt='aayush' position='top'
                />
                <MDBCardBody>
                  <Typography component="h5" variant="h5" align="center" gutterBottom color='#006622'>Sakshi Jain</Typography>
                  <Typography component="h5" variant="h5" align="center" gutterBottom color='#00b3b3'>Architect and Mentor</Typography>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>

            <MDBCol>
              <MDBCard class="square border" style={{ margin: 15 }}>
                <MDBCardImage
                  src={jatin} alt='Treasurer' position='top'
                />
                <MDBCardBody>
                  <Typography component="h5" variant="h5" align="center" gutterBottom color='#006622'>Jatin Karla</Typography>
                  <Typography component="h5" variant="h5" align="center" gutterBottom color='#00b3b3'>Developer and Mentor</Typography>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          
            <MDBCol>
              <MDBCard  class="square border"  style={{ margin: 15 }} >
                <MDBCardImage
                  src={aayush2} alt='aayush' position='top'
                />
                <MDBCardBody>
                  <Typography component="h5" variant="h5" align="center" gutterBottom color='#006622'>Aayush Sharma</Typography>
                  <Typography component="h5" variant="h5" align="center" gutterBottom color='#00b3b3'>Developer</Typography>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>

            <MDBCol>
              <MDBCard class="square border" style={{ margin: 15 }}>
                <MDBCardImage
                  src={twinkle} alt='Vice President' position='top'
                />
                <MDBCardBody>
                  <Typography component="h5" variant="h5" align="center" gutterBottom color='#006622'>Twinkle Makhija</Typography>
                  <Typography component="h5" variant="h5" align="center" gutterBottom color='#00b3b3'>Developer</Typography>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>

            
            </MDBRow>
            </MDBContainer>
      </div>
    </>
  );
}
export default Developers