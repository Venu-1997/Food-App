import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const Signup = () => {
    const [credentials, setCredentials] = useState({name:"",email:"",password:"",location:""});
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const res = await fetch("http://localhost:5070/api/users/signup",{
                method: "POST",
                headers: { "Content-type" : "application/json"},
                body: JSON.stringify({ name:credentials.name , email:credentials.email , password:credentials.password , location:credentials.location })
            });
            const data = await res.json();
            if(data.error) throw new Error(data.error);
            console.log(data);
            navigate('/login');
            toast.success('Signed up Successfully.Please Login to Continue');
        }
        catch(e){
            toast.error(e.message);
        }
        
    }

    const onChange = (e) => {
        setCredentials({...credentials,[e.target.name]: e.target.value});
    }
    return (
        <div className='container' >
            <div className="col-md-6 col-lg-7 d-flex a">
                <div className="card-body p-4 p-lg-4 text-black ">
                    <form onSubmit={handleSubmit} >

                        <div className="d-flex align-items-center mb-3 pb-1">
                            <img src="https://img.hotimg.com/whitelogo.png" className='logos' alt="logo" />
                            <span className="h1 fw-bold mb-0 text-white ">Yum Quest</span>
                        </div>

                        <h5 className="fw-normal mb-3 pb-3 text-white" style={{"letter-spacing": "1px"}}>Create your account</h5>

                        <div className="form-outline mb-4">
                            <label className="form-label text-white" htmlFor="form2Example7">Name</label>
                            <input type="text" id="form2Example7" name="name" value={credentials.name} onChange={onChange} className="form-control form-control-lg " placeholder="Enter your Name" />
                        </div>

                        <div className="form-outline mb-4">
                            <label className="form-label text-white" htmlFor="form2Example17">Location</label>
                            <input type="text" id="form2Example17" name="location" value={credentials.location} onChange={onChange} className="form-control form-control-lg " placeholder="Enter your Location" />
                        </div>

                        <div className="form-outline mb-4">
                            <label className="form-label text-white" htmlFor="form2Example37">Email address</label>
                            <input type="email" id="form2Example37" name="email" value={credentials.email} onChange={onChange} className="form-control form-control-lg " placeholder="Email address" />
                        </div>

                        <div className="form-outline mb-4">
                        <label className="form-label text-white" htmlFor="form2Example27" >Password</label>
                            <input type="password" id="form2Example27" name="password" value={credentials.password} onChange={onChange} className="form-control form-control-lg " placeholder="Password" />
                            
                        </div>

                        <button className="btn btn-dark btn-lg btn-block bg-warning text-black " type="submit">Signup</button>
                        <Link to="/login" className='m-3 btn btn-lg btn-block btn-danger'>Already a User?</Link>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default Signup;
