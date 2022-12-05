import { useRef } from "react";
import { NavLink } from "react-router-dom";
import { Badge, NavigateNext, NavigatePrevious } from "../ui";
import Article, {
	ArticleTitle,
	ArticleImage,
	ArticleContent,
	ArticleSubtitle,
} from "../ui/Article/Article";
import IndexCard, { ContentLink } from "../ui/IndexCard";

export default function HTTPS() {
	window.scrollTo(0, 0);
	const protocoloRef = useRef<HTMLDivElement | null>(null);
	const funcionRef = useRef<HTMLDivElement | null>(null);
	const httpsvshttpRef = useRef<HTMLDivElement | null>(null);
	return (
		<Article>
			<div className="flex w-full justify-between">
				<NavLink to={"/seguridad-web/Intro"}>
					<NavigatePrevious text="Introducción" />
				</NavLink>
				<NavLink to={"/seguridad-web/ssl"}>
					<NavigateNext text="SSL" />
				</NavLink>
			</div>
			<Badge title="Seguridad en la Web" />
			<ArticleTitle title="HTTPS (HTTP Secure)" />
			<IndexCard>
				<ContentLink
					linkTitle={"¿Qué es el protocolo HTTPS?"}
					refSetter={protocoloRef}
				/>
				<ContentLink
					linkTitle={"¿Cómo funciona HTTPS?"}
					refSetter={funcionRef}
				/>
				<ContentLink linkTitle={"HTTPS vs HTTP"} refSetter={httpsvshttpRef} />
			</IndexCard>
			<div className="flex flex-row-reverse gap-8">
				<iframe
					style={{ margin: "auto", borderRadius: 4 }}
					width="560"
					height="315"
					src="https://www.youtube.com/embed/U0iiT41OI3I"
					title="YouTube video player"
					frameBorder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowFullScreen
				></iframe>
				<div className="w-6/12" ref={protocoloRef}>
					<ArticleSubtitle title="&#x1F4A1; ¿Qué es el protocolo HTTPS?" />
					<ArticleContent>
						<p className="leading-loose py-2 text-justify text-sm">
							El protocolo seguro de transferencia de hipertexto (HTTPS) es la
							versión segura de HTTP, que es el protocolo principal utilizado
							para enviar datos entre un navegador web y un sitio web. HTTPS
							está encriptado para aumentar la seguridad de la transferencia de
							datos. Esto es particularmente importante cuando los usuarios
							transmiten datos confidenciales, como iniciar sesión en una cuenta
							bancaria, servicio de correo electrónico o proveedor de seguro de
							salud. Cualquier sitio web, especialmente aquellos que requieren
							credenciales de inicio de sesión, debe usar HTTPS.
						</p>
					</ArticleContent>
				</div>
			</div>
			<div className="mt-8" ref={funcionRef}>
				<ArticleSubtitle title="&#x1F937; ¿Cómo funciona HTTPS?" />
			</div>
			<ArticleContent>
				<p className="leading-loose py-2 text-justify text-sm">
					HTTPS utiliza un protocolo de cifrado para cifrar las comunicaciones.
					El protocolo se llama Transport Layer Security (TLS), aunque
					antiguamente se conocía como Secure Sockets Layer (SSL). Este
					protocolo protege las comunicaciones mediante lo que se conoce como
					una Infraestructura de Clave Pública Asimétrica. Este tipo de sistema
					de seguridad utiliza dos claves diferentes para cifrar las
					comunicaciones entre dos partes: La clave privada: esta clave está
					controlada por el propietario de un sitio web y se mantiene, como el
					lector puede haber especulado, privada. Esta clave vive en un servidor
					web y se utiliza para descifrar la información cifrada por la clave
					pública. La clave pública: esta clave está disponible para todos los
					que quieran interactuar con el servidor de una manera segura. La
					información cifrada por la clave pública solo puede descifrarse
					mediante la clave privada.
				</p>
			</ArticleContent>
			<div className="flex gap-8 mt-8 ">
				<div ref={httpsvshttpRef}>
					<ArticleSubtitle title="&#x1F914; HTTPS vs HTTP" />
					<ArticleContent>
						<p className="leading-loose py-2 text-justify text-sm">
							Técnicamente hablando, HTTPS no es un protocolo separado de HTTP.
							Simplemente está utilizando el cifrado TLS / SSL sobre el
							protocolo HTTP. HTTPS se produce en función de la transmisión de
							certificados TLS / SSL, que verifican que un proveedor en
							particular es quien dice ser. Cuando un usuario se conecta a una
							página web, la página web enviará su certificado SSL que contiene
							la clave pública necesaria para iniciar la sesión segura. Las dos
							computadoras, el cliente y el servidor, luego pasan por un proceso
							llamado protocolo de enlace SSL / TLS, que es una serie de
							comunicaciones de ida y vuelta utilizadas para establecer una
							conexión segura.
						</p>
					</ArticleContent>
				</div>
				<ArticleImage
					width={350}
					path="https://images.ctfassets.net/tp56mevc46jo/7dMltzzABnH8wZ8ymHftPZ/49bb33a5caaf3ea3a14f5a668f7203a0/How_does_HTTP_and_HTTPS_work.png"
				/>
			</div>
		</Article>
	);
}
