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
import SalesList from "./SalesList";
import SalespersonForm from "./SalespersonForm";
import CustomerForm from "./CustomerForm";
import SaleForm from "./SaleForm";
import SalesHistory from "./SalesHistory";
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
					<Route path="/salespeople" element={<SalespersonList />} />
					<Route path="/salespeople/create" element={<SalespersonForm />} />
					<Route path="/customers" element={<CustomerList />} />
					<Route path="/customers/create" element={<CustomerForm />} />
					<Route path="/sales" element={<SalesList />} />
					<Route path="/sales/create" element={<SaleForm />} />
					<Route path="/sales/history" element={<SalesHistory />} />
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
