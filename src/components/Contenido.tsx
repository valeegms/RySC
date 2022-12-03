import SectionCard, {
	SectionCardAmber,
	SectionPhoto,
	SectionTitle,
} from "./ui/SectionCard";

export const Contenido = () => {
	return (
		<section className="pt-8 flex justify-around items-center">
			<section className="grid gap-8">
				<div className="card-container flex gap-8">
					<SectionCard>
						<div className="front">
							<SectionPhoto width={200} path="./assets/img/connectivity.svg" />
							<SectionTitle title="Seguridad en la comunicación de datos en una red" />
						</div>
						<section className="back">
							<h3 className="text-center text-gray-800 text-lg font-semibold">
								Secciones
							</h3>
							<div className="flex flex-col gap-4">
								<button className="border border-violet-700 text-violet-700 font-semibold hover:bg-violet-100 text-sm py-2 px-6 rounded-[4px] ">
									Introducción
								</button>
								<button className="border border-violet-700 text-violet-700 font-semibold hover:bg-violet-100 text-sm py-2 px-6 rounded-[4px] ">
									Redes Perimetrales
								</button>
								<button className="border border-violet-700 text-violet-700 font-semibold hover:bg-violet-100 text-sm py-2 px-6 rounded-[4px] ">
									HoneyNets
								</button>
							</div>
						</section>
					</SectionCard>
					<SectionCardAmber>
						<SectionPhoto width={200} path="./assets/img/navegating.svg" />
						<SectionTitle title="Internet de las Cosas" />
					</SectionCardAmber>
				</div>
				<div className="flex gap-8">
					<SectionCardAmber>
						<SectionPhoto width={200} path="./assets/img/secure-server.svg" />
						<SectionTitle title="Seguridad en la web" />
					</SectionCardAmber>
					<SectionCard>
						<SectionPhoto width={200} path="./assets/img/socket.svg" />
						<SectionTitle title="Programación de aplicaciones con sockets" />
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
