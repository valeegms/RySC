import { Route, Routes } from "react-router-dom";
import { Home, Sockets, SeguridadWeb, SeguridadDatosWeb } from "..";
import { Navbar } from "../common";
import IoT from "../IoT";
import Nosotros from "../Nosotros";

export const AppRouter = () => {
	return (
		<main>
			<nav>
				<Navbar />
			</nav>
			<section>
				<Routes>
					<Route path="/RySC/" element={<Home />} />
					<Route path="/sockets" element={<Sockets />} />
					<Route path="/seguridad-web/" element={<SeguridadWeb />} />
					<Route path="/iot/" element={<IoT />} />
					<Route path="/seguridad-datos-red/" element={<SeguridadDatosWeb />} />
					<Route path="/nosotros" element={<Nosotros />} />
				</Routes>
			</section>
		</main>
	);
};
