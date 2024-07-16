import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./MainPage";
import Nav from "./Nav";
import VehicleModelList from "./VehicleModelList";
import CreateManufacturerForm from "./CreateManufacturerForm";
import CreateAutomobileForm from "./CreateAutomobileForm";
import ManufacturerList from "./ManufacturerList";
import AutomobileList from "./AutomobileList";
import ModelForm from "./ModelForm";
import SalespersonList from "./SalespersonList";
import CustomerList from "./CustomerList";


function App() {
	return (
		<BrowserRouter>
			<Nav />
			<div className="container">
				<Routes>
					<Route path="/" element={<MainPage />} />
					<Route path="/models" element={<VehicleModelList />} />
					<Route path="/manufacturers/create" element={<CreateManufacturerForm />} />
					<Route path="/automobiles/create" element={<CreateAutomobileForm />} />
					<Route path="/manufacturers" element={<ManufacturerList />} />
					<Route path="/automobiles" element={<AutomobileList />} />
					<Route path="/models/create" element={<ModelForm />} />
					<Route path="/salespeople" element={<SalespersonList />} />
					<Route path="/customers" element={<CustomerList />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
