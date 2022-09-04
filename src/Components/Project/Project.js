import React from 'react';
import { MDBCard, MDBCardImage, MDBCardBody, MDBCardText } from 'mdb-react-ui-kit';
import { MDBCol, MDBRow, MDBContainer } from 'mdb-react-ui-kit';
import Typography from '@mui/material/Typography';
import simpleback9 from "../../Images/simpleback9.jpg"
import computer from "../../Images/computer.jpg"
import educational2 from "../../Images/educational2.jpg"
import waterproject from "../../Images/waterproject.jpg"

const myStyle = {
  backgroundImage: `url(${simpleback9})`,
  //height: '230vh',
  //marginTop:'-70px',
  fontSize: '20px',
  backgroundSize: 'cover',
  //backgroundRepeat: 'no-repeat',
};

const Project = () => {
  return (

    <>
      <div style={myStyle}>
        <br />
        <Typography
          component="h1"
          variant="h2"
          align="center"
          // color="text.primary"
          gutterBottom
          color='#31695B'>
          Successful Projects
        </Typography>
        <br />

        <MDBContainer className='overflow-hidden'>

          <MDBRow className='row-cols-1 row-cols-md-3 g-4 mb-3 '>


            <MDBCol>
              <MDBCard class="square border border-success" style={{margin: 20 }}>
                <MDBCardImage src={educational2} alt='education' position='top' />
                <MDBCardBody>
                  <Typography component="h4" variant="h4" align="center" gutterBottom color='#31695B'> 
                  Educational Project 
                  </Typography>
                  <MDBCardText>
                    Students of the EWB-IET Chapter undertook the Ralamandal Educational Project from 2013-2014 which focused on
                    providing the basic amenities in the field of education for the students of the government school situated in Ralamandal.
                  </MDBCardText>
                  <button
                    type="button"
                    class="btn btn-success"
                    onClick={() => window.open("https://www.ewb-india.org/ralamandal-educational-project-ewb-iet-davv-indore-chapter-general/", "_blank")}
                  > More Details</button>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>

            <MDBCol>
              <MDBCard class="square border border-success" style={{margin: 20 }} >
                <MDBCardImage src={waterproject} alt='water' position='top' />
                <MDBCardBody>
                  <Typography component="h4" variant="h4" align="center" gutterBottom color='#31695B'> 
                  Water Filteration
                  </Typography>
                  <MDBCardText>
                    Our students designed and installed a water purification system at Ralamandal school for clean water access to 400 students.
                    Our project also aims towards providing basic amenities and infrastructure support to the local school.
                  </MDBCardText>
                  <button
                    type="button"
                    class="btn btn-success"
                    onClick={() => window.open("https://www.ewb-india.org/ralamandal-project-ewb-iet-davv-indore-chapter-water/", "_blank")}
                  > More Details</button>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>

            <MDBCol>
              <MDBCard class="square border border-success" style={{margin: 20 }}>
                <MDBCardImage src={computer} alt='computer' position='top' />
                <MDBCardBody>
                <Typography component="h4" variant="h4" align="center" gutterBottom color='#31695B'> 
                  Lab Installation
                  </Typography>
                  <MDBCardText>
                    EWB-IET students organized a Hardware Donation Camp wherein spare computer parts like RAMs, hard disk, etc in working
                    condition are collected to assemble about 5-6 computers to provide the Ralamandal school with a feasible computer lab.
                  </MDBCardText>
                  <button
                    type="button"
                    class="btn btn-success"
                    onClick={() => window.open("https://www.ewb-india.org/ralamandal-project-phase-2-ewb-iet-davv-indore-chapter-computers/", "_blank")}
                  > More Details</button>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>

          </MDBRow>
        </MDBContainer>
        <br />
      </div>
    </>
  );
}
export default Project