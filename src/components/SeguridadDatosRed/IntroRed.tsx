import { useRef } from "react";
import { NavLink } from "react-router-dom";
import { Badge, ContentLink, NavigateNext } from "../ui";
import Article, {
	ArticleTitle,
	ArticleImage,
	ArticleContent,
	ArticleSubtitle,
} from "../ui/Article/Article";
import IndexCard from "../ui/IndexCard";
import AH from "./AH";
import ESP from "./ESP";
import VPN from "./VPN";

export default function IntroRed() {
	const introRef = useRef<HTMLDivElement | null>(null);
	const ipsecRef = useRef<HTMLDivElement | null>(null);
	const vpnRef = useRef<HTMLDivElement | null>(null);
	return (
		<Article>
			<div className="float-right">
				<NavLink to={"/seguridad-datos-red/redes-perimetrales"}>
					<NavigateNext text="Redes Perimetrales" />
				</NavLink>
			</div>
			<Badge title="Seguridad" />
			<ArticleTitle title="Seguridad en la comunicación de datos de una red" />
			<IndexCard>
				<ContentLink linkTitle={"Introducción"} refSetter={introRef} />
				<ContentLink linkTitle={"IPSec"} refSetter={ipsecRef} />
				<ContentLink linkTitle={"VPN"} refSetter={vpnRef} />
			</IndexCard>
			<ArticleContent>
				<div ref={introRef}>
					<ArticleSubtitle title="Introducción" />
				</div>
				<p className="leading-loose py-2 text-justify text-sm">
					Hoy en día vivimos en un mundo digitalizado donde la transmisión de
					datos mediante la red tiende a ser algo frecuente entre personas y
					organizaciones que manejan información delicada de índole
					confidencial. Así, es importante tomar las medidas necesarias, así
					como conocer las posibles amenazas, para poder proteger los datos que
					circulan en una red. En esta sección se hablará de la seguridad en la
					comunicación de datos en una red, igualmente llamado seguridad
					informática. <br />
					<br />
					Actualmente, es muy común escuchar sobre los
					<span className="font-semibold italic"> hackers</span>, que, según la
					RAE, son aquellas personas que acceden de manera ilegal a los sistemas
					informáticos ajenos para apropiárselos u obtener información secreta
					aprovechándose de cualquier vulnerabilidad que pudiera haber. Existen
					diferentes razones por las que se pueden dar las vulnerabilidades;
					entre ellas destacan las deficiencias tecnológicas, de la política de
					seguridad y de configuración.
					<br />
					<br /> De este modo, la seguridad informática consiste en conjuntos de
					barreras informáticas que defienden la infraestructura de diferentes
					formas permitiendo protegerla contra ataques informáticos, garantizar
					la privacidad, controlar el acceso a la información y transformar la
					red en una zona confiable. Entre los protocolos existentes, destacan
					la IPSec y el VPN.
				</p>
				<div ref={ipsecRef}>
					<ArticleSubtitle title="IPSec" />
				</div>
				<ArticleImage
					float="right"
					width={350}
					path="https://commons.bmstu.wiki/images/b/bb/IPSec.jpg"
				/>
				<p className="leading-loose py-2 text-justify text-sm">
					El IPSec (Internet Protocol Security) es un conjunto de protocolos que
					se encargan de asegurar las comunicaciones sobre el Protocolo de
					Internet (IP) autenticando y/o cifrando cada paquete IP en un flujo de
					datos. Los protocolos IPSec actúan en la capa de red; es decir, en la
					capa tres del modelo OSI. <br />
					<br />A comparación de otros protocolos como SSL, TLS y SSH que operan
					sobre la capa de transporte (capas cuatro a siete del modelo OSI)
					hacia arriba, el IPSec resulta ser más flexible, pues puede ser
					utilizado para proteger protocolos de la capa cuatro (incluyendo TCP y
					UDP), que son los protocolos de capa de transporte más usados. A
					comparación de SSL y otros protocolos de niveles superiores, al usar
					IPSec no es necesario realizar ningún cambio en cuanto al código;
					IPSec está implementado por un conjunto de protocolos criptográficos
					para asegurar el flujo de paquetes, garantizar la autenticación mutua
					y establecer parámetros criptográficos. Las cabeceras que tenemos en
					este protocolo son la{" "}
					<span className="italic">Cabecera de Autenticación</span> (AH) y{" "}
					<span className="italic">Carga de Seguridad Encapsulada</span> (ESP).
				</p>
				<AH />
				<ESP />
				<div ref={vpnRef}>
					<VPN />
				</div>
			</ArticleContent>
		</Article>
	);
}
