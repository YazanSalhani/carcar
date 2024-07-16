import React, { useState, useEffect } from 'react';

function SaleForm() {
    const [automobiles, setAutomobiles] = useState([]);
    const [salespeople, setSalespeople] = useState([]);
    const [customers, setCustomers] = useState([]);
    const [automobile, setAutomobile] = useState('');
    const [salesperson, setSalesperson] = useState('');
    const [customer, setCustomer] = useState('');
    const [price, setPrice] = useState('');

    const fetchAutomobiles = async () => {
        const url = 'http://localhost:8100/api/automobiles/'

        const response = await fetch(url);

        if (response.ok) {
            const data = await response.json();
            setAutomobiles(data.autos);
        }
    }

    const fetchSalespeople = async () => {
        const url = 'http://localhost:8090/api/salespeople/'

        const response = await fetch(url);

        if (response.ok) {
            const data = await response.json();
            setSalespeople(data.salespeople);
        }
    }

    const fetchCustomers = async () => {
        const url = 'http://localhost:8090/api/customers/'

        const response = await fetch(url);

        if (response.ok) {
            const data = await response.json();
            setCustomers(data.customers);
        }
    }

    function handleAutomobileChange(event) {
        const value = event.target.value;
        setAutomobile(value);
    }

    function handleSalespersonChange(event) {
        const value = event.target.value;
        setSalesperson(value);
    }

    function handleCustomerChange(event) {
        const value = event.target.value;
        setCustomer(value);
    }

    function handlePriceChange(event) {
        const value = event.target.value;
        setPrice(value);
    }

    async function handleSubmit(event) {
        event.preventDefault();

        const data = {}

        data.automobile = automobile;
        data.salesperson = salesperson;
        data.customer = customer;
        data.price = price;
        console.log(data)

        const url = 'http://localhost:8090/api/sales/'
        const fetchConfig = {
            method: 'post',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            }
        }

        try {
            const response = await fetch(url, fetchConfig)

            if (response.ok) {
                const newSale = await response.json();

                setAutomobile('');
                setSalesperson('');
                setCustomer('');
                setPrice('');
            } else {
                console.error(`Error: ${response.status} ${response.statusText}`)
            }
        } catch (error) {
            console.error('Fetch error:', error)
        }
    }

    useEffect( () => {
        fetchAutomobiles();
        fetchCustomers();
        fetchSalespeople();
    }, [])


    return (
    <div className="container">
        <div className="row">
            <div className="offset-3 col-6">
            <div className="shadow p-4 mt-4">
                <h1>Record a new sale</h1>
                <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="automobile">Automobile VIN</label>
                    <select
                    value={automobile}
                    onChange={handleAutomobileChange}
                    required
                    id="automobile"
                    key="automobile.vin"
                    name="automobile"
                    className="form-select"
                    >
                    <option value="">Choose an automobile VIN</option>
                    {automobiles.map(automobile => {
                        if (automobile.sold === false){
                            return (
                                <option key={automobile.vin} value={automobile.id}>
                                    {automobile.vin}
                                </option>
                            )
                        }
                    })}
                    </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="salesperson">Salesperson</label>
                    <select
                    value={salesperson}
                    onChange={handleSalespersonChange}
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
                <div className="mb-3">
                    <label htmlFor="customer">Customer</label>
                    <select
                    value={customer}
                    onChange={handleCustomerChange}
                    required
                    id="customer"
                    key="customer.id"
                    name="customer"
                    className="form-select"
                    >
                    <option value="">Choose a customer</option>
                    {customers.map(customer => {
                        return (
                        <option key={customer.id} value={customer.id}>
                            {customer.first_name} {customer.last_name}
                        </option>
                        );
                    })}
                    </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="price">Price</label>
                    <input
                    value={price}
                    onChange={handlePriceChange}
                    placeholder="Price"
                    required
                    type="number"
                    id="price"
                    name="price"
                    className="form-control"
                    />
                </div>
                <button className="btn btn-primary">Create</button>
                </form>
            </div>
            </div>
        </div>
    </div>
    );
}

export default SaleForm
