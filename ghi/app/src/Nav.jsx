import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import "./index.css";

function Nav() {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (dropdownName) => {
    if (activeDropdown === dropdownName) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(dropdownName);
    }
  };

  const closeDropdown = () => {
    setActiveDropdown(null);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: '#1a472a' }}>
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">CarCar</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" onClick={() => toggleDropdown('inventory')}>
                Inventory
              </a>
              {activeDropdown === 'inventory' && (
                <ul className="dropdown-menu show">
                  <li><NavLink to='/manufacturers' className="dropdown-item" onClick={closeDropdown}>Manufacturers</NavLink></li>
                  <li><NavLink to='/manufacturers/create' className="dropdown-item" onClick={closeDropdown}>Create Manufacturer</NavLink></li>
                  <li><NavLink to='/models' className="dropdown-item" onClick={closeDropdown}>Models</NavLink></li>
                  <li><NavLink to='/models/create' className="dropdown-item" onClick={closeDropdown}>Create Model</NavLink></li>
                  <li><NavLink to='/automobiles' className="dropdown-item" onClick={closeDropdown}>Automobiles</NavLink></li>
                  <li><NavLink to="/automobiles/create" className="dropdown-item" onClick={closeDropdown}>Create Automobile</NavLink></li>
                </ul>
              )}
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" onClick={() => toggleDropdown('sales')}>
                Sales
              </a>
              {activeDropdown === 'sales' && (
                <ul className="dropdown-menu show">
                  <li><NavLink to="/salespeople" className="dropdown-item" onClick={closeDropdown}>Salespeople</NavLink></li>
                  <li><NavLink to="/salespeople/create" className="dropdown-item" onClick={closeDropdown}>Add Salesperson</NavLink></li>
                  <li><NavLink to="/customers" className="dropdown-item" onClick={closeDropdown}>Customers</NavLink></li>
                  <li><NavLink to="/customers/create" className="dropdown-item" onClick={closeDropdown}>Add Customer</NavLink></li>
                  <li><NavLink to="/sales" className="dropdown-item" onClick={closeDropdown}>Sales</NavLink></li>
                  <li><NavLink to="/sales/create" className="dropdown-item" onClick={closeDropdown}>Record Sale</NavLink></li>
                  <li><NavLink to="/sales/history" className="dropdown-item" onClick={closeDropdown}>Sales History</NavLink></li>
                </ul>
              )}
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" onClick={() => toggleDropdown('service')}>
                Service
              </a>
              {activeDropdown === 'service' && (
                <ul className="dropdown-menu show">
                  <li><NavLink to="/technicians" className="dropdown-item" onClick={closeDropdown}>Technicians</NavLink></li>
                  <li><NavLink to="/technicians/create" className="dropdown-item" onClick={closeDropdown}>Add Technician</NavLink></li>
                  <li><NavLink to="/appointments" className="dropdown-item" onClick={closeDropdown}>Appointments</NavLink></li>
                  <li><NavLink to="/appointments/create" className="dropdown-item" onClick={closeDropdown}>Add Appointment</NavLink></li>
                  <li><NavLink to="/appointments/history" className="dropdown-item" onClick={closeDropdown}>Appointments History</NavLink></li>
                </ul>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
