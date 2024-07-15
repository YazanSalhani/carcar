import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./MainPage";
import Nav from "./Nav";
import ManufacturerList from "./ManufacturerList";
import AutomobileList from "./AutomobileList";
import ModelForm from "./ModelForm";

function App() {
	return (
		<BrowserRouter>
			<Nav />
			<div className="container">
				<Routes>
					<Route path="/" element={<MainPage />} />
					<Route path="/manufacturers" element={<ManufacturerList />} />
					<Route path="/automobiles" element={<AutomobileList />} />
					<Route path="/models/create" element={<ModelForm />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
