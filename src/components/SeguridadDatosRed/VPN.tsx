import { ArticleImage } from "../ui/Article/Article";

export default function VPN() {
	return (
		<section className="rounded-md mt-2 bg- violet-100">
			<h3 className="font-semibold w-max pb-2 text-center text-lg text-gray-800">
				VPN
			</h3>
			<ArticleImage
				width={350}
				height={250}
				float="right"
				path="https://media.pasionmovil.com/2020/11/vpn-seguridad-2048x988.jpg"
			/>
			<p className="leading-loose text-justify text-sm">
				La Red Privada Virtual (VPN por sus siglas en inglés) nos permite
				extender la red local sobre una red pública; es una red de comunicación
				virtual que se gestiona tomando como base una red física. El internet es
				el medio de transporte más usado para las VPN donde dichos medios de
				transporte están protegidos por procedimientos de codificación y
				autenticación, es decir, mediante tunelización, pues los datos
				transferidos por medio de una red privada no son visibles para otros
				usuarios de la red pública subyacente. Así, una VPN nos permite
				transportar datos sensibles de manera segura a través de una conexión
				fiable y sirve como alternativa económica para líneas privadas. Para
				implementar conexiones cifradas con VPN se puede hacer uso de diversos
				protocolos, entre los que destacan IPSec, L2TP sobre IPSec y SSL.
			</p>
			<h3 className="px-8 font-semibold w-max pb-2 mt-4 text-center text-lg text-gray-800">
				Condiciones de uso de una VPN
			</h3>
			<p className="px-8 text-justify text-sm">
				En cuanto a la aplicación que tienen las redes VPN están: la conexión de
				dos o más empresas a través de una red pública (VPN Site to Site), el
				acceso a la red empresarial desde casa o desde cualquier otro lugar (VPN
				End to Site) y el acceso remoto de un ordenador a otro (VPN End to End).
			</p>
			<article className="px-8 flex gap-8 mt-4">
				<section>
					<h4 className="font-semibold text-gray-800">VPN Site to Site</h4>
					<p className="leading-loose text-justify text-sm">
						se aplica cuando se necesita integrar varias redes locales en una
						red de comunicaciones virtual a través de un canal de transporte
						público. Es decir, cuando se quiere establecer conexiones entre
						diferentes empresas u organizaciones. También se podría hacer
						mediante la red corporativa (Corporate Network); no obstante, se
						necesita alquilar la infraestructura correspondiente, por lo que la
						VPN resulta una alternativa más económica pues sólo se necesitaría
						los costes necesarios para la conexión a internet. Para establecer
						una VPN Site to Site (punto a punto) se necesita que cada punto
						tenga un router para VPN y que este cree el túnel entre la red
						local. Otra manera de llamar a la VPN site so site son VPN LAN to
						LAN o Branch Office VPN.
					</p>
				</section>
				<section>
					<h4 className="font-semibold text-gray-800">VPN End to Site</h4>
					<p className="leading-loose text-justify text-sm">
						Las VPN End to Site o de acceso remoto, se utilizan cuando las
						empresas tienen la necesidad de crear un acceso para los usuarios
						que no trabajan en sitio; es decir, aquellos que trabajan desde casa
						o remoto. El túnel a la red local se realiza mediante un cliente VPN
						en el equipo terminal del trabajador externo, donde internet se
						convierte en el medio de transporte. De esta manera los trabajadores
						pueden conectarse a la red de la empresa u organización, al servidor
						de archivos o correo electrónico o utilizar el software
						especializado del sector en cualquier lugar mientras cuenten con
						acceso a internet.
					</p>
				</section>
				<section>
					<h4 className="font-semibold text-gray-800">VPN End to End</h4>
					<p className="leading-loose text-justify text-sm">
						La VPN End to End se caracteriza por hacer las conexiones mediante
						el escritorio remoto. Esta es una técnica por la que los programas
						de aplicación se llevan a cabo en un ordenador y estos se
						representan y se manejan desde otro. El canal de transporte puede
						ser internet o una red local de la empresa. Dentro de las empresas,
						se aplica una VPN de escritorio remoto cuando los empleados trabajan
						desde casa y requieren acceder al ordenador de su puesto de trabajo
						de la oficina.
					</p>
				</section>
			</article>
		</section>
	);
}
