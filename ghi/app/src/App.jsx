import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./MainPage";
import Nav from "./Nav";
import VehicleModelList from "./VehicleModelList";
import CreateManufacturerForm from "./CreateManufacturerForm";
import CreateAutomobileForm from "./CreateAutomobileForm";
import ManufacturerList from "./ManufacturerList";
import AutomobileList from "./AutomobileList";
import ModelForm from "./ModelForm";
import CreateTechnicianForm from "./CreateTechnicianForm";
import CreateAppointmentForm from "./CreateAppointmentForm";
import TechniciansList from "./TechniciansList";
import ServiceAppointmentsList from "./ServiceAppointmentsList";
import ServiceHistoryList from "./ServiceHistoryList";

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
					<Route path="/technicians/create" element={<CreateTechnicianForm />} />
					<Route path="/appointments/create" element={<CreateAppointmentForm />} />
					<Route path="/technicians" element={<TechniciansList />} />
					<Route path="/appointments" element={<ServiceAppointmentsList />} />
					<Route path="/appointments/history" element={<ServiceHistoryList />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
