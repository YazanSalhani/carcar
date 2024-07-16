import React, { useState,useEffect } from "react";


function ServiceAppointmentsList() {
    const [appointments, setAppointments] = useState([]);

    const fetchData = async () => {
        const url = 'http://localhost:8080/api/appointments/';

        try {
            const response = await fetch(url);
            if (response.ok) {
                const data = await response.json();
                setAppointments(data.appointments)
            } else {
                console.error(response)
            }
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
        <div>
            <h1>Service Appointments</h1>
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
                </tr>
            </thead>
            <tbody>
            {appointments.map(appointment => {
                let vip;
                if (appointment.vip) {
                    vip = "Yes"
                } else {
                    vip = "No"
                }
                if (appointment.status !== "canceled" || appointment.status !== "finished") {
                    return (
                        <tr key={ appointment.id }>
                            <td>{ appointment.vin }</td>
                            <td>{ vip }</td>
                            <td>{ appointment.customer }</td>
                            <td>{ appointment.date_time }</td>
                            <td>{ appointment.technician.first_name } { appointment.technician.last_name }</td>
                            <td>{ appointment.reason }</td>
                            <td>
                                <button type="button" className="btn btn-danger">Cancel</button>
                                <button type="button" className="btn btn-success">Finish</button>
                            </td>
                        </tr>
                    );
                }
            })}
            </tbody>
        </table>
        </>
    );
}

export default ServiceAppointmentsList
