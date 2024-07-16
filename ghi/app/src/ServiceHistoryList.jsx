import React, { useState, useEffect } from "react";

function ServiceHistoryList() {
    const [appointments, setAppointments] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [displayedAppointments, setDisplayedAppointments] = useState([]);

    const fetchData = async () => {
        const url = 'http://localhost:8080/api/appointments/';

        try {
            const response = await fetch(url);
            if (response.ok) {
                const data = await response.json();
                setAppointments(data.appointments);
                setDisplayedAppointments(data.appointments);
            } else {
                console.error(response);
            }
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSearch = () => {
        const filtered = appointments.filter(appointment =>
            appointment.vin.includes(searchTerm)
        );
        setDisplayedAppointments(filtered);
    };

    return (
        <>
        <div>
            <h1>Service Appointments</h1>
        </div>
        <div className="input-group mb-3">
            <input
                type="text"
                className="form-control"
                placeholder="Search by VIN"
                aria-label="Search by VIN"
                aria-describedby="basic-addon2"
                value={searchTerm}
                onChange={handleSearchChange}
            />
            <div className="input-group-append">
                <button className="btn btn-outline-secondary" type="button" onClick={handleSearch}>Search</button>
            </div>
        </div>
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>VIN</th>
                    <th>Is VIP?</th>
                    <th>Customer</th>
                    <th>Date/Time</th>
                    <th>Technician</th>
                    <th>Reason</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
            {displayedAppointments.map(appointment => (
                <tr key={appointment.id}>
                    <td>{appointment.vin}</td>
                    <td>{appointment.vip ? "Yes" : "No"}</td>
                    <td>{appointment.customer}</td>
                    <td>{appointment.date_time}</td>
                    <td>{appointment.technician.first_name} {appointment.technician.last_name}</td>
                    <td>{appointment.reason}</td>
                    <td>{appointment.status}</td>
                </tr>
            ))}
            </tbody>
        </table>
        </>
    );
}

export default ServiceHistoryList;
