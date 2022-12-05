export default function AH() {
	return (
		<section className="px-8 py-4 rounded-md mt-2 bg- violet-100">
			<h3 className="font-semibold w-max pb-2 text-center text-lg text-gray-800">
				Cabecera de Autenticación (AH)
			</h3>
			<p className="leading-loose text-justify text-sm">
				Está dirigido a garantizar integridad sin conexión y autenticación de
				los datos de origen de los datagramas IP. Calcula un Hash Message
				Authentication Code (HMAG) mediante algún algoritmo hash operando sobre
				una clave secreta, el contenido del paquete IP y las partes inmutables
				del datagrama. AH puede proteger opcionalmente contra ataques de
				repetición a través de la técnica de ventana deslizante y descartando
				paquetes viejos.
			</p>
			<article className="flex gap-8 mt-4">
				<section>
					<h4 className="font-semibold text-gray-800">AH Modo Transporte</h4>
					<p className="leading-loose text-justify text-sm">
						La manera más fácil de entender el modo transporte es que protege el
						intercambio de información entre dos usuarios finales. La protección
						puede ser autentificación o encriptación (o las dos), pero no se
						hace usando un túnel (para eso está el modo túnel). No es una VPN,
						es una simple conexión segura entre dos usuarios finales. <br />
						<br />
						En AH en Modo Transporte, el paquete IP es modificado ligeramente
						para incluir una nueva cabecera AH entre la cabecera IP y la
						información transmitida (TCP, UDP, etc.) y después se requiere un
						proceso “de arrastre” que interconecta las distintas cabeceras entre
						ellas.
					</p>
				</section>
				<section>
					<h4 className="font-semibold text-gray-800">AH Modo Túnel</h4>
					<p className="leading-loose text-justify text-sm">
						El modo túnel es el más común para dar una funcionalidad de VPN,
						donde un paquete IP es encapsulado dentro de otro y enviado a su
						destino.
						<br />
						Igual que en el modo transporte, el paquete es “sellado” con un ICV
						para autentificar al que envia la información para prevenir
						modificaciones durante el tránsito. Pero a diferencia del modo de
						transporte, el modo túnel encapsula todo el paquete IP, no sólo la
						carga util (TCP, UDP ,etc). Esto hace que el destinatario del
						paquete sea uno diferente al destinatario original. Esto ayuda a la
						formación de un túnel.
						<br />
						<br /> Cuando un paquete en modo túnel llega a su destino, pasa el
						mismo proceso de autentificación igual que cualquier paquete
						AH-IPsec. Este proceso hace que se despoje de sus cabeceras IP y AH,
						luego nos queda el datagrama original, que es enrutado mediante un
						proceso normal.
					</p>
				</section>
			</article>
		</section>
	);
}
