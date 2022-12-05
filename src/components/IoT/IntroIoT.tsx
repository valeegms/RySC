import { NavLink } from "react-router-dom";
import { Badge, NavigateNext } from "../ui";
import Article, {
	ArticleContent,
	ArticleImage,
	ArticleSubtitle,
	ArticleTitle,
} from "../ui/Article/Article";

export default function IntroIoT() {
	return (
		<Article>
			<div className="float-right">
				<NavLink to={"/iot/datos-relevantes"}>
					<NavigateNext text="Datos relevantes" />
				</NavLink>
			</div>
			<Badge title="IoT" />
			<ArticleTitle title="Internet de las Cosas" />
			<ArticleContent>
				<p className="py-2 text-justify text-sm">
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
					<ArticleSubtitle title="&#x1F4A1; ¿Qué es IoT?" />
					<p className="py-2 text-justify text-sm">
						El término Internet de las Cosas está en desarrollo y por ende aún
						no tiene una definición aceptada universalmente, sin embargo, se
						podría definir como la interconexión digital de objetos cotidianos
						con Internet. Con objetos cotidianos se hace referencia a todo tipo
						de productos como heladeras, licuadoras, automóviles, iluminación y
						en general cualquier aparato que interactúe de alguna forma con una
						persona.
					</p>
				</section>
			</ArticleContent>
		</Article>
	);
}
