import { NavLink } from "react-router-dom";
import { NavigatePrevious, NavigateNext, Badge } from "../ui";
import Article, {
	ArticleTitle,
	ArticleContent,
	ArticleImage,
} from "../ui/Article/Article";

export default function SocketsTCPJava() {
	window.scrollTo(0, 0);
	return (
		<Article>
			<div className="flex w-full justify-between">
				<NavLink to={"/sockets/Intro"}>
					<NavigatePrevious text="Introducción" />
				</NavLink>
				<NavLink to={"/sockets/sockets-udp-java"}>
					<NavigateNext text="Sockets UDP en Java" />
				</NavLink>
			</div>
			<Badge title="Sockets" />
			<ArticleTitle title="Programación de una aplicación basada en sockets TCP en Java" />
			<div className="flex flex-row-reverse gap-8">
				<div className="flex flex-col gap-2 items-center align-middle">
					<img width={750} src="./assets/img/tcpjava.png" alt="" />
					<span className="text-[12px] italic text-center">
						Figura 1. Esquema básico de establecimiento de comunicaciones TCP en
						Java.
					</span>
				</div>
				<ArticleContent>
					<p className="leading-loose py-2 text-justify text-sm">
						Java proporciona dos clases de abstracción de comunicaciones TCP:
						una para los procesos cliente (Socket) y otra para los procesos
						servidor (ServerSocket).
					</p>
					<p className="leading-loose py-2 text-justify text-sm">
						La <span className="italic font-bold">Figura 1</span> es el esquema
						básico de establecimiento de comunicaciones TCP en Java.
					</p>
					<p className="leading-loose py-2 text-justify text-sm">
						TCP es un protocolo especialmente útil cuando se desea transmitir un
						flujo de datos en lugar de pequeñas cantidades aisladas de
						información.
					</p>
					<p className="leading-loose py-2 text-justify text-sm">
						Debido a esta característica, los sockets de Java están diseñados
						para transmitir y recibir datos a través de los Streams definidos en
						el paquete <span className="italic">java.io</span>.
					</p>
				</ArticleContent>
			</div>
			<p className="leading-loose py-2 text-justify text-sm">
				La clase Socket contiene dos métodos importantes que se emplean en el
				proceso de transmisión de flujos de datos:{" "}
				<code> InputStream getInputStream() </code> y{" "}
				<code> OutputStream getOutputStream()</code>.
			</p>
			<p className="leading-loose py-2 text-justify text-sm">
				Estas clases son abstractas, por lo que no podemos emplear directamente
				todos sus métodos. En general se usan otras clases más especializadas
				que nos permiten trabajar con flujos de datos como:{" "}
				<code> DataOutputStream</code>, <code> DataInputStream</code>,{" "}
				<code> FileOutputStream</code>,<code> FileInputStream</code>, entre
				otras.
			</p>
			<p className="leading-loose py-2 text-justify text-sm">
				Implementemos un ejemplo sencillo donde un programa cliente envíe el
				texto “Hola Mundo” al servidor localhost en el puerto 8000, y donde el
				mismo servidor reciba e imprima el mensaje. De esta forma, la clase
				cliente quedaría de la siguiente manera:
			</p>
			<ArticleImage path="./assets/img/Imagen4.png" />
			<p className="leading-loose py-2 text-justify text-sm">
				Mientras que la clase servidor quedaría de la siguiente forma:
			</p>
			<ArticleImage path="./assets/img/Imagen5.png" />
			<p className="leading-loose py-2 text-justify text-sm">
				¡Y listo! El cliente envía el mensaje al servidor localhost que escucha
				en el puerto 8000, y éste lo recibe y lo muestra en consola. Al final
				ambos cierran la conexión. Se puede visitar la página oficial de Java
				para entender el funcionamiento profundo de las clases destinadas a los
				sockets haciendo clic{" "}
				<a
					className="text-violet-700 underline font-semibold"
					href="https://docs.oracle.com/javase/tutorial/networking/sockets/index.html"
				>
					aquí
				</a>
				.<br />
				De igual forma, si aún no te queda claro del todo, puedes mirar el
				siguiente videotutorial:
			</p>
			<iframe
				className="m-auto"
				width="560"
				height="315"
				src="https://www.youtube.com/embed/3wJTI9LMOsk"
				title="YouTube video player"
				frameBorder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowFullScreen
			></iframe>
			<p className="leading-loose py-2 text-justify text-sm">
				En la siguiente sección, veremos cómo se puede programar una aplicación
				basada en sockets UDP.
			</p>
		</Article>
	);
}
