import { NavLink } from "react-router-dom";
import { NavigatePrevious, Badge } from "../ui";
import Article, {
	ArticleTitle,
	ArticleContent,
	ArticleImage,
} from "../ui/Article/Article";

export default function SocketsUDPJava() {
	return (
		<Article>
			<NavLink to={"/sockets/sockets-tcp-java"}>
				<NavigatePrevious text="Sockets TCP en Java" />
			</NavLink>
			<Badge title="Sockets" />
			<ArticleTitle title="Programación de una aplicación basada en sockets UDP en Java" />
			<ArticleContent>
				<p className="leading-loose py-2 text-justify text-sm">
					Funcionamiento básico de los sockets UDP:
				</p>
				<ul className="pl-2 text-sm">
					<li className="pb-1 pt-3">
						<span className="font-semibold">1.</span> Un datagrama enviado por
						UDP se transmite desde un proceso emisor a un proceso receptor sin
						acuse de recibo ni reintentos.
					</li>
					<li className="py-1">
						<span className="font-semibold">2.</span> Si algo falla, el mensaje
						puede no llegar a su destino.
					</li>
					<li className="py-1">
						<span className="font-semibold">3.</span> Se transmite un datagrama,
						entre procesos, cuando uno lo envía, y el otro lo recibe.
					</li>
					<li className="py-1">
						<span className="font-semibold">4.</span> La comunicación de
						datagramas UDP utiliza operaciones de envío no bloqueantes y
						recepciones, bloqueantes.
					</li>
					<li className="py-1">
						<span className="font-semibold">5.</span> La operación{" "}
						<span className="italic font-medium">send </span>
						devuelve el control cuando ha dirigido el mensaje a las capas
						inferiores UDP e IP, que son las responsables de su entrega en el
						destino. A la llegada, el mensaje será colocado en una cola del
						conector que está enlazado con el puerto de destino.
					</li>
					<li className="py-1">
						<span className="font-semibold">6.</span> El mensaje podrá obtenerse
						de la cola de recepción mediante una invocación pendiente o futura
						del método recibe sobre ese conector. Si no existe ningún proceso
						ligado al conector destino, los mensajes serán descartados.
					</li>
					<li className="py-1">
						<span className="font-semibold">7.</span> El método recibe produce
						un bloqueo hasta que se reciba un datagrama, a menos que se haya
						establecido un tiempo límite (time out) asociado al conector.
					</li>
					<li className="py-1">
						<span className="font-semibold">8.</span> Cualquier proceso que
						necesite enviar o recibir mensajes debe crear, primero, un conector
						asociado a una dirección Internet y a un puerto local.
					</li>
					<li className="py-1">
						<span className="font-semibold">9.</span> Un servidor enlazará su
						conector a un puerto de servidor (uno que resulte con los clientes
						de modo que puedan enviarle mensajes).
					</li>
					<li className="py-1">
						<span className="font-semibold">10.</span> Un cliente ligará su
						conector a cualquier puerto local libre.
					</li>
					<li className="py-1">
						<span className="font-semibold">11.</span> El método recibe
						devolverá, además del mensaje, la dirección Internet y el puerto del
						emisor, permitiendo al receptor enviar la correspondiente respuesta.
					</li>
				</ul>
			</ArticleContent>
			<p className="leading-loose py-2 text-justify text-sm">
				La <span className="font-bold italic">Figura 1</span> es el esquema
				básico de establecimiento de comunicaciones UDP en Java.
			</p>
			<div className="flex flex-col gap-2 items-center align-middle">
				<img width={450} src="./assets/img/Imagen6.png" alt="" />
				<span className="text-[12px] italic text-center">
					Figura 1. Esquema básico de establecimiento de comunicaciones UDP en
					Java.
				</span>
			</div>
			<p className="leading-loose py-2 text-justify text-sm">
				Veamos ahora los pasos para crear una aplicación cliente que envíe el
				mensaje “Hola Mundo” al servidor{" "}
				<span className="italic">localhost</span> en el puerto 4000, que
				imprimirá dicho mensaje.
			</p>
			<ul className="pl-2 text-sm">
				<li className="pb-1 pt-3 flex gap-2">
					<span className="font-semibold">1.</span>{" "}
					<p>
						El programa que proporciona el servicio (servidor) crea una
						instancia de la clase DatagramSocket, indicando el puerto asociado
						al servicio:{" "}
						<code className="bg-gray-100 ">
							DatagramSocket MiSocket = new DatagramSocket(4000);{" "}
						</code>
					</p>
				</li>
				<li className="pb-1 pt-3 flex gap-2">
					<span className="font-semibold">2.</span>{" "}
					<p>
						El programa servidor crea una instancia de la clase DatagramPacket,
						donde se guardarán los datos recibidos:
						<code className="bg-gray-100 ">
							DatagramPacket Paquete = new DatagramPacket(buffer,
							buffer.length);
						</code>
					</p>
				</li>
				<li className="pb-1 pt-3 flex gap-2">
					<span className="font-semibold">3.</span>{" "}
					<p>
						Hasta que llegan los datos: el programa servidor invoca el método
						receive sobre el socket de tipo DatagramSocket. Este método, por
						defecto, bloquea el programa.
						<code className="bg-gray-100 ">MiSocket.receive(Paquete);</code>
					</p>
				</li>
				<li className="pb-1 pt-3 flex gap-2">
					<span className="font-semibold">4.</span>{" "}
					<p>
						El programa cliente crea una instancia de tipo DatagramSocket.
						<code className="bg-gray-100 ">
							{" "}
							DatagramSocket MiSocket = new DatagramSocket();{" "}
						</code>
					</p>
				</li>
				<li className="pb-1 pt-3 flex gap-2">
					<span className="font-semibold">5.</span>{" "}
					<p>
						El programa cliente crea una instancia de tipo DatagramPacket,
						proporcionándole los datos, además de la dirección y puerto destino.
						<code className="bg-gray-100 ">
							{" "}
							DatagramPacket Paquete = new DatagramPacket(buffer,
							Mensaje.length(), InetAddress.getByName(“localhost”),4000);
						</code>
					</p>
				</li>
				<li className="pb-1 pt-3 flex gap-2">
					<span className="font-semibold">6.</span>{" "}
					<p>
						El programa que utiliza el servicio (programa cliente) invoca el
						método send sobre el socket de tipo DatagramSocket:
						<code className="bg-gray-100 "> MiSocket.send(Paquete);</code>
					</p>
				</li>
			</ul>
			<p className="leading-loose py-2 text-justify text-sm">
				De esta forma, la clase cliente{" "}
				<code className="font-medium">UDPEnvia.java</code> quedaría de la
				siguiente forma:
			</p>
			<ArticleImage width={620} path="./assets/img/Imagen7.png" />
			<p className="leading-loose py-2 text-justify text-sm">
				Y la clase servidor <code className="font-medium">UDPRecibe.java</code>{" "}
				quedaría:
			</p>
			<ArticleImage path="./assets/img/imagen5.png" />
			<p className="leading-loose py-2 text-justify text-sm">
				De esta forma estaríamos implementando los sockets para transmisión no
				confiable de paquetes siguiendo el protocolo UDP en Java.
				<br />
				¿Necesitas verlo de una manera más clara y detallada? Te proporcionamos
				el siguiente videotutorial para que lo sigas con calma.
			</p>
			<iframe
				className="m-auto"
				width="560"
				height="315"
				src="https://www.youtube.com/embed/gc6szh6kp8Q"
				title="YouTube video player"
				frameBorder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowFullScreen
			></iframe>
		</Article>
	);
}
