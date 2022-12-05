import { useRef } from "react";
import { NavLink } from "react-router-dom";
import { NavigatePrevious, NavigateNext, Badge, ContentLink } from "../ui";
import Article, {
	ArticleTitle,
	ArticleContent,
	ArticleImage,
	ArticleSubtitle,
} from "../ui/Article/Article";
import IndexCard from "../ui/IndexCard";

export default function Perimetrales() {
	window.scrollTo(0, 0);
	const introRef = useRef<HTMLDivElement | null>(null);
	const firewallsRef = useRef<HTMLDivElement | null>(null);
	const idsRef = useRef<HTMLDivElement | null>(null);
	return (
		<Article>
			<div className="flex w-full justify-between">
				<NavLink to={"/seguridad-datos-red/Intro"}>
					<NavigatePrevious text="Introducción" />
				</NavLink>
				<NavLink to={"/seguridad-datos-red/honeynets"}>
					<NavigateNext text="HoneyNets" />
				</NavLink>
			</div>
			<Badge title="Seguridad" />
			<ArticleTitle title="Redes Perimetrales" />
			<IndexCard>
				<ContentLink linkTitle={"Seguridad perimetral"} refSetter={introRef} />
				<ContentLink linkTitle={"Firewalls"} refSetter={firewallsRef} />
				<ContentLink
					linkTitle={"Sistemas de Detección de Intrusión (IDS)"}
					refSetter={idsRef}
				/>
			</IndexCard>
			<ArticleContent>
				<ArticleImage
					float="right"
					width={350}
					path="https://blog.sarenet.es/wp-content/uploads/2018/08/ddos.jpg"
				/>
				<div ref={introRef}>
					<ArticleSubtitle title="&#x1F64B; Seguridad perimetral" />
				</div>
				<p className="leading-loose py-2 text-justify text-sm">
					La seguridad perimetral es el conjunto de mecanismos y sistemas
					relativos al control del acceso no autorizado de personas a la red.
					Tienen como objetivo soportar ataques externos, detectar e identificar
					ataques recibidos y altercar acerca de ellos, segmentar y proteger los
					sistemas y servicios en función de su superficie de ataque, filtrar y
					bloquear el tráfico ilegítimo.
				</p>
				<div ref={firewallsRef}>
					<ArticleSubtitle title="&#x1F9F1; Firewalls" />
				</div>
				<p className="leading-loose py-2 text-justify text-sm">
					El firewall, o cortafuegos, es un conjunto de sistemas que se encargan
					de controlar las comunicaciones entre dos o más redes; se encarga de
					analizar paquete a paquete todo el tráfico que entra o sale de nuestra
					red. Así, nos ayudan ante intrusos mediante políticas o reglas de
					acceso.
				</p>
				<div ref={idsRef}>
					<ArticleSubtitle title="&#x1F575; Sistemas de Detección de Intrusión (IDS)" />
				</div>
				<p className="leading-loose py-2 text-justify text-sm">
					Los IDS aparecieron como respuesta al creciente número de ataques a
					principales lugares de interés y redes. Son una especia de sistema de
					gestión de seguridad para los ordenadores y redes. Un IDS recopila y
					analiza información de un ordenador o red para identificar posibles
					violaciones de seguridad, incluyendo el mal uso, así como intrusiones.
					Podemos clasificar un IDS de diversas formas:
				</p>
				<ArticleImage
					width={250}
					path="https://1.bp.blogspot.com/-G7vLeW8AqmY/Vt20Szhj1_I/AAAAAAAAAYM/Pm66JUS1e5c/s1600/IDS.jpg"
				/>
				<article className=" flex gap-8 mt-4">
					<section>
						<h4 className="font-semibold text-gray-800">
							Detección de mal uso y anomalías
						</h4>
						<div className="text-justify text-sm">
							<p className="leading-loose py-2 text-justify text-sm">
								<span className="italic">Detección de mal uso</span>. El IDS
								analiza la información que recopila y la compara con grandes
								bases de datos de firmas de ataques. Consiste en la búsqueda de
								"firmas" (secuencias de acciones típicas de un ataque) en todas
								las comunicaciones que pasan por la red.
							</p>
							<p className="leading-loose py-2 text-justify text-sm">
								<span className="italic">Detección de anomalías</span>. El
								administrador del sistema define el estado normal de tráfico de
								la red, protocolos y tamaños típicos de los intercambios. El
								detector de anomalías compara el estado en cada momento con el
								estado 71 normal y a partir de las diferencias se buscan
								anomalías de comportamiento, que pueden ser debidas a algún
								ataque.
							</p>
						</div>
					</section>
					<section>
						<h4 className="font-semibold text-gray-800">
							Basados en red o en equipos
						</h4>
						<div className="text-justify text-sm">
							<p className="leading-loose py-2 text-justify text-sm">
								<span className="italic">Basados en red (NIDS)</span>. El IDS
								analiza la información que recopila y la compara con grandes
								bases de datos de firmas de ataques. Consiste en la búsqueda de
								"firmas" (secuencias de acciones típicas de un ataque) en todas
								las comunicaciones que pasan por la red.
							</p>
							<p className="leading-loose py-2 text-justify text-sm">
								<span className="italic">Basados en equipos (HIDS)</span>. El
								IDS analiza toda la actividad en cada equipo individual.
							</p>
						</div>
					</section>
					<section>
						<h4 className="font-semibold w-max text-gray-800">
							Sistemas pasivos o reactivos
						</h4>
						<div className="text-justify text-sm">
							<p className="leading-loose py-2 text-justify text-sm">
								<span className="italic">Sistema pasivo</span>. El IDS detecta
								un posible fallo de seguridad, registra la información y envía
								las señales de alerta.
							</p>
							<p className="leading-loose py-2 text-justify text-sm">
								<span className="italic">Sistema reactivo</span>. El IDS
								responde a una actividad sospechosa cerrando la sesión de un
								usuario o reprogramando el firewall para bloquear el tráfico de
								red que tiene su origen en una entidad sospechosa.
							</p>
						</div>
					</section>
				</article>
			</ArticleContent>
		</Article>
	);
}
