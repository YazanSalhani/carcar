import React from 'react';
import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">CarCar</NavLink>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="inventoryDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Inventory
              </a>
              <ul className="dropdown-menu" aria-labelledby="inventoryDropdown">
                <li><NavLink to='/manufacturers' className="dropdown-item">Manufacturers</NavLink></li>
                <li><NavLink to='/manufacturers/create' className="dropdown-item">Create Manufacturer</NavLink></li>
                <li><NavLink to='/models' className="dropdown-item">Models</NavLink></li>
                <li><NavLink to='/models/create' className="dropdown-item">Create Model</NavLink></li>
                <li><NavLink to='/automobiles' className="dropdown-item">Automobiles</NavLink></li>
                <li><NavLink to="/automobiles/create" className="dropdown-item">Create Automobile</NavLink></li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="salesDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Sales
              </a>
              <ul className="dropdown-menu" aria-labelledby="salesDropdown">
                <li><NavLink to="/salespeople" className="dropdown-item">Salespeople</NavLink></li>
                <li><NavLink to="/salespeople/create" className="dropdown-item">Add Salesperson</NavLink></li>
                <li><NavLink to="/customers" className="dropdown-item">Customers</NavLink></li>
                <li><NavLink to="/customers/create" className="dropdown-item">Add Customer</NavLink></li>
                <li><NavLink to="/sales" className="dropdown-item">Sales</NavLink></li>
                <li><NavLink to="/sales/create" className="dropdown-item">Record Sale</NavLink></li>
                <li><NavLink to="/sales/history" className="dropdown-item">Sales History</NavLink></li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="serviceDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Service
              </a>
              <ul className="dropdown-menu" aria-labelledby="serviceDropdown">
                <li><NavLink to="/technicians" className="dropdown-item">Technicians</NavLink></li>
                <li><NavLink to="/technicians/create" className="dropdown-item">Add Technician</NavLink></li>
                <li><NavLink to="/appointments" className="dropdown-item">Appointments</NavLink></li>
                <li><NavLink to="/appointments/create" className="dropdown-item">Add Appointment</NavLink></li>
                <li><NavLink to="/appointments/history" className="dropdown-item">Appointments History</NavLink></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
