import React, { useState, useEffect } from 'react';

function SalesHistory() {
    const [salespeople, setSalespeople] = useState([]);
    const [sales, setSales] = useState([]);
    const [selectedSalesperson, setSelectedSalesperson] = useState('');


    const fetchSalespeople = async () => {
        const url = 'http://localhost:8090/api/salespeople/'

        try {
            const response = await fetch(url);

            if (response.ok) {
                const data = await response.json();
                setSalespeople(data.salespeople);
            } else {
                console.error(response);
            }
        } catch (error) {
            console.error(error);
        }
    }

    const fetchSales = async () => {
        const url = 'http://localhost:8090/api/sales/'

        try {
            const response = await fetch(url);

            if (response.ok) {
                const data = await response.json();
                setSales(data.sales);
            } else {
                console.error(response);
            }
        } catch (error) {
            console.error(error);
        }
    }

    function handleSelectedSalespersonChange(event) {
        const value = event.target.value
        setSelectedSalesperson(value);
    }

    useEffect( () => {
        fetchSalespeople();
        fetchSales();
    }, []);

    return (
        <div>
            <h1>Salesperson History</h1>
            <div className="mb-3">
                    <label htmlFor="salesperson">Salesperson</label>
                    <select
                    value={selectedSalesperson}
                    onChange={handleSelectedSalespersonChange}
                    required
                    id="salesperson"
                    key="salesperson.id"
                    name="salesperson"
                    className="form-select"
                    >
                    <option value="">Choose a salesperson</option>
                    {salespeople.map(salesperson => {
                        return (
                        <option key={salesperson.id} value={salesperson.id}>
                            {salesperson.first_name} {salesperson.last_name}: {salesperson.employee_id}
                        </option>
                        );
                    })}
                    </select>
                </div>
            <table className="table table-striped">
            <thead>
                <tr>
                    <th>Salesperson Employee ID</th>
                    <th>Salesperson Name</th>
                    <th>Customer</th>
                    <th>VIN</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
            {sales.map(sale => {
                if (sale.salesperson.id == selectedSalesperson) {
                    return (
                        <tr key={sale.id}>
                            <td>{ sale.salesperson.employee_id}</td>
                            <td>{ sale.salesperson.first_name } {sale.salesperson.last_name}</td>
                            <td>{ sale.customer.first_name } { sale.customer.last_name }</td>
                            <td>{ sale.automobile.vin }</td>
                            <td>${ sale.price }</td>
                        </tr>
                    );
                }
            })}
            </tbody>
        </table>
        </div>
    );

}

export default SalesHistory
