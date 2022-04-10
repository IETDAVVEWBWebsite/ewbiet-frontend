import React, { useState } from "react";
import "../Contact/Contact.css"
import Typography from '@mui/material/Typography';
import simpleback9 from "../../Images/simpleback9.jpg"

const myStyle = {
    backgroundImage: `url(${simpleback9})`,
    //height: '130vh',
    //marginTop:'-70px',
    fontSize: '20px',
    backgroundSize: 'cover',
    //backgroundRepeat: 'no-repeat',
  };

const Contact = () => {

    const [data, setData] = useState({
        fullname: "",
        phone: "",
        email: "",
        msg: "",
    })

    const InputEvent = (event) => {
        const { name, value } = event.target;

        setData((perVal) => {

            return {
                ...perVal,
                [name]: value,
            }
        })

    };

    const formSubmit = (e) => {
        e.preventDefault();
        alert(`My name is ${data.fullname}. My mobile number is ${data.phone}  and email is ${data.email}, Here is what i want to say, ${data.msg} `);
    };
    
    return (
        <>
        
        <div style={myStyle}>
            
                
                <Typography component="h1" variant="h2" align="center" gutterBottom color='#31695B' > Contact Us </Typography>
            
            <div className="container contact_div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form onSubmit={formSubmit}>

                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    class="form-control"
                                    id="exampleFormControlInput1"
                                    name="fullname"
                                    value={data.fullname}
                                    onChange={InputEvent}
                                    placeholder="Enter Your Name" />
                            </div>

                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Phone</label>
                                <input type="number"
                                    class="form-control"
                                    id="exampleFormControlInput1"
                                    name="phone"
                                    value={data.phone}
                                    onChange={InputEvent}
                                    placeholder="Mobile Number" />
                            </div>

                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                                <input type="email"
                                    class="form-control"
                                    id="exampleFormControlInput1"
                                    name="email"
                                    value={data.email}
                                    onChange={InputEvent}
                                    placeholder="name@example.com" />
                            </div>
                            
                            <div class="mb-3">
                                <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                                <textarea class="form-control"
                                    id="exampleFormControlTextarea1" rows="3"
                                    name="msg"
                                    value={data.msg}
                                    onChange={InputEvent}></textarea>
                            </div>
                            <div class="col-12">
                                <button class="btn btn-outline-success" type="submit">
                                    Submit form
                                </button>
                                <hr />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            </div>
            
        </>

    );
};

export default Contact
