import * as React from 'react';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";
import { MDBCard, MDBCardImage, MDBCardBody, MDBCardText, MDBRow, MDBCol, MDBBtn, MDBContainer } from 'mdb-react-ui-kit';
import simpleback9 from "../../Images/simpleback9.jpg"
import careeractivity from "../../Images/careeractivity.jpg"
import collectionactivity from "../../Images/collectionactivity.jpg"
import nabactivity from "../../Images/nabactivity.jpg"
import plantactivity from "../../Images/plantactivity.jpg"
import ssgactivity from "../../Images/ssgactivity.jpg"
import recruitmentactivity from "../../Images/recruitmentactivity.jpg"
import hkbsactivity from "../../Images/hkbsactivity.jpg"


const myStyle = {
    backgroundImage: `url(${simpleback9})`,
    //height: '230vh',
    //marginTop:'-70px',
    fontSize: '20px',
    backgroundSize: 'cover',
    //backgroundRepeat: 'no-repeat',
};

const Activities = () => {
    return (
        <>

            <div style={myStyle}>
                <br />
                <Typography heading component="h1" variant="h2" align="center" gutterBottom color='#31695B'> Our Activities </Typography>

                <MDBContainer className='overflow-hidden'>
                    <Typography variant="h5" align="center" color="text.secondary" paragraph textAlign='justify' >
                        The mission of EWB-IET is to design and implement sustainable activities
                        that address pressing needs within underprivileged communities.
                        The club aims to utilize the engineering and technical talents of IET students
                        and faculty in order to help aid communities in gaining access to basic human needs and conducts various drives
                        such as cloth distribution drive, blind education, and sanitation facilities.
                    </Typography>
                </MDBContainer>

                <br />

                <MDBContainer className='overflow-hidden'>

                    <MDBRow className='row-cols-1 row-cols-md-3 g-4 mb-3 ' >
                        

                        <MDBCol>
                            <MDBCard class="square border border-success" style={{margin: 15 }}>
                                <MDBCardImage src={hkbsactivity} alt='hkbsactivity' position='top'/>
                                <MDBCardBody>
                                    <h2 style={{ color: '#16846A' }}>Helen Keller Blind School</h2>
                                    <MDBCardText style={{ textAlign: 'justify' }}>
                                    With a vision to educate and empower the blind students, Hellen Keller Blind School Project looks forward
                                        to provide the disabled children the facilities they lack.
                                    </MDBCardText>
                                    <MDBBtn as='a' color='success'><Link class='text-light' to="/hkbs">More Details</Link></MDBBtn>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>


                        <MDBCol>
                            <MDBCard class="square border border-success" style={{margin: 15 }}>
                                <MDBCardImage
                                    src={plantactivity}
                                    alt='plantactivity'
                                    position='top'
                                />
                                <MDBCardBody>
                                    <h2 style={{ color: '#16846A' }}>Plantation</h2>
                                    <MDBCardText>
                                        To aware and educate people for plantation of Trees and protection of environment We have a team of 50+
                                        EWB members who participate every year once for plantation activity.
                                    </MDBCardText>
                                    <MDBBtn as='a' color='success'><Link class='text-light' to="/Plantation">More Details</Link></MDBBtn>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>


                        <MDBCol>
                            <MDBCard class="square border border-success" style={{margin: 15 }}>
                                <MDBCardImage
                                    src={nabactivity}
                                    alt='nabactivity'
                                    position='top'
                                />
                                <MDBCardBody>
                                    <h2 style={{ color: '#16846A' }}>National Association for the Blind</h2>
                                    <MDBCardText style={{ textAlign: 'justify' }}>
                                        NAB is residence of about 35 partial and complete blind students . We have a team of 15+ EWB members dedicated for NAB activity.
                                    </MDBCardText>
                                    <MDBBtn as='a' color='success'><Link class='text-light' to="/Plantation">More Details</Link></MDBBtn>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>


                        <MDBCol>
                            <MDBCard class="square border border-success" style={{margin: 15 }}>
                                <MDBCardImage
                                    src={careeractivity}
                                    alt='careeractivity'
                                    position='top'
                                />
                                <MDBCardBody>
                                    <h2 style={{ color: '#16846A' }}>Career Guidance</h2>
                                    <MDBCardText style={{ textAlign: 'justify' }}>
                                        We have introduced various career oppurtunities and
                                        introduction to government schemes and reservation
                                        listing of Ngo's that are working specifically for blind people.
                                    </MDBCardText>
                                    <MDBBtn as='a' color='success'><Link class='text-light' to="/cg">More Details</Link></MDBBtn>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>


                        
                        <MDBCol>
                            <MDBCard class="square border border-success" style={{margin: 15 }}>
                                <MDBCardImage
                                    src={ssgactivity}
                                    alt='ssgactivity'
                                    position='top'
                                />
                                <MDBCardBody>
                                    <h2 style={{ color: '#16846A' }}>Social Service Group</h2>
                                    <MDBCardText style={{ textAlign: 'justify' }}>
                                    Social service group is a platform where you get to learn a lot, not only one develop skills but 
                                    also get to know what empathy is i.e. how close you get to a person you are helping.
                                    </MDBCardText>
                                    <MDBBtn as='a' color='success'><Link class='text-light' to="/ssg">More Details</Link></MDBBtn>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>


                        <MDBCol>
                            <MDBCard class="square border border-success" style={{margin: 15 }}>
                                <MDBCardImage
                                    src={collectionactivity}
                                    alt='collectionactivity'
                                    position='top'
                                />
                                <MDBCardBody>
                                    <h2 style={{ color: '#16846A' }}>Collection Camp</h2>
                                    <MDBCardText style={{ textAlign: 'justify' }}>
                                    Using the tagline - “Your Trash could be someone else's Treasure”, we conduct the drive every year  
                                    with good management and coordination skills of the volunteers.
                                    </MDBCardText>
                                    <MDBBtn as='a' color='success'><Link class='text-light' to="/collectioncamp">More Details</Link></MDBBtn>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>



                        <MDBCol>
                            <MDBCard class="square border border-success" style={{margin: 15 }}>
                                <MDBCardImage
                                    src={recruitmentactivity}
                                    alt='recruitmentactivity'
                                    position='top'
                                />
                                <MDBCardBody>
                                    <h2 style={{ color: '#16846A' }}>Induction and Recruitment process</h2>
                                    <MDBCardText style={{ textAlign: 'justify' }}>
                                    EWB IET chapter plans an induction process for all the new recruited members. It takes place in the presence of 
                                    Our Founder(Mr. Aditya Agrawal) and Our 
                                    Faculty Head( Dr. Mrs. Vrinda Tokekar).
                                    </MDBCardText>
                                    <MDBBtn as='a' color='success'><Link class='text-light' to="/induction">More Details</Link></MDBBtn>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>


                        <MDBCol>
                            <MDBCardBody>
                                <h1>Our Projects</h1>
                                <MDBCardText style={{ textAlign: 'justify' }}>
                                    
                                </MDBCardText>
                                <MDBBtn as='a' color='success'><Link class='text-light' to="/project" >Projects -</Link></MDBBtn>
                            </MDBCardBody>

                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </div>
        </>
    );
}
export default Activities;
