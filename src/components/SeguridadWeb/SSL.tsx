import { useRef } from "react";
import { NavLink } from "react-router-dom";
import { Badge, ContentLink, NavigatePrevious } from "../ui";
import Article, {
	ArticleTitle,
	ArticleContent,
	ArticleSubtitle,
} from "../ui/Article/Article";
import IndexCard from "../ui/IndexCard";

export default function SSL() {
	window.scrollTo(0, 0);
	const historiaRef = useRef<HTMLDivElement | null>(null);
	const definicionRef = useRef<HTMLDivElement | null>(null);
	const funcionRef = useRef<HTMLDivElement | null>(null);
	return (
		<Article>
			<div className="w-fit">
				<NavLink to={"/seguridad-web/https"}>
					<NavigatePrevious text="HTTPS" />
				</NavLink>
			</div>
			<Badge title="Seguridad en la Web" />
			<ArticleTitle title="SSL (Security Socket Layer)" />
			<IndexCard>
				<ContentLink
					linkTitle={"Breve historia de SSL"}
					refSetter={historiaRef}
				/>
				<ContentLink linkTitle={"¿Qué es SSL?"} refSetter={definicionRef} />
				<ContentLink linkTitle={"¿Cómo funciona SSL?"} refSetter={funcionRef} />
			</IndexCard>
			<section className="flex">
				<ArticleContent>
					<div ref={historiaRef}>
						<ArticleSubtitle title="&#x1F4D6; Breve historia de SSL" />
					</div>
					<p className="leading-loose py-2 text-justify text-sm">
						Cuando la web irrumpió a la vista pública, en un principio sólo se
						utilizaba para distribuir páginas estáticas. Sin embargo, pronto
						algunas compañías tuvieron la idea de utilizarla para transacciones
						financieras, como para comprar mercancía con tarjeta de crédito,
						operaciones bancarias en línea y comercio electrónico de acciones.
						Estas aplicaciones crearon una demanda de conexiones seguras. En
						1995, Netscape Communications Corp., que entonces dominaba el
						mercado de los navegadores, respondió a esta demanda mediante la
						introducción de un paquete de seguridad llamado SSL (Capa de Sockets
						Seguros, del inglés Secure Sockets Layer). En la actualidad, este
						software y su protocolo se utilizan mucho, por ejemplo, en Firefox,
						Safari e Internet Explorer.
					</p>
				</ArticleContent>
				<div className="flex flex-col gap-2 items-center align-middle">
					<img
						width={120}
						src="https://s3.amazonaws.com/s3.timetoast.com/public/uploads/photos/5945996/Netscape9logo.png"
						alt=""
					/>
					<span className="text-[12px] italic w-64 text-center">
						Figura 1. Logo de Netscape Communications Corporation.
					</span>
				</div>
			</section>
			<article className="flex gap-4 mt-6">
				<ArticleContent>
					<div ref={definicionRef}>
						<ArticleSubtitle title="&#x1F4A1; ¿Qué es SSL?" />
					</div>
					<p className="leading-loose py-2 text-justify text-sm">
						SSL construye una conexión segura entre dos sockets, incluyendo:
						<ul className="px-8 ">
							<li className="pb-1 pt-3">
								<span className="font-semibold">1.</span> Negociación de
								parámetros entre el cliente y el servidor.
							</li>
							<li className="py-1">
								<span className="font-semibold">2.</span> Autentificación del
								servidor por el cliente.
							</li>
							<li className="py-1">
								<span className="font-semibold">3.</span> Comunicación secreta.
							</li>
							<li className="pt-1 pb-3">
								<span className="font-semibold">4.</span> Protección de la
								integridad de los datos.
							</li>
						</ul>
						En la <span className="font-semibold italic">Figura 2</span> se
						ilustra la posición de SSL en la pila de protocolos usuales. En
						efecto, es una nueva capa interpuesta entre la capa de aplicación y
						la capa de transporte, que acepta solicitudes del navegador y las
						envía a TCP para transmitirlas al servidor. Una vez que se ha
						establecido la conexión segura, el trabajo principal de SSL es
						manejar la compresión y encriptación. Cuando se utiliza HTTP sobre
						SSL, se conoce como HTTPS (HTTP Seguro, del inglés HTTP Secure),
						aunque sea el protocolo HTTP estándar. Algunas veces está disponible
						en un nuevo puerto (443) en lugar del puerto 80. Además, SSL no está
						restringido a utilizarse sólo con navegadores web, pero ésa es su
						aplicación más común. También puede proporcionar autentificación
						mutua.
					</p>
				</ArticleContent>
				<div className="flex flex-col gap-2 items-center align-middle mt-10">
					<img src="./assets/img/posicionssl.png" alt="" />
					<span className="text-[12px] italic w-64 text-center">
						Figura 2. Posición de SSL en la pila de protocolos usuales.
					</span>
				</div>
			</article>
			<div ref={funcionRef}>
				<ArticleSubtitle title="&#x1F937; ¿Cómo funciona SSL?" />
			</div>
			<ArticleContent>
				<p className="leading-loose py-2 text-justify text-sm">
					SSL está formado de dos subprotocolos, uno para establecer una
					conexión segura y otro para utilizarla. Para empezar, vamos a ver cómo
					se establecen las conexiones seguras. En la{" "}
					<span className="font-semibold italic">Figura 2</span> se muestra el
					subprotocolo de establecimiento de conexión. Comienza con el mensaje
					1, cuando Alice envía una solicitud a Bob para establecer una
					conexión. La solicitud especifica la versión SSL que tiene Alice y sus
					preferencias con respecto a los algoritmos criptográficos y de
					compresión. También contiene un nonce R_A, para utilizarlo más tarde.
					Ahora es el turno de Bob. En el mensaje 2, Bob selecciona uno de los
					diversos algoritmos que Alice puede soportar y envía su propio nonce,
					R_B. Después, en el mensaje 3 envía un certificado que contiene su
					clave pública. Si este certificado no está firmado por alguna
					autoridad bien conocida, también envía una cadena de certificados que
					pueden seguirse hasta encontrar uno. Todos los navegadores, incluyendo
					el de Alice, vienen precargados con cerca de 100 claves públicas, por
					lo que, si Bob puede establecer una cadena anclada a una de ellas,
					Alice podrá verificar la clave pública de Bob. En este punto Bob
					podría enviar algunos mensajes más (por ejemplo, podría solicitar el
					certificado de la clave pública de Alice). Cuando Bob termina, envía
					el mensaje 4 para indicar a Alice que es su turno. Para responder,
					Alice selecciona una clave premaestra aleatoria de 384 bits y la envía
					a Bob encriptada con la clave pública de él (mensaje 5). La clave de
					sesión real utilizada para encriptar datos se deriva de la clave
					premaestra combinada con los dos nonces de una forma compleja. Después
					de recibir el mensaje 5, tanto Alice como Bob pueden calcular la clave
					de sesión. Por esta razón, Alice indica a Bob que cambie al nuevo
					sistema de cifrado (mensaje 6) y también que ha terminado con el
					subprotocolo de establecimiento (mensaje 7). Después Bob confirma que
					ha recibido la indicación (mensajes 8 y 9).
				</p>
				<section className="flex justify-center gap-4">
					<div className="flex flex-col gap-2 items-center align-middle mt-10">
						<img src="./assets/img/subprotocolossl.png" alt="" />
						<span className="text-[12px] italic w-64 text-center">
							Figura 3. Subprotocolo de establecimiento de conexión.
						</span>
					</div>
					<div className="flex flex-col gap-2 items-center align-middle mt-10">
						<img src="./assets/img/transmisionssl.png" alt="" />
						<span className="text-[12px] italic w-64 text-center">
							Figura 4. Transmisión de datos mediante SSL.
						</span>
					</div>
				</section>
				<p className="leading-loose py-2 text-justify text-sm">
					Sin embargo, aunque Alice sabe quién es Bob, éste no sabe quién es
					Alice (a menos que ella tenga una clave pública y el correspondiente
					certificado para ella, una situación poco probable para un individuo).
					Por lo tanto, el primer mensaje de Bob puede ser una solicitud para
					que Alice inicie una sesión utilizando un nombre de inicio de sesión y
					una contraseña previamente establecidos. Sin embargo, el protocolo de
					inicio de sesión está fuera del alcance de SSL. Una vez iniciada la
					sesión por cualquier medio, puede comenzar el transporte de los datos.
					Para un transporte real se utiliza un segundo subprotocolo, como se
					muestra en la <span className="font-semibold italic">Figura 3</span>.
					Los mensajes que provengan del navegador primero se dividen en
					unidades de hasta 16 KB. Si se activa la compresión de datos, cada
					unidad se comprime por separado. Después de eso, se obtiene una clave
					secreta a partir de los dos nonces y la clave premaestra se concatena
					con el texto comprimido; después, al resultado se le aplica un hash
					con el algoritmo de hash acordado (por lo general MD5). Este hash se
					adjunta a cada fragmento como el MAC. Después, el fragmento comprimido
					y el MAC se encriptan con el algoritmo de encriptación simétrico
					acordado (por lo general, se le aplica un OR exclusivo con el flujo de
					claves RC4). Por último, se adjunta un encabezado de fragmento y el
					fragmento se transmite a través de la conexión TCP.
				</p>
			</ArticleContent>
		</Article>
	);
}
