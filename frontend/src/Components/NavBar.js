import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';
import Modal from '../Model';
import Cart from './Cart';
import { useCart } from './ContextReducer';


const NavBar = () => {
    const [cartView, setCartView] = useState(false);
    const navigate = useNavigate();
    let cartData = useCart();
    const handleLogout = async() => {
        try{
            const res = await fetch("http://localhost:5070/api/users/logout",{
                method: "POST",
                headers: { "Content-type" : "application/json"}
            });
    
            const data = await res.json();
            if(data.error) throw new Error(data.error);
    
            //we need to set it in Local storage So,if we reload data doesn't go
            localStorage.removeItem("yq-user");
            navigate('/login');
            toast.success('Logged out Successfully');
        }
        catch(e){
            toast.error(e.message);
        }
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-warning">
                <div className="container-fluid">
                    <Link className="navbar-brand fs-1 fst-italic" to="/"> 
                        <img src="https://img.hotimg.com/yqLogo.png" className='logo' alt="logo" /> 
                        Yum Quest
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item">
                                <Link className="nav-link active fs-5" aria-current="page" to="/">Home</Link>
                            </li>
                            {
                                (localStorage.getItem("yq-user")) ? 
                                    <li className="nav-item">
                                        <Link className="nav-link active fs-5" aria-current="page" to="/orders">My Orders</Link>
                                    </li> 
                                : ""
                            }
                        </ul>
                        <ul className="navbar-nav">
                            {
                                (!localStorage.getItem("yq-user")) ? 
                                <>
                                    <li className="nav-item">
                                        <Link className="btn bg-success text-black mx-2" to="/login">Login</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="btn bg-info text-black mx-2" to="/signup">Signup</Link>
                                    </li>
                                </> 
                                : 
                                <>
                                    <li className="nav-item">
                                        <div className="btn bg-white text-black mx-2" onClick={() => setCartView(true)}>
                                            My Cart{" "}<Badge pill bg='danger'>{cartData.length}</Badge>
                                        </div>
                                    </li>
                                    {
                                        cartView ? <Modal onClose={() => setCartView(false)}><Cart /></Modal> : null
                                    }
                                    <li className="nav-item">
                                        <div className="btn bg-danger text-black mx-2" to="/login" onClick={handleLogout}>Logout</div>
                                    </li>
                                </>
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar;
