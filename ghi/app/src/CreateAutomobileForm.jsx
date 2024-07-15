import React, { useState, useEffect } from 'react';


function CreateAutomobileForm() {
    const [models, setModels] = useState([]);
    const [color, setColor] = useState('');
    const [year, setYear] = useState('');
    const [vin, setVin] = useState('');
    const [model, setModel] = useState('');

    const fetchData = async () => {
        const url = 'http://localhost:8100/api/models/'

        const response = await fetch(url);

        if (response.ok) {
            const data = await response.json();

            setModels(data.models);
        }
    }

    function handleColorChange(event) {
        const value = event.target.value;
        setColor(value);
    }

    function handleYearChange(event) {
        const value = event.target.value;
        setYear(value);
    }
    function handleVinChange(event) {
        const value = event.target.value;
        setVin(value);
    }
    function handleModelChange(event) {
        const value = event.target.value;
        setModel(value);
    }

    async function handleSubmit(event) {
        event.preventDefault();

        const data = {}

        data.color = color;
        data.year = year;
        data.vin = vin;
        data.model_id = model;



        const url = 'http://localhost:8100/api/automobiles/'
        const fetchConfig = {
            method: 'post',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            }
        }

        try {
            const response = await fetch (url, fetchConfig);
            if (response.ok) {
                const newAutomobile = await response.json();

                setColor('');
                setYear('');
                setVin('');
                setModel('');
            } else {
                console.error(`Error: ${response.status} ${response.statusText}`);
            }
        } catch (error) {
            console.error('Fetch error:', error);
        }
    }

    useEffect( () => {
        fetchData();
    }, []);

    return (
        <div className="container">
            <div className="row">
              <div className="offset-3 col-6">
                <div className="shadow p-4 mt-4">
                  <h1>Add an automobile to inventory</h1>
                  <form onSubmit={handleSubmit} id="create-automobile-form">
                    <div className="form-floating mb-3">
                      <input value={color} onChange={handleColorChange} placeholder="Color" required type="text" id="color" name="color" className="form-control" />
                      <label htmlFor="color">Color</label>
                    </div>
                    <div className="form-floating mb-3">
                      <input value={year} onChange={handleYearChange} placeholder="Year" required type="number" id="year" name="year" className="form-control" />
                      <label htmlFor="year">Year</label>
                    </div>
                    <div className="form-floating mb-3">
                      <input value={vin} onChange={handleVinChange} placeholder="VIN" required type="number" id="vin" name="vin" className="form-control" />
                      <label htmlFor="vin">VIN</label>
                    </div>
                    <div className="mb-3">
                      <select value={model} onChange={handleModelChange} required key="model" name="model" className="form-select">
                        <option value="">Choose a model</option>
                        {models.map(model => {
                            return (
                                <option key={model.href} value={model.id}>
                                    {model.name}
                                </option>
                            )
                        })}
                      </select>
                    </div>
                    <button className="btn btn-primary">Create</button>
                  </form>
                </div>
              </div>
            </div>
        </div>
        )
}

export default CreateAutomobileForm
