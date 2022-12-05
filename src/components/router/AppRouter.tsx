import { Route, Routes } from "react-router-dom";
import { Home, Sockets, SeguridadWeb, SeguridadDatosWeb } from "..";
import { Navbar } from "../common";
import IoT from "../IoT";
import AplicacionesServicios from "../IoT/AplicacionesServicios";
import DatosRelevantes from "../IoT/DatosRelevantes";
import IntroIoT from "../IoT/IntroIoT";
import Nosotros from "../Nosotros";
import HoneyNets from "../SeguridadDatosRed/HoneyNets";
import IntroRed from "../SeguridadDatosRed/IntroRed";
import Perimetrales from "../SeguridadDatosRed/Perimetrales";
import HTTPS from "../SeguridadWeb/HTTPS";
import { IntroWeb } from "../SeguridadWeb/IntroWeb";
import SSL from "../SeguridadWeb/SSL";
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
					<Route path="/seguridad-web/https" element={<HTTPS />} />
					<Route path="/seguridad-web/ssl" element={<SSL />} />
					<Route path="/iot/*" element={<IoT />} />
					<Route path="/iot/Intro" element={<IntroIoT />} />
					<Route path="/iot/datos-relevantes" element={<DatosRelevantes />} />
					<Route
						path="/iot/aplicaciones-servicios"
						element={<AplicacionesServicios />}
					/>
					<Route
						path="/seguridad-datos-red/*"
						element={<SeguridadDatosWeb />}
					/>
					<Route path="/seguridad-datos-red/Intro" element={<IntroRed />} />
					<Route
						path="/seguridad-datos-red/redes-perimetrales"
						element={<Perimetrales />}
					/>
					<Route
						path="/seguridad-datos-red/honeynets"
						element={<HoneyNets />}
					/>
					<Route path="/nosotros" element={<Nosotros />} />
				</Routes>
			</section>
		</main>
	);
};
