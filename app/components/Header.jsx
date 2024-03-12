import React from 'react'
import { useNavigate } from '@remix-run/react';

function header() {
    const navigation = useNavigate();

    const handleClick = () => {
      // Make sure the route is defined in your Remix routes
      navigation("/app/newpage");
    };

    const handleClick1 = () => {
        navigation("/app/products");
    }

    const handleClick2 = () => {
        navigation("/app/producttable");
    }

    const handleClick3 = () => {
        navigation("/app/register");
    }

    const handleClick4 = () => {
        navigation("/app/login");
    }
    
    return (
        <div>
            <div className="header">
                <div className="selhono">
                    <img className="vec" src="\image\logo (1) 3.png" alt="" />
                </div>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className=" ban1 navbar-nav search">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" onClick={handleClick} style={{ cursor: 'pointer' }}>Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" onClick={handleClick1} style={{cursor: 'pointer'}}>Products</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" onClick={handleClick2} style={{cursor: 'pointer'}}>ProductsTable</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" onClick={handleClick3} style={{cursor: 'pointer'}}>Register</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" onClick={handleClick4} style={{cursor: 'pointer'}}>Login</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Alumni</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Careers</a>
                        </li>
                        <button className="btn btn-primary" 
                        onClick={handleClick}
                        >Contact Us</button>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default header
