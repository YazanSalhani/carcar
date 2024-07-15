import React, { useState,useEffect } from "react";


function ManufacturerList() {
    const [manufacturers, setManufacturers] = useState([]);

    const fetchData = async () => {
        const url = 'http://localhost:8100/api/manufacturers/';

        try {
            const response = await fetch(url);
            if (response.ok) {
                const data = await response.json();
                setManufacturers(data.manufacturers)
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
                    <th>Name</th>
                </tr>
            </thead>
            <tbody>
            {manufacturers.map(manufacturer => {
                return (
                    <tr key={manufacturer.href}>
                        <td>{ manufacturer.name }</td>
                    </tr>
                );
            })}
            </tbody>
        </table>
    );
}

export default ManufacturerList
