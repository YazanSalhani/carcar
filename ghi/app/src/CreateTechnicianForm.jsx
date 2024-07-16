import React, { useState } from 'react';


function CreateTechnicianForm() {
    const [FirstName, setFirstName] = useState('');
    const [LastName, setLastName] = useState('');
    const [EmployeeId, setEmployeeId] = useState('');


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

        data.first_name = FirstName;
        data.last_name = LastName;
        data.employee_id = EmployeeId;


        const url = 'http://localhost:8080/api/technicians/'
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
                const newTechnician = await response.json();

                setFirstName('');
                setLastName('');
                setEmployeeId('');
            } else {
                console.error(`Error: ${response.status} ${response.statusText}`);
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
                        <h1>Add a Technician</h1>
                        <form onSubmit={handleSubmit} id="create-conference-form">
                            <div className="form-floating mb-3">
                                <input value={FirstName} onChange={handleFirstNameChange} placeholder="First name" required type="text" name="FirstName" className="form-control" />
                                <label htmlFor="FirstName">First Name</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input value={LastName} onChange={handleLastNameChange} placeholder="Last name" required type="text" name="LastName" className="form-control" />
                                <label htmlFor="FirstName">Last Name</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input value={EmployeeId} onChange={handleEmployeeIdChange} placeholder="Employee ID" required type="text" name="EmployeeId" className="form-control" />
                                <label htmlFor="FirstName">Employee Id</label>
                            </div>
                            <button className="btn btn-primary">Create</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        )
}

export default CreateTechnicianForm
