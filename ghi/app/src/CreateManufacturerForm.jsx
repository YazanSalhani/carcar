import React, { useState } from 'react';


function CreateManufacturerForm() {
    const [manufacturer, setManufacturer] = useState('');

    function handleManufacturerChange(event) {
        const value = event.target.value;
        setManufacturer(value);
    }


    async function handleSubmit(event) {
        event.preventDefault();

        const data = {}

        data.name = manufacturer

        const url = 'http://localhost:8100/api/manufacturers/'
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
                const newManufacturer = await response.json();

                setManufacturer('');
            } else {
                console.error(`Error: ${response.status} ${response.statusText}`);
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
                  <h1>Create a manufacturer</h1>
                  <form onSubmit={handleSubmit} id="create-conference-form">
                    <div className="form-floating mb-3">
                        <input value={manufacturer} onChange={handleManufacturerChange} placeholder="Manufacturer name" required type="text" name="manufacturer" className="form-control" />
                        <label htmlFor="fabric">Manufacturer name</label>
                    </div>
                    <button className="btn btn-primary">Create</button>
                  </form>
                </div>
              </div>
            </div>
        </div>
        )
}

export default CreateManufacturerForm
