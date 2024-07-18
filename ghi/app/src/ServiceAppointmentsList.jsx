import React, { useState,useEffect } from "react";


function ServiceAppointmentsList() {
    const [appointments, setAppointments] = useState([]);
    const [soldVins, setSoldVins] = useState([]);

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
        fetchSoldVins();
    }, []);

    async function appointmentCancel(id){
        const appointmentCancelUrl = `http://localhost:8080/api/appointments/${id}/cancel/`;

        const fetchConfig = {
            method: "put",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ status: 'cancelled' })
        };
        const response = await fetch(appointmentCancelUrl, fetchConfig);

        if (response.ok) {
            const data = await response.json();
            fetchData();
        }
    }

    async function appointmentFinish(id){
        const appointmentCancelUrl = `http://localhost:8080/api/appointments/${id}/finish/`;

        const fetchConfig = {
            method: "put",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ status: 'finished' })
        };
        const response = await fetch(appointmentCancelUrl, fetchConfig);

        if (response.ok) {
            const data = await response.json();
            fetchData();
        }
    }


    const fetchSoldVins = async () => {
        const automobilesurl = 'http://localhost:8100/api/automobiles/';

        try {
            const response = await fetch(automobilesurl);
            if (response.ok) {
                const data = await response.json();
                const soldVins = data.autos
                    .filter(car => car.sold === true)
                    .map(car => car.vin);
                setSoldVins(soldVins);
            } else {
                console.error(response)
            }
        } catch (error) {
            console.error(error);
        }
    }


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
                const isVip = soldVins.includes(appointment.vin) ? "Yes" : "No";
                if (appointment.status !== "cancelled" && appointment.status !== "finished") {
                    return (
                        <tr key={ appointment.id }>
                            <td>{ appointment.vin }</td>
                            <td>{ isVip }</td>
                            <td>{ appointment.customer }</td>
                            <td>{ appointment.date_time }</td>
                            <td>{ appointment.technician.first_name } { appointment.technician.last_name }</td>
                            <td>{ appointment.reason }</td>
                            <td>
                                <button onClick={() => appointmentCancel(appointment.id)} type="button" className="btn btn-danger">Cancel</button>
                                <button onClick={() => appointmentFinish(appointment.id)} type="button" className="btn btn-success">Finish</button>
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
