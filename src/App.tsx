import { Navbar } from "./components";
import { Routes, Route } from "react-router-dom";
import { Articles, Features, Gallery, Home } from "./pages";
import { Footer } from "./sections";

export default function App() {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="home" element={<Home />} />
				<Route path="articles" element={<Articles />} />
				<Route path="gallery" element={<Gallery />} />
				<Route path="features" element={<Features />} />
			</Routes>
			<Footer />
		</>
	);
}
