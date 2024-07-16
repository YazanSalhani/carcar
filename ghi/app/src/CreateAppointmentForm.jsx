import React, { useState, useEffect } from 'react';


function CreateAppointmentForm() {
    const [vin, setVin] = useState('');
    const [customer, setCustomer] = useState('');
    const [dateTime, setDateTime] = useState('');
    const [technician, setTechnician] = useState('');
    const [technicians, setTechnicians] = useState([]);
    const [reason, setReason] = useState('');

    const fetchData = async () => {
        const url = 'http://localhost:8080/api/technicians/'

        const response = await fetch(url);

        if (response.ok) {
            const data = await response.json();

            setTechnicians(data.technicians);
        }
    }


    function handleCustomerChange(event) {
        const value = event.target.value;
        setCustomer(value);
    }

    function handleDateTimeChange(event) {
        const value = event.target.value;
        setDateTime(value);
    }

    function handleVinChange(event) {
        const value = event.target.value;
        setVin(value);
    }

    function handleTechnicianChange(event) {
        const value = event.target.value;
        setTechnician(value);
    }

    function handleReasonChange(event) {
        const value = event.target.value;
        setReason(value);
    }


    async function handleSubmit(event) {
        event.preventDefault();

        const data = {}

        data.customer = customer;
        data.vin = vin;
        data.technician = technician;
        data.reason = reason;
        data.date_time = dateTime



        const url = 'http://localhost:8080/api/appointments/'
        const fetchConfig = {
            method: 'post',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            }
        }

        try {
            const response = await fetch (url, fetchConfig);
            if (response.ok) {
                const newAppointment = await response.json();

                setCustomer('');
                setTechnician('');
                setVin('');
                setReason('');
                setDateTime('');

            } else {
                console.error(`Error: ${response.status} ${response.statusText}`);
            }
        } catch (error) {
            console.error('Fetch error:', error);
        }
    }

    useEffect( () => {
        fetchData();
    }, []);

    return (
        <div className="container">
            <div className="row">
                <div className="offset-3 col-6">
                    <div className="shadow p-4 mt-4">
                    <h1>Create a service appointment</h1>
                    <form onSubmit={handleSubmit} id="create-automobile-form">
                        <div className="form-floating mb-3">
                        <input value={vin} onChange={handleVinChange} placeholder="vin" required type="text" id="vin" name="vin" className="form-control" />
                        <label htmlFor="vin">Vin</label>
                        </div>
                        <div className="form-floating mb-3">
                        <input value={customer} onChange={handleCustomerChange} placeholder="customer" required type="text" id="customer" name="customer" className="form-control" />
                        <label htmlFor="customer">customer</label>
                        </div>
                        <div className="form-floating mb-3">
                        <input value={dateTime} onChange={handleDateTimeChange} placeholder="dateTime" required type="datetime-local" id="dateTime" name="dateTime" className="form-control" />
                        <label htmlFor="dateTime">DateTime</label>
                        </div>
                        <div className="mb-3">
                        <select value={technician} onChange={handleTechnicianChange} required key="technician" name="technician" className="form-select">
                            <option value="">Choose a technician</option>
                            {technicians.map(technician => {
                                return (
                                    <option key={technician.id} value={technician.id}>
                                        {technician.first_name} {technician.last_name}
                                    </option>
                                )
                            })}
                        </select>
                        </div>
                        <div className="form-floating mb-3">
                        <input value={reason} onChange={handleReasonChange} placeholder="reason" required type="text" id="reason" name="reason" className="form-control" />
                        <label htmlFor="reason">Reason</label>
                        </div>
                        <button className="btn btn-primary">Create</button>
                    </form>
                    </div>
                </div>
            </div>
        </div>
        )
}

export default CreateAppointmentForm
