import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./MainPage";
import Nav from "./Nav";
import VehicleModelList from "./VehicleModelList";
import CreateManufacturerForm from "./CreateManufacturerForm";
import CreateAutomobileForm from "./CreateAutomobileForm";

function App() {
	return (
		<BrowserRouter>
			<Nav />
			<div className="container">
				<Routes>
					<Route path="/" element={<MainPage />} />
					<Route path="/models/" element={<VehicleModelList />} />
					<Route path="/manufacturers/create/" element={<CreateManufacturerForm />} />
					<Route path="/automobiles/create/" element={<CreateAutomobileForm />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
