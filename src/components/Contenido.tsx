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
							<button className="border border-violet-700 text-violet-700 font-semibold hover:bg-violet-100 text-sm py-2 px-6 rounded-[4px] ">
								Introducción
							</button>
							<button className="border border-violet-700 text-violet-700 font-semibold hover:bg-violet-100 text-sm py-2 px-6 rounded-[4px] ">
								Redes Perimetrales
							</button>
							<button className="border border-violet-700 text-violet-700 font-semibold hover:bg-violet-100 text-sm py-2 px-6 rounded-[4px] ">
								HoneyNets
							</button>
						</SectionCardBack>
					</SectionCard>
					<SectionCardAmber>
						<div className="front">
							<SectionPhoto width={200} path="./assets/img/navegating.svg" />
							<SectionTitle title="Internet de las Cosas" />
						</div>
						<SectionCardBack>
							<button className="border border-violet-700 text-violet-700 font-semibold hover:bg-violet-100 text-sm py-2 px-6 rounded-[4px] ">
								Introducción
							</button>
							<button className="border border-violet-700 text-violet-700 font-semibold hover:bg-violet-100 text-sm py-2 px-6 rounded-[4px] ">
								Sección 1
							</button>
							<button className="border border-violet-700 text-violet-700 font-semibold hover:bg-violet-100 text-sm py-2 px-6 rounded-[4px] ">
								Sección 2
							</button>
						</SectionCardBack>
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
