import { useRef } from "react";
import { NavLink } from "react-router-dom";
import { Badge, ContentLink, NavigateNext } from "../ui";
import Article, {
	ArticleContent,
	ArticleImage,
	ArticleSubtitle,
	ArticleTitle,
} from "../ui/Article/Article";
import IndexCard from "../ui/IndexCard";
import TiposSockets from "./TiposSockets";

export default function IntroSockets() {
	window.scrollTo(0, 0);
	const socketRef = useRef<HTMLDivElement | null>(null);
	const origenRef = useRef<HTMLDivElement | null>(null);
	const primitivasRef = useRef<HTMLDivElement | null>(null);
	const tiposRef = useRef<HTMLDivElement | null>(null);
	return (
		<Article>
			<div className="float-right">
				<NavLink to={"/sockets/sockets-tcp-java"}>
					<NavigateNext text="Sockets TCP en Java" />
				</NavLink>
			</div>
			<Badge title="Socket" />
			<ArticleTitle title="Programación de aplicaciones con Sockets" />
			<IndexCard>
				<ContentLink linkTitle={"Sockets"} refSetter={socketRef} />
				<ContentLink linkTitle={"Orígenes"} refSetter={origenRef} />
				<ContentLink
					linkTitle={"Primitivas y funcionamiento"}
					refSetter={primitivasRef}
				/>
				<ContentLink linkTitle={"Tipos de Sockets"} refSetter={tiposRef} />
			</IndexCard>
			<ArticleContent>
				<div ref={socketRef}>
					<ArticleSubtitle title="&#x270F; Sockets" />
				</div>
				<ArticleImage
					classname="mt-4"
					float="right"
					width={350}
					path="./assets/img/socket.jpg"
				/>
				<p className="leading-loose py-2 text-justify text-sm">
					Como la mayoría de los términos de software, un socket es una
					abstracción del tipo de socket físico (como el de la imagen de arriba)
					con los que todos estamos familiarizados. Un socket físico es un punto
					de entrada para un cable de alimentación. Un socket de software
					también es un punto de entrada, pero en lugar de aceptar un cable de
					alimentación, acepta una conexión de red desde otro ordenador.
					<br />
					<br /> Los primeros ordenadores no necesitaban estos sockets, porque
					el networking de computadoras todavía no existía. Los ordenadores eran
					simplemente máquinas autónomas que ejecutaban procesos, pero no podían
					comunicarse con otros ordenadores. Luego llegaron sistemas como
					Arpanet, Ethernet e Internet para llevarnos a donde estamos hoy, con
					miles de millones de dispositivos informáticos todos conectados entre
					sí desde todo el mundo. ¿Pero cómo se mantiene todo organizado con
					todos estos dispositivos hablando entre sí? La respuesta corta es que
					los sockets desempeñan un papel clave para mantener todas estas
					comunicaciones ordenadas y ordenadas.
				</p>
				<section className="bg-violet-100 px-8 py-4 rounded-md mt-4">
					<div ref={origenRef}>
						<ArticleSubtitle title="&#x1F4A1; Orígenes" />
					</div>
					<p className="leading-loose py-2 text-justify text-sm">
						En los orígenes de Internet, las primeras computadoras en
						implementar sus protocolos fueron las de la Universidad de Berkeley.
						Dicha implementación tuvo lugar en una variante del sistema
						operativo Unix conocida como BSD Unix. Pronto se hizo evidente que
						los programadores necesitarían un medio sencillo y eficaz para
						escribir programas capaces de intercomunicarse entre sí. Esta
						necesidad dio origen a la primera especificación e implementación de
						sockets, también en Unix. Hoy día, los sockets están implementados
						como bibliotecas de programación para multitud de sistemas
						operativos, simplificando la tarea de los programadores.
					</p>
				</section>
				<div className="mt-4" ref={primitivasRef}>
					<ArticleSubtitle title="&#x1F937; Primitivas y funcionamiento" />
				</div>
				<p className="leading-loose py-2 text-justify text-sm">
					Antes de profundizar en el tema de sockets, hay que entender las
					primitivas en las que se basa. Pero ¿qué es una primitiva?
					<br /> Un servicio se puede especificar de manera formal como un
					conjunto de primitivas (operaciones) disponibles a los procesos de
					usuario para que accedan al servicio. Estas primitivas le indican al
					servicio que desarrollen alguna acción o que informen sobre la acción
					que haya tomado una entida d par. Las primitivas de los sockets son:
				</p>
				<article className="mt-4 grid grid-cols-4 gap-x-6 gap-y-6">
					<section className="border border-violet-800 rounded-md px-4 py-2 h-32">
						<h3 className="italic font-semibold my-1">
							socket<span className="font-medium text-indigo-800">()</span>
						</h3>
						<p className="leading-loose text-justify text-sm">
							Crea un nuevo punto terminal de comunicación.
						</p>
					</section>
					<section className="border border-violet-800 rounded-md px-4 py-2 h-32">
						<h3 className="italic font-semibold my-1">
							bind<span className="font-medium text-indigo-800">()</span>
						</h3>
						<p className="leading-loose text-justify text-sm">
							Asocia una dirección local con un socket.
						</p>
					</section>
					<section className="border border-violet-800 rounded-md px-4 py-2 h-32">
						<h3 className="italic font-semibold my-1">
							listen<span className="font-medium text-indigo-800">()</span>
						</h3>
						<p className="leading-loose text-justify text-sm">
							Anuncia la disposición de aceptar conexiones; indica el tamaño de
							la cola
						</p>
					</section>
					<section className="border border-violet-800 rounded-md px-4 py-2 h-32">
						<h3 className="italic font-semibold my-1">
							accept<span className="font-medium text-indigo-800">()</span>
						</h3>
						<p className="leading-loose text-justify text-sm">
							Establece en forma pasiva una conexión entrante.
						</p>
					</section>
					<section className="border border-violet-800 rounded-md px-4 py-2 h-32">
						<h3 className="italic font-semibold my-1">
							connect<span className="font-medium text-indigo-800">()</span>
						</h3>
						<p className="leading-loose text-justify text-sm">
							Intenta establecer activamente una conexión.
						</p>
					</section>
					<section className="border border-violet-800 rounded-md px-4 py-2 h-32">
						<h3 className="italic font-semibold my-1">
							send<span className="font-medium text-indigo-800">()</span>
						</h3>
						<p className="leading-loose text-justify text-sm">
							Envía datos a través de la conexión.
						</p>
					</section>
					<section className="border border-violet-800 rounded-md px-4 py-2 h-32">
						<h3 className="italic font-semibold my-1">
							receive<span className="font-medium text-indigo-800">()</span>
						</h3>
						<p className="leading-loose text-justify text-sm">
							Recibe datos de la conexión.
						</p>
					</section>
					<section className="border border-violet-800 rounded-md px-4 py-2 h-32">
						<h3 className="italic font-semibold my-1">
							close<span className="font-medium text-indigo-800">()</span>
						</h3>
						<p className="leading-loose text-justify text-sm">
							Libera la conexión.
						</p>
					</section>
				</article>
				<div ref={tiposRef}>
					<TiposSockets />
				</div>
			</ArticleContent>
		</Article>
	);
}
