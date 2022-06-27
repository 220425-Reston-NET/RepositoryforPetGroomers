import React from 'react';
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">Mobile Pet Groomers</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <Link to="/" className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/register" className="nav-link">Register</Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/welcome" className="nav-link">Login</Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/Services" className="nav-link">Services</Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/Searchgroomers" className="nav-link">Customer Appointment Form</Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/appointments" className="nav-link">Appointments</Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/Confirmedpage" className="nav-link">Confirmed Page</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  );
}

export default Nav