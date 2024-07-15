import React, {useEffect, useState } from 'react';

function ModelForm() {
    const [modelName, setModelName] = useState('');
    const [pictureUrl, setPictureUrl] = useState('');
    const [manufacturer, setManufacturer] = useState('');
    const [manufacturers, setmanufacturers] = useState([]);

    const fetchData = async () => {
        const url = 'http://localhost:8100/api/manufacturers/';

        try {
            const response = await fetch(url);
                if (response.ok) {
                    const data = await response.json();
                    setmanufacturers(data.manufacturers);
                } else {
                    console.error(response)
                }
        } catch (error) {
            console.error(error)
        }
    }
    useEffect(() => {
        fetchData();
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const data = {};
        data.name = modelName;
        data.picture_url = pictureUrl;
        data.manufacturer_id = manufacturer;

        const modelUrl = 'http://localhost:8100/api/models/';
        const fetchConfig = {
            method: 'post',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        };
        const response = await fetch(modelUrl, fetchConfig);
        if (response.ok) {
            const newModel = await response.json();
            console.log(newModel);
            setModelName('');
            setPictureUrl('');
            setManufacturer('');
        }
    }
    const handleModelChange = (event) => {
        const value = event.target.value;
        setModelName(value);
    }

    const handlePictureUrlChange = (event) => {
        const value = event.target.value;
        setPictureUrl(value);
    }

    const handleManufacturerChange = (event) => {
        const value = event.target.value;
        setManufacturer(value);
    }

    return (
        <div className="row">
            <div className="offset-3 col-6">
            <div className="shadow p-4 mt-4">
                <h1>Create a vehicle model</h1>
                <form onSubmit={handleSubmit} id="create-location-form">
                <div className="form-floating mb-3">
                    <input value={modelName} onChange={handleModelChange} placeholder="Model name" required type="text" name="modelName" id="modelName" className="form-control" />
                    <label htmlFor="fabric">Model name</label>
                </div>
                <div className="form-floating mb-3">
                    <input value={pictureUrl} onChange={handlePictureUrlChange} placeholder="Picture URL" required type="text" name="pictureUrl" id="pictureUrl" className="form-control" />
                    <label htmlFor="picture">Picture URL</label>
                </div>
                <div className="mb-3">
                    <select value={manufacturer} onChange={handleManufacturerChange} required name="manufacturer" id="manufacturer" className="form-select">
                    <option value="">Choose a manufacturer</option>
                    {manufacturers.map(manufacturer => {
                        return (
                        <option key={manufacturer.href} value={manufacturer.id}>
                            {manufacturer.name}
                        </option>
                        );
                    })}
                    </select>
                </div>
                <button className="btn btn-primary">Create</button>
                </form>
            </div>
            </div>
        </div>
        );
}

export default ModelForm
