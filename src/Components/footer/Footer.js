import React from 'react'
import 'semantic-ui-css/semantic.min.css';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faYoutube, faTwitter, faEnvelope } from '@fortawesome/free-brands-svg-icons';
import { Container, Grid, Header, List, Segment } from 'semantic-ui-react'
import "../Home/Home.css";

const Footer = () => {
    return (

        <Segment inverted vertical style={{ padding: '5em 0em', backgroundColor: '#1A463B', textAlign: 'justify' }}>
            <Container>
                <Grid divided inverted stackable>
                    <Grid.Row>

                        <Grid.Column width={7}>
                            <Header as='h2' inverted>EWB IET Chapter</Header>
                            <h5 >EWB IET-DAVV is an institution chapter of Engineers Without Borders-India that designs and implements
                                sustainable engineering projects that address pressing needs within underprivileged communities.</h5>
                        </Grid.Column>

                        <Grid.Column width={3}>
                            <Header inverted as='h3' content='Quick Links' />
                            <List link inverted>
                                <List.Item as='h6'><Link class='text-dark' to="/about" >About Us</Link></List.Item>
                                <List.Item as='h6'> <Link class='text-dark' to="/activities" >Activities</Link></List.Item>
                                <List.Item as='h6'><Link class='text-dark' to="/project" >Projects</Link></List.Item>
                                <List.Item as='h6'><Link to="/contact" >Contact us</Link></List.Item>
                                <List.Item as='h6'><Link to="/gallery" >Image Gallery</Link></List.Item>
                                <List.Item as='h6'><a href="https://www.ietdavv.edu.in/" className="text-white me-3" target="_blank" rel="noopener noreferrer">IET</a></List.Item>
                            </List>
                        </Grid.Column>

                        <Grid.Column width={3}>
                            <Header inverted as='h3' content='Social Media' />
                            <List link inverted>
                                <List.Item as='h6'><a href="https://www.facebook.com/ewbietdavv/" className="text-white me-3" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebookF} /> Facebook</a></List.Item>
                                <List.Item as='h6'> <a href="https://www.instagram.com/ietewb/?hl=en" className="text-white me-4" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} /> Instagram</a></List.Item>
                                <List.Item as='h6'><a href="https://www.youtube.com/channel/UCP6ARdn85DyIZjUKNpz4eIQ" className="text-white me-4" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faYoutube} /> Youtube</a></List.Item>
                                <List.Item as='h6'><a href="https://twitter.com/EwbIet" className="text-white me-4" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitter} /> Twitter</a></List.Item>

                            </List>
                        </Grid.Column>

                        <Grid.Column width={3}>
                            <Header inverted as='h3' content='Reach Us at' />
                            <List link inverted>
                                <List.Item as='h6'><a href="https://www.google.com/maps/place/IET+DAVV/@22.6811578,75.8775934,17z/data=!3m1!4b1!4m5!3m4!1s0x3962fcc03e36712d:0xb6f3c2bf734a7c!8m2!3d22.6811529!4d75.8797821" className="text-white me-4" target="_blank" rel="noopener noreferrer">IET-DAVV, Khandwa Road, Indore, 452017(M.P.)</a></List.Item>
                                <List.Item as='h6'><a href="https://gmail.com" className="text-white me-4" target="_blank" rel="noopener noreferrer"> ewb@ietdavv.edu.in</a></List.Item>
                                <h6>+ 91 97520 11133</h6>
                                <h6>+ 91 62612 25439</h6>
                                <List.Item as='h4' gutterBottom color='#163F5C'><Link to="/developers" >Developers</Link></List.Item>


                            </List>
                        </Grid.Column>
                    </Grid.Row >
                    <p >© Copyright 2022 @EWB IET-DAVV</p>
                </Grid>

            </Container>

        </Segment>

    );
};

export default Footer;