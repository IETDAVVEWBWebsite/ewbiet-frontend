import React from 'react';
import { MDBCard, MDBCardImage, MDBCardBody, MDBCardText, MDBCardTitle, MDBBtn } from 'mdb-react-ui-kit';
import { MDBCol, MDBRow, MDBContainer } from 'mdb-react-ui-kit';
import Typography from '@mui/material/Typography';
import simpleback9 from "../../Images/simpleback9.jpg"
import stuti from "../../Images/stuti.jpg"

import Grid from '@material-ui/core/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';

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
      </div>
    </>
  );
}
export default Developers