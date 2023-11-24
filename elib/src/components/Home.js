import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './login.css';

const Home = () => {

    const history = useNavigate();

    const [inpval, setInpval] = useState({
        name: "",
        email: "",
        
        password: ""
    })

   

    const [data,setData] = useState([]);
    console.log(inpval);

    const getdata = (e) => {
        // console.log(e.target.value);


        const { value, name } = e.target;
        // console.log(value,name);


        setInpval(() => {
            return {
                ...inpval,
                [name]: value
            }
        })

    }

    const addData = (e) => {
        e.preventDefault();

        const { name, email, date, password } = inpval;

        if (name === "") {
            toast.error('Name field is required',{
                position: "top-center",
            });
        } else if (email === "") {
             toast.error('Email field is required',{
                position: "top-center",
            });
        } else if (!email.includes("@")) {
             toast.error('Please enter a valid email address',{
                position: "top-center",
            });
        }
         else if (password === "") {
             toast.error('Password field is required',{
                position: "top-center",
            });
        } else if (password.length < 5) {
             toast.error('Password length should be greater than five characters.',{
                position: "top-center",
            });
        } else {
            console.log("Data added succesfully");
            history("/login")
            localStorage.setItem("useryoutube",JSON.stringify([...data,inpval]));

        }

    }

    return (
        <>  
        
        <div className="background-image" style={{ display: 'flex',  height: '100vh' }}>
            <div className="container mt-3">
                <section className='d-flex justify-content-between'>
                    <div className="left_data mt-5 p-3" style={{ width: "50%" }}>
                        <h3 className='text-center col-lg-6' style={{ color: 'white' }}>Sign Up</h3>
                        <Form >
                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">

                                <Form.Control type="text" name='name' onChange={getdata} placeholder="Enter Your Name" />
                            </Form.Group>
                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">

                                <Form.Control type="email" name='email' onChange={getdata} placeholder="Enter email" />
                            </Form.Group>

                            

                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">

                                <Form.Control type="password" name='password' onChange={getdata} placeholder="Password" />
                            </Form.Group>
                            <Button variant="primary" className='col-lg-6' onClick={addData} style={{ background: "rgb(115, 147, 179)" }} type="submit">
                                Submit
                            </Button>
                        </Form>
                        <p className='mt-3' style={{ color: 'white' }}><strong>Already Have an Account </strong>?<span><NavLink to="/login"> SignIn</NavLink></span> </p>
                    </div>
                   
                </section>
                <ToastContainer />
            </div>
            </div>
        </>
    )
}

export default Home