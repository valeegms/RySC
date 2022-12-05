export default function ESP() {
	return (
		<section className="px-8 py-4 rounded-md">
			<h3 className="font-semibold text-lg text-gray-800">
				Cabecera de Seguridad Encapsulada (ESP)
			</h3>
			<p className="leading-loose text-justify text-sm">
				A diferencia de AH, que da una pequeña cabecera antes de la carga útil,
				ESP rodea la carga útil con su protección. Los parámetros de seguridad
				Index y Sequence Number tienen el mismo propósito que en AH, pero nos
				encontramos como relleno en la cola del paquete el campo “siguiente
				campo” y el opcional “Authentication data”.
				<br />
				<br /> Es posible usar ESP sin ninguna encriptación (usar el algoritmo
				NULL), sin embargo, estructura el paquete de la misma forma. No nos da
				ninguna confidencialidad a los datos que estamos transmitiendo, y sólo
				tiene sentido usarlo con una la autentificación ESP. No tiene sentido
				usar ESP sin encriptación o autentificación (a no ser que estemos
				simplemente probando el protocolo). Además de la encriptación, ESP puede
				proveer autentificación con la misma HMAC de AH. A diferencia de AH,
				esta autentifica sólo la cabecera ESP y la carca útil encriptada, no
				todo el paquete IP. Esto no hace que la seguridad de la autentificación
				sea más débil, pero nos da algunos beneficios importantes.
			</p>
			<article className="flex gap-8 mt-4">
				<section>
					<h4 className="font-semibold text-gray-800">ESP Modo Transporte</h4>
					<p className="leading-loose text-justify text-sm">
						Al igual que en AH, el modo transporte encapsula justamente la carga
						la carga útil del datagrama y está diseñado justamente para
						comunicaciones extremo-a-extremo. La cabecera IP original se deja
						(excepto por el campo cambiado Protocol), y esto hace, entre otras
						cosas, que las direcciones IP de origen y destino se quedan como
						están.
					</p>
				</section>
				<section>
					<h4 className="font-semibold text-gray-800">ESP Modo Túnel</h4>
					<p className="leading-loose text-justify text-sm">
						El ESP en modo Túnel encapsula el datagrama IP entero y lo encripta;
						proveer una conexión encriptada en modo túnel es dar una forma muy
						cercana a como se crea una VPN, y es lo que se nos viene a la cabeza
						a la mayoría cuando pensamos acerca de IPsec. Además de esto,
						tenemos que añadir autentificación. A diferencia de AH, donde un
						usuario externo puede ver fácilmente lo que se transmite en modo
						Túnel o Transporte, usando ESP esto no ocurre, pues no está visible
						para el usuario externo.
					</p>
				</section>
			</article>
		</section>
	);
}
