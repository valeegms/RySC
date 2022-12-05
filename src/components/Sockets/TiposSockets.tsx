import { ArticleImage, ArticleSubtitle } from "../ui/Article/Article";

export default function TiposSockets() {
	return (
		<article className="mt-4">
			<ArticleSubtitle title="&#x1F914; Tipos de Sockets" />
			<p className="leading-loose text-justify text-sm">
				Los tipos de sockets más comunes son:
			</p>
			<ul className="pl-2 text-sm">
				<li className="pb-1 pt-3">
					<span className="font-semibold">1.</span> Flujo de bytes confiable
					orientado a conexión. (Stream)
				</li>
				<li className="py-1">
					<span className="font-semibold">2.</span> Flujo de paquetes confiable
					orientado a conexión.
				</li>
				<li className="py-1">
					<span className="font-semibold">3.</span> Transmisión de paquetes
					desconfiable. (Datagram)
				</li>
			</ul>
			<p className="mt-2 leading-loose text-justify text-sm">
				El primer tipo de socket permite que dos procesos en distintas máquinas
				establezcan el equivalente a una canalización ente ellos. Los bytes se
				meten en un extremo y salen en el mismo orden por el otro extremo. El
				sistema garantiza que lleguen todos los bytes enviados, y en el mismo
				orden en el que se enviaron.
			</p>
			<p className="mt-2 leading-loose text-justify text-sm">
				El segundo tipo es similar al primero, excepto que preserva los límites
				de los paquetes. Si el emisor realiza cinco llamadas separadas a write,
				cada una de 512 bytes, y el receptor pide 2560 bytes, con un socket de
				tipo 1 se devolverán los 2560 sockets al mismo tiempo. Con un socket de
				tipo 2, sólo se devolverán 512 bytes. Se requieren cuatro llamadas más
				para obtener el resto.
			</p>
			<p className="mt-2 leading-loose text-justify text-sm">
				El tercer tipo de socket se utiliza para dar acceso al usuario a la red
				cruda. Este tipo es especialmente útil para las aplicaciones en tiempo
				real, y para las situaciones en las que el usuario desea implementar un
				esquema de manejo de errores especializado. La red puede perder los
				paquetes o cambiar su orden. No hay garantías, como en los primeros dos
				casos. La ventaja de este modo es que hay un mayor rendimiento, lo cual
				algunas veces es más importante que la confiabilidad (por ejemplo, para
				la entrega de contenido multimedia, donde es más importante la velocidad
				que la integridad).
			</p>
			<p className="mt-2 leading-loose text-justify text-sm">
				Cuando se crea un socket, uno de los parámetros especifica el protocolo
				que se va a utilizar. Para los flujos de bytes confiables, el protocolo
				más popular es{" "}
				<strong>
					TCP (Transmission Control Protocol, Protocolo de control de
					transmisión)
				</strong>
				. Para la transmisión no confiable orientada a paquetes, la opción común
				es{" "}
				<strong>
					UDP (User Datagram Protocol, Protocolo de datagramas de usuario)
				</strong>
				s.
			</p>
			<p className="mt-2 leading-loose text-justify text-sm">
				Antes de poder usar un socket para trabajar en la red, hay que enlazarlo
				con una dirección. Ésta puede estar en uno de varios dominios de
				nombramiento. El dominio más común es el dominio de nombramiento de
				Internet, que utiliza enteros de 32 bits para nombrar los puntos
				extremos en la versión 4 (dirección IPv4), y enteros de 128 bits en la
				versión 6 (dirección IPv6) (la versión 5 fue un sistema experimental que
				nunca llegó a las ligas mayores). Una vez que se crean los sockets en
				las computadoras de origen y de destino, se puede establecer una
				conexión entre ellas (para la comunicación orientada a conexión). Una de
				las partes realiza una llamada al sistema{" "}
				<span className="italic">LISTEN</span> en un socket local, con lo cual
				se crea un búfer y se bloquea hasta que lleguen datos. La otra parte
				realiza una llamada al sistema <span className="italic">CONNECT</span> y
				proporciona como parámetros el descriptor de archivo para un socket
				local y la dirección de un socket remoto. Si la parte remota acepta la
				llamada, entonces el sistema establece una conexión entre los sockets.
			</p>
			<p className="mt-2 leading-loose text-justify text-sm">
				Una vez establecida la conexión, funciona de manera análoga a una
				tubería. Un proceso puede leer y escribir datos de ella mediante el uso
				del descriptor de archivo para su socket local.
			</p>
			<p className="mt-2 leading-loose text-justify text-sm">
				Cuando ya no se requiere la conexión se puede cerrar en la forma usual,
				a través de la llamada al sistema <span className="italic">CLOSE</span>.
			</p>
			<p className="mt-2 leading-loose text-justify text-sm">
				En la siguiente imagen, se puede observar la diferencia en los
				procedimientos utilizados en los sockets Stream, que utilizan TCP y los
				sockets Datagram, que utilizan UDP.
			</p>
			<ArticleImage path="./assets/img/datagrama.png" />
			<p className="mt-2 leading-loose text-justify text-sm">
				En las secciones se analizará un ejemplo de programación de aplicaciones
				con sockets, en el lenguaje Java, para el caso de sockets Stream y
				Datagram.
			</p>
		</article>
	);
}
