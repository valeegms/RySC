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
					<Route path="/RySC/sockets" element={<Sockets />} />
					<Route path="/RySC/seguridad-web/" element={<SeguridadWeb />} />
					<Route path="/RySC/iot/" element={<IoT />} />
					<Route
						path="/RySC/seguridad-datos-red/"
						element={<SeguridadDatosWeb />}
					/>
					<Route path="/RySC/nosotros" element={<Nosotros />} />
				</Routes>
			</section>
		</main>
	);
};
