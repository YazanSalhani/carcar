import React, { useState } from 'react';

function CustomerForm() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [address, setAddress] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    function handleFirstNameChange(event) {
        const value = event.target.value;
        setFirstName(value);
    }

    function handleLastNameChange(event) {
        const value = event.target.value;
        setLastName(value);
    }

    function handleAddressChange(event) {
        const value = event.target.value;
        setAddress(value);
    }

    function handlePhoneNumberChange(event) {
        const value = event.target.value;
        setPhoneNumber(value)
    }

    async function handleSubmit(event) {
        event.preventDefault();

        const data = {}

        data.first_name = firstName;
        data.last_name = lastName;
        data.address = address;
        data.phone_number = phoneNumber;

        const url = 'http://localhost:8090/api/customers/'
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
                const newCustomer = await response.json();

                setFirstName('');
                setLastName('');
                setAddress('');
                setPhoneNumber('');
            } else {
                console.error(`Error: ${response.status} ${response.statusText}`)
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
                  <h1>Add a Customer</h1>
                  <form onSubmit={handleSubmit} id="create-customer-form">
                    <div className="form-floating mb-3">
                      <input value={firstName} onChange={handleFirstNameChange} placeholder="First Name" required type="text" id="firstName" name="firstName" className="form-control" />
                      <label htmlFor="firstName">First Name</label>
                    </div>
                    <div className="form-floating mb-3">
                      <input value={lastName} onChange={handleLastNameChange} placeholder="Last Name" required type="text" id="lastName" name="lastName" className="form-control" />
                      <label htmlFor="lastName">Last Name</label>
                    </div>
                    <div className="form-floating mb-3">
                      <input value={address} onChange={handleAddressChange} placeholder="Address" required type="text" id="address" name="address" className="form-control" />
                      <label htmlFor="address">Address</label>
                    </div>
                    <div className="form-floating mb-3">
                      <input value={phoneNumber} onChange={handlePhoneNumberChange} placeholder="Phone Number" required type="text" id="phoneNumber" name="phoneNumber" className="form-control" />
                      <label htmlFor="phoneNumber">Phone Number</label>
                    </div>
                    <button className="btn btn-primary">Create</button>
                  </form>
                </div>
              </div>
            </div>
        </div>
        )
}

export default CustomerForm
