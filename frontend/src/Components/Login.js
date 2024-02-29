import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const Login = () => {
  const [credentials, setCredentials] = useState({email:"",password:""});
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5070/api/users/login", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ email: credentials.email, password: credentials.password })
      });
      const data = await res.json();
      if (data.error) throw new Error(data.error);
      localStorage.setItem("userEmail", credentials.email);
      localStorage.setItem("yq-user", data.authToken);
      navigate('/');
      toast.success('Logged in Successfully');
    } 
    catch (e) {
      toast.error(e.message);
    }
  };

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

                        <h5 className="fw-normal mb-3 pb-3 text-white" style={{"letter-spacing": "1px"}}>Login to your account</h5>

                        <div className="form-outline mb-4">
                            <label className="form-label text-white" htmlFor="form2Example37">Email address</label>
                            <input type="email" id="form2Example37" name="email" value={credentials.email} onChange={onChange} className="form-control form-control-lg " placeholder="Email address" />
                        </div>

                        <div className="form-outline mb-4">
                        <label className="form-label text-white" htmlFor="form2Example27" >Password</label>
                            <input type="password" id="form2Example27" name="password" value={credentials.password} onChange={onChange} className="form-control form-control-lg " placeholder="Password" />
                            
                        </div>

                        <button className="btn btn-dark btn-lg btn-block bg-warning text-black " type="submit">Login</button>
                        <Link to="/signup" className='m-3 btn btn-lg btn-block btn-danger'>Don't have an account?</Link>
                    </form>

                </div>
            </div>
        </div>
  )
}

export default Login;
