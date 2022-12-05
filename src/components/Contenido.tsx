import { NavLink } from "react-router-dom";
import SectionCard, {
	SectionCardAmber,
	SectionCardBack,
	SectionPhoto,
	SectionTitle,
} from "./ui/SectionCard";

export const Contenido = () => {
	return (
		<section className="pt-8 flex justify-around items-center">
			<section className="grid gap-8">
				<div className="flex gap-8">
					<SectionCard>
						<div className="front">
							<SectionPhoto width={200} path="./assets/img/connectivity.svg" />
							<SectionTitle title="Seguridad en la comunicación de datos en una red" />
						</div>
						<SectionCardBack>
							<NavLink to="/seguridad-datos-red/Intro">
								<button className="border border-violet-700 text-violet-700 font-semibold hover:bg-violet-100 text-sm py-2 px-6 rounded-[4px] ">
									Introducción
								</button>
							</NavLink>
							<NavLink to="/seguridad-datos-red/redes-perimetrales">
								<button className="border border-violet-700 text-violet-700 font-semibold hover:bg-violet-100 text-sm py-2 px-6 rounded-[4px] ">
									Redes Perimetrales
								</button>
							</NavLink>
							<NavLink to="/seguridad-datos-red/honeynets">
								<button className="border border-violet-700 text-violet-700 font-semibold hover:bg-violet-100 text-sm py-2 px-6 rounded-[4px] ">
									HoneyNets
								</button>
							</NavLink>
						</SectionCardBack>
					</SectionCard>
					<SectionCardAmber>
						<div className="front">
							<SectionPhoto width={200} path="./assets/img/navegating.svg" />
							<SectionTitle title="Internet de las Cosas" />
						</div>
						<SectionCardBack>
							<NavLink to="/iot/Intro">
								<button className="border border-violet-700 text-violet-700 font-semibold hover:bg-violet-100 text-sm py-2 px-6 rounded-[4px] ">
									Introducción
								</button>
							</NavLink>
							<NavLink to="/iot/datos-relevantes">
								<button className="border border-violet-700 text-violet-700 font-semibold hover:bg-violet-100 text-sm py-2 px-6 rounded-[4px] ">
									Datos relevantes
								</button>
							</NavLink>
							<NavLink to="/iot/aplicaciones-servicios">
								<button className="border border-violet-700 text-violet-700 font-semibold hover:bg-violet-100 text-sm py-2 px-6 rounded-[4px] ">
									Aplicaciones y servicios
								</button>
							</NavLink>
						</SectionCardBack>
					</SectionCardAmber>
				</div>
				<div className="flex gap-8">
					<SectionCardAmber>
						<div className="front">
							<SectionPhoto width={200} path="./assets/img/secure-server.svg" />
							<SectionTitle title="Seguridad en la web" />
						</div>
						<SectionCardBack>
							<NavLink to="/seguridad-web/Intro">
								<button className="border border-violet-700 text-violet-700 font-semibold hover:bg-violet-100 text-sm py-2 px-6 rounded-[4px] ">
									Introducción
								</button>
							</NavLink>
							<NavLink to="/seguridad-web/HTTPS">
								<button className="border border-violet-700 text-violet-700 font-semibold hover:bg-violet-100 text-sm py-2 px-6 rounded-[4px] ">
									HTTPS
								</button>
							</NavLink>
							<NavLink to="/seguridad-web/SSL">
								<button className="border border-violet-700 text-violet-700 font-semibold hover:bg-violet-100 text-sm py-2 px-6 rounded-[4px] ">
									SSL
								</button>
							</NavLink>
						</SectionCardBack>
					</SectionCardAmber>
					<SectionCard>
						<div className="front">
							<SectionPhoto width={200} path="./assets/img/socket.svg" />
							<SectionTitle title="Programación de aplicaciones con sockets" />
						</div>
						<SectionCardBack>
							<NavLink to="/sockets/Intro">
								<button className="border border-violet-700 text-violet-700 font-semibold hover:bg-violet-100 text-sm py-2 px-6 rounded-[4px] ">
									Introducción
								</button>
							</NavLink>
							<NavLink to="/sockets/sockets-tcp-java">
								<button className="border border-violet-700 text-violet-700 font-semibold hover:bg-violet-100 text-sm py-2 px-6 rounded-[4px] ">
									Sockets TCP en Java
								</button>
							</NavLink>
							<NavLink to="/sockets/sockets-udp-java">
								<button className="border border-violet-700 text-violet-700 font-semibold hover:bg-violet-100 text-sm py-2 px-6 rounded-[4px] ">
									Sockets UDP en Java
								</button>
							</NavLink>
						</SectionCardBack>
					</SectionCard>
				</div>
			</section>
			<div className="text-center">
				<h1 className="text-4xl font-semibold">Contenido</h1>
				<p className="text-lg">Temas que se explicarán dentro del sitio web.</p>
			</div>
		</section>
	);
};
