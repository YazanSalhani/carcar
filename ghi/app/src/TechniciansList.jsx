import React, { useState,useEffect } from "react";


function TechniciansList() {
    const [technicians, setTechnicians] = useState([]);

    const fetchData = async () => {
        const url = 'http://localhost:8080/api/technicians/';

        try {
            const response = await fetch(url);
            if (response.ok) {
                const data = await response.json();
                setTechnicians(data.technicians)
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
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>Employee ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                </tr>
            </thead>
            <tbody>
            {technicians.map(technician => {
                return (
                    <tr key={technician.id}>
                        <td>{ technician.employee_id }</td>
                        <td>{ technician.first_name }</td>
                        <td>{ technician.last_name }</td>
                    </tr>
                );
            })}
            </tbody>
        </table>
    );
}

export default TechniciansList
