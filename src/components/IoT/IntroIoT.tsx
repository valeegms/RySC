import { useRef } from "react";
import { NavLink } from "react-router-dom";
import { Badge, ContentLink, NavigateNext } from "../ui";
import Article, {
	ArticleContent,
	ArticleSubtitle,
	ArticleTitle,
} from "../ui/Article/Article";
import IndexCard from "../ui/IndexCard";

export default function IntroIoT() {
	window.scrollTo(0, 0);
	const introRef = useRef<HTMLDivElement | null>(null);
	const definicionRef = useRef<HTMLDivElement | null>(null);
	const desafiosRef = useRef<HTMLDivElement | null>(null);
	return (
		<Article>
			<div className="float-right">
				<NavLink to={"/iot/datos-relevantes"}>
					<NavigateNext text="Datos relevantes" />
				</NavLink>
			</div>
			<Badge title="IoT" />
			<ArticleTitle title="Internet de las Cosas" />
			<IndexCard>
				<ContentLink linkTitle={"Introducción"} refSetter={introRef} />
				<ContentLink linkTitle={"¿Qué es IoT?"} refSetter={definicionRef} />
				<ContentLink
					linkTitle={"Desafíos y barreras"}
					refSetter={desafiosRef}
				/>
			</IndexCard>
			<ArticleContent>
				<div ref={introRef}>
					<ArticleSubtitle title="Introducción" />
				</div>
				<p className="leading-loose text-justify text-sm">
					La Internet de las Cosas también denominado con sus siglas en inglés
					IoT (Internet of Things) introduce un cambio radical en la calidad de
					vida de las personas, ofreciendo una gran cantidad de nuevas
					oportunidades de acceso a datos, servicios específicos en la
					educación, en seguridad, asistencia sanitaria o en el transporte,
					entre otros campos. Por otra parte, será la clave para aumentar la
					productividad de las empresas, ofreciendo una amplia distribución de
					la red, redes locales inteligentes de dispositivos inteligentes y
					nuevos servicios que pueden ser personalizados según las necesidades
					del cliente. La IoT trae beneficios de mejora de la gestión y el
					seguimiento de los activos y de los productos, aumenta la cantidad de
					datos de información y permite la optimización de equipos y uso de los
					recursos que puede traducirse en ahorro de costes. Además, ofrece la
					oportunidad de crear nuevos dispositivos interconectados inteligentes
					y explorar nuevos modelos de negocio.
				</p>
				<section className="bg-violet-100 px-8 py-4 rounded-md mt-4">
					<div ref={definicionRef}>
						<ArticleSubtitle title="&#x1F4A1; ¿Qué es IoT?" />
					</div>
					<p className="leading-loose py-2 text-justify text-sm">
						El término Internet de las Cosas está en desarrollo y por ende aún
						no tiene una definición aceptada universalmente, sin embargo, se
						podría definir como la interconexión digital de objetos cotidianos
						con Internet. Con objetos cotidianos se hace referencia a todo tipo
						de productos como heladeras, licuadoras, automóviles, iluminación y
						en general cualquier aparato que interactúe de alguna forma con una
						persona.
					</p>
				</section>
				<div className="mt-4" ref={desafiosRef}>
					<ArticleSubtitle title="Desafíos y barreras" />
				</div>
				<p className="leading-loose text-justify text-sm">
					Son varias las barreras que podrían retrasar el desarrollo de la IoT.
					Las tres barreras de mayor magnitud son la implementación de IPv6, la
					energía para alimentar los sensores y el acuerdo sobre las normas. A
					continuación, se explica cada una de estas barreras:
				</p>
				<article className=" flex gap-8 mt-4">
					<section>
						<h4 className="font-semibold text-gray-800">
							Implementación de IPv6
						</h4>
						<div className="text-justify text-sm">
							<p className="leading-loose py-2 text-justify text-sm">
								En febrero de 2010, se agotaron las direcciones IPv4 del mundo.
								Si bien el público general no ha observado un impacto real, esta
								situación podría lentificar el progreso de IoT, ya que los
								posibles miles de millones de sensores necesitarán direcciones
								IP exclusivas. Además, IPv6 facilita la administración de las
								redes gracias a las capacidades de autoconfiguración y ofrece
								características de seguridad mejoradas.
							</p>
						</div>
					</section>
					<section>
						<h4 className="font-semibold text-gray-800">
							Energía para los sensores
						</h4>
						<div className="text-justify text-sm">
							<p className="leading-loose py-2 text-justify text-sm">
								Para que la IoT alcance su máximo potencial, los sensores
								deberán ser autosustentables. Imagine cambiar las baterías de
								miles de millones de dispositivos implementados en todo el
								planeta e incluso en el espacio. Obviamente, no es posible. Lo
								que se necesita es una forma de que los sensores generen
								electricidad a partir de elementos medioambientales como las
								vibraciones, la luz y las corrientes de aire.
							</p>
						</div>
					</section>
					<section>
						<h4 className="font-semibold w-max text-gray-800">Normas</h4>
						<div className="text-justify text-sm">
							<p className="leading-loose py-2 text-justify text-sm">
								Si bien se han realizado grandes progresos en cuanto a las
								normas, se necesita aún más, especialmente en las áreas de
								seguridad, privacidad, arquitectura y comunicaciones. IEEE es
								solo una de las organizaciones que actualmente trabajan para
								sortear estas dificultades, con la tarea de garantizar que los
								paquetes de IPv6 se puedan direccionar a través de tipos de red
								diferentes. Es importante destacar que, si bien existen barreras
								y desafíos, no son insalvables.
							</p>
						</div>
					</section>
				</article>
			</ArticleContent>
		</Article>
	);
}
