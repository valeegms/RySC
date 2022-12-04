import { Badge } from "../ui";
import Article, {
	ArticleTitle,
	ArticleContent,
	ArticleSubtitle,
} from "../ui/Article/Article";

export default function AplicacionesServicios() {
	return (
		<Article>
			<Badge title="IoT" />
			<ArticleTitle title="Datos relevantes en la historia del IoT" />
			<ArticleContent>
				<p className="py-2 text-justify text-sm">
					A continuación, se presenta una breve lista de aplicaciones y
					servicios basados en la IoT. El objetivo de esta sección es comprender
					todas las posibles aplicaciones y servicios que la IoT podría
					proporcionar.
				</p>
				<section className="bg-violet-100 flex gap-8 items-center justify-between px-8 py-4 rounded-md mt-2">
					<section className="">
						<ArticleSubtitle title="&#x1F468;&#x200D;&#x1F469;&#x200D;&#x1F467;&#x200D;&#x1F466; Seguridad para todos los miembros de mi familia" />
						<p className="text-justify text-sm mt-2">
							El término “Internet de las Cosas” fue utilizado por primera vez
							por Kevin Ashton en 1999 que estaba trabajando en el campo de la
							tecnología RFID en red (identificación por radiofrecuencia) y
							tecnologías de detección emergentes. Sin embargo, la IoT "nació"
							en algún momento entre 2008 y 2009.
						</p>
						<ul className="pl-2 text-sm">
							<li className="pb-1 pt-3">
								<span className="font-semibold">1.</span> Aplicaciones domóticas
								incluyendo sensores y actuadores inteligentes para controlar
								electrodomésticos.
							</li>
							<li className="py-1">
								<span className="font-semibold">2.</span> Los servicios de salud
								y educación en el hogar.
							</li>
							<li className="py-1">
								<span className="font-semibold">3.</span> Control remoto de los
								tratamientos para los pacientes.
							</li>
							<li className="pt-1 pb-3">
								<span className="font-semibold">4.</span> Servicios de cable /
								satélite.
							</li>
							<li className="pt-1 pb-3">
								<span className="font-semibold">5.</span> Sistemas de
								almacenamiento / generación de energía.
							</li>
							<li className="pt-1 pb-3">
								<span className="font-semibold">6.</span> Los detectores de humo
								y alarmas.
							</li>
						</ul>
						<p className="py-2 text-justify text-sm"></p>
					</section>
					<img
						style={{ borderRadius: 4, height: 180 }}
						width={250}
						src="https://th.bing.com/th/id/R.3d17a9e8720c4447eca3f0cfe3159652?rik=ck0BZ8xBXR4pXA&riu=http%3a%2f%2ffractaliasystems.com%2fwp-content%2fuploads%2fIoT-1024x683.jpg&ehk=3m3kfuuOShe58OFID0mMIilxZhbXf8jnomfMvH3Ujm4%3d&risl=&pid=ImgRaw&r=0"
						alt=""
					/>
				</section>
				<section className="bg-gray-100 flex gap-8 justify-between items-center px-8 py-4 rounded-md mt-2">
					<section className="">
						<ArticleSubtitle title="&#x1F3D9; Ciudades inteligentes y transporte" />
						<ul className="pl-2 text-sm">
							<li className="pb-1 pt-3">
								<span className="font-semibold">1.</span> Optimización del
								transporte público y privado.
							</li>
							<li className="py-1">
								<span className="font-semibold">2.</span> Gestión inteligente de
								los servicios de estacionamiento y el tráfico en tiempo real.
							</li>
							<li className="py-1">
								<span className="font-semibold">3.</span> Gestión inteligente de
								semáforos en función de las colas de tráfico.
							</li>
							<li className="pt-1 pb-3">
								<span className="font-semibold">4.</span> Seguridad (cámaras,
								sensores inteligentes, información a los ciudadanos).
							</li>
							<li className="pt-1 pb-3">
								<span className="font-semibold">5.</span> Riego de parques y
								jardines.
							</li>
						</ul>
						<p className="py-2 text-justify text-sm"></p>
					</section>
					<img
						style={{ borderRadius: 4, height: 180 }}
						width={250}
						src="https://th.bing.com/th/id/R.d9ffd642b22043c85ffaa76755c62339?rik=xD%2bepBdHsJK61A&pid=ImgRaw&r=0"
						alt=""
					/>
				</section>
				<section className="bg-violet-100 flex gap-8 justify-between items-center px-8 py-4 rounded-md mt-2">
					<section className="">
						<ArticleSubtitle title="&#x1F469;&#x200D;&#x1F393; Educación" />
						<ul className="pl-2 text-sm">
							<li className="pb-1 pt-3">
								<span className="font-semibold">1.</span> Vinculación de aulas
								virtuales y físicas para el aprendizaje, e-learning más
								eficiente y accesible.
							</li>
							<li className="py-1">
								<span className="font-semibold">2.</span> Servicios de acceso a
								bibliotecas virtuales y portales educativos.
							</li>
							<li className="py-1">
								<span className="font-semibold">3.</span> Aprendizaje de idiomas
								extranjeros.
							</li>
						</ul>
						<p className="py-2 text-justify text-sm"></p>
					</section>
					<img
						style={{ borderRadius: 4, height: 180 }}
						width={250}
						src="https://business.blogthinkbig.com/wp-content/uploads/sites/2/2019/05/60-El-potencial-de-los-dispositivos-IoT-en-la-educaci%C2%A2n.jpg?w=800"
						alt=""
					/>
				</section>
				<section className="bg-gray-100 flex gap-8 justify-between items-center px-8 py-4 rounded-md mt-2">
					<section className="">
						<ArticleSubtitle title="&#x1F4F1; Electrónica de consumo" />
						<ul className="pl-2 text-sm">
							<li className="pb-1 pt-3">
								<span className="font-semibold">1.</span> Teléfonos
								inteligentes.
							</li>
							<li className="py-1">
								<span className="font-semibold">2.</span> Televisión
								inteligente.
							</li>
							<li className="py-1">
								<span className="font-semibold">3.</span> Laptops, computadoras
								y tabletas.
							</li>
							<li className="py-1">
								<span className="font-semibold">3.</span> Refrigeradores,
								lavadoras y secadoras inteligentes.
							</li>
						</ul>
						<p className="py-2 text-justify text-sm"></p>
					</section>
					<img
						style={{ borderRadius: 4, height: 180 }}
						width={250}
						src="https://i.pinimg.com/originals/03/c7/92/03c79253b6e2dc4ec625d1a2d44c3fc3.jpg"
						alt=""
					/>
				</section>
				<section className="bg-violet-100 flex gap-8 justify-between items-center px-8 py-4 rounded-md mt-2">
					<section className="">
						<ArticleSubtitle title="&#x1FA7A; Salud" />
						<ul className="pl-2 text-sm">
							<li className="pb-1 pt-3">
								<span className="font-semibold">1.</span> Monitoreo de las
								enfermedades crónicas.
							</li>
							<li className="py-1">
								<span className="font-semibold">2.</span> Mejora de la calidad
								de la atención y la calidad de vida de los pacientes.
							</li>
							<li className="py-1">
								<span className="font-semibold">3.</span> Deporte y monitoreo de
								actividades de fitness.
							</li>
							<li className="py-1">
								<span className="font-semibold">3.</span> Seguimiento del uso de
								drogas.
							</li>
							<li className="py-1">
								<span className="font-semibold">4.</span> Monitoreo de los
								hábitos alimenticios.
							</li>
						</ul>
						<p className="py-2 text-justify text-sm"></p>
					</section>
					<img
						style={{ borderRadius: 4, height: 180 }}
						width={250}
						src="https://www.thenewnow.es/wp-content/uploads/2017/03/TheNewNow_IoT_Salud_shutterstock_599218631.jpg"
						alt=""
					/>
				</section>
				<section className="bg-gray-100 flex gap-8 justify-between items-center px-8 py-4 rounded-md mt-2">
					<section className="">
						<ArticleSubtitle title="&#x1F331; Agricultura y medio ambiente" />
						<ul className="pl-2 text-sm">
							<li className="pb-1 pt-3">
								<span className="font-semibold">1.</span> Medición y control de
								la contaminación del medio ambiente (CO2, el ruido, los
								elementos contaminantes presentes en el ambiente).
							</li>
							<li className="py-1">
								<span className="font-semibold">2.</span> Pronosticar cambios
								climáticos basados en el monitoreo de sensores inteligentes.
							</li>
						</ul>
						<p className="py-2 text-justify text-sm"></p>
					</section>
					<img
						style={{ borderRadius: 4, height: 180 }}
						width={250}
						src="https://empresas.blogthinkbig.com/wp-content/uploads/2020/09/Avances-tecnol%C2%A2gicos-al-servicio-del-Medio-Ambiente.jpg?fit=1000%2C667"
						alt=""
					/>
				</section>
				<section className="bg-violet-100 flex gap-8 justify-between items-center px-8 py-4 rounded-md mt-2">
					<section className="">
						<ArticleSubtitle title="&#x1F527; Fabricación" />
						<ul className="pl-2 text-sm">
							<li className="pb-1 pt-3">
								<span className="font-semibold">1.</span> Sensores inteligentes
								de humedad, temperatura, movimiento, fuerza, carga, fugas y
								niveles. Control inteligente de robots.
							</li>
							<li className="py-1">
								<span className="font-semibold">2.</span> Control y optimización
								de los procesos de fabricación.
							</li>
							<li className="py-1">
								<span className="font-semibold">2.</span> Prevenir la
								sobreproducción.
							</li>
						</ul>
						<p className="py-2 text-justify text-sm"></p>
					</section>
					<img
						style={{ borderRadius: 4, height: 180 }}
						width={250}
						src="https://th.bing.com/th/id/R.ff7c9ccb8e4f74f8f5b0f3d726c20f20?rik=NQtbTZUa3zBDIg&pid=ImgRaw&r=0"
						alt=""
					/>
				</section>
			</ArticleContent>
		</Article>
	);
}
