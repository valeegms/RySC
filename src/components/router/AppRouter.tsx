import { Route, Routes } from "react-router-dom";
import { Home, Sockets, SeguridadWeb, SeguridadDatosWeb } from "..";
import { Navbar } from "../common";
import IoT from "../IoT";
import IntroIoT from "../IoT/IntroIoT";
import Nosotros from "../Nosotros";
import IntroRed from "../SeguridadDatosRed/IntroRed";
import { IntroWeb } from "../SeguridadWeb/IntroWeb";
import IntroSockets from "../Sockets/IntroSockets";

export const AppRouter = () => {
	return (
		<main>
			<nav>
				<Navbar />
			</nav>
			<section>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/sockets/*" element={<Sockets />} />
					<Route path="/sockets/Intro" element={<IntroSockets />} />
					<Route path="/seguridad-web/*" element={<SeguridadWeb />} />
					<Route path="/seguridad-web/Intro" element={<IntroWeb />} />
					<Route path="/iot/*" element={<IoT />} />
					<Route path="/iot/Intro" element={<IntroIoT />} />
					<Route
						path="/seguridad-datos-red/*"
						element={<SeguridadDatosWeb />}
					/>
					<Route path="/seguridad-datos-red/Intro" element={<IntroRed />} />
					<Route path="/nosotros" element={<Nosotros />} />
				</Routes>
			</section>
		</main>
	);
};
