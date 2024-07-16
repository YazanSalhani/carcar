import React, { useState, useEffect } from 'react';

function SalespersonForm() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [employeeId, setEmployeeId] = useState('');

    function handleFirstNameChange(event) {
        const value = event.target.value;
        setFirstName(value);
    }

    function handleLastNameChange(event) {
        const value = event.target.value;
        setLastName(value);
    }

    function handleEmployeeIdChange(event) {
        const value = event.target.value;
        setEmployeeId(value);
    }

    async function handleSubmit(event) {
        event.preventDefault();

        const data = {}

        data.first_name = firstName;
        data.last_name = lastName;
        data.employee_id = employeeId;

        const url = 'http://localhost:8090/api/salespeople/'
        const fetchConfig = {
            method: 'post',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            }
        }

        try {
            const response = await fetch(url, fetchConfig);

            if (response.ok) {
                const newSalesperson = await response.json();

                setFirstName('');
                setLastName('');
                setEmployeeId('');
            } else {
                console.error(`Error: ${response.status} ${response.statusText}`)
            }
        } catch (error) {
            console.error('Fetch error:', error);
        }
    }

    return (
        <div className="container">
            <div className="row">
              <div className="offset-3 col-6">
                <div className="shadow p-4 mt-4">
                  <h1>Add a Salesperson</h1>
                  <form onSubmit={handleSubmit} id="create-salesperson-form">
                    <div className="form-floating mb-3">
                      <input value={firstName} onChange={handleFirstNameChange} placeholder="First Name" required type="text" id="firstName" name="firstName" className="form-control" />
                      <label htmlFor="firstName">First Name</label>
                    </div>
                    <div className="form-floating mb-3">
                      <input value={lastName} onChange={handleLastNameChange} placeholder="Last Name" required type="text" id="lastName" name="lastName" className="form-control" />
                      <label htmlFor="lastName">Last Name</label>
                    </div>
                    <div className="form-floating mb-3">
                      <input value={employeeId} onChange={handleEmployeeIdChange} placeholder="Employee ID" required type="text" id="employeeId" name="employeeId" className="form-control" />
                      <label htmlFor="employeeId">Employee ID</label>
                    </div>
                    <button className="btn btn-primary">Create</button>
                  </form>
                </div>
              </div>
            </div>
        </div>
        )
}

export default SalespersonForm
