import React, { useState,useEffect } from "react";

function AutomobileList() {
    const [automobiles, setAutomobiles] = useState([]);

    const fetchData = async () => {
        const url = 'http://localhost:8100/api/automobiles/';

        try {
            const response = await fetch(url);
            if (response.ok) {
                const data = await response.json();
                setAutomobiles(data.autos)
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
                    <th>VIN</th>
                    <th>Color</th>
                    <th>Year</th>
                    <th>Model</th>
                    <th>Manufacturer</th>
                    <th>Sold</th>
                </tr>
            </thead>
            <tbody>
            {automobiles.map(automobile => {
                let sold;
                if (automobile.sold) {
                    sold = "Yes"
                } else {
                    sold = "No"
                }
                return (
                    <tr key={automobile.href}>
                        <td>{ automobile.vin }</td>
                        <td>{ automobile.color}</td>
                        <td>{ automobile.year }</td>
                        <td>{ automobile.model.name}</td>
                        <td>{ automobile.model.manufacturer.name}</td>
                        <td>{sold}</td>
                    </tr>
                );
            })}
            </tbody>
        </table>
    );
}

export default AutomobileList
