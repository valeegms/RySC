import { useRef } from "react";
import { NavLink } from "react-router-dom";
import { Badge, ContentLink, NavigateNext, NavigatePrevious } from "../ui";
import Article, {
	ArticleTitle,
	ArticleContent,
	ArticleImage,
	ArticleSubtitle,
} from "../ui/Article/Article";
import IndexCard from "../ui/IndexCard";

export default function HoneyNets() {
	const introRef = useRef<HTMLDivElement | null>(null);
	const funcionRef = useRef<HTMLDivElement | null>(null);
	return (
		<Article>
			<NavLink to={"/seguridad-datos-red/redes-perimetrales"}>
				<NavigatePrevious text="Redes perimetrales" />
			</NavLink>
			<Badge title="Seguridad" />
			<ArticleTitle title="HoneyNets" />
			<IndexCard>
				<ContentLink linkTitle={"¿Qué son?"} refSetter={introRef} />
				<ContentLink linkTitle={"¿Cómo funcionan?"} refSetter={funcionRef} />
			</IndexCard>
			<ArticleContent>
				<div ref={introRef}>
					<ArticleSubtitle title="&#x1F4A1; ¿Qué son?" />
				</div>
				<p className="leading-loose py-2 text-justify text-sm">
					Ayudan a mejorar la seguridad de las redes y sistemas; simula ser una
					red legítima para poder atraer a los hackers y analizar cómo
					interactúan con el sistema tratando de comprender su comportamiento en
					él (cómo tratan de robar o acceder a la información). De esta manera,
					los HoneyNets son “trampas” que nos ayudan a identificar fácilmente a
					los piratas informáticos, así como para mejorar la seguridad dentro
					del sitio reforzando la configuración que se tiene con ayuda de la
					información recabada.
				</p>
				<ArticleImage
					width={350}
					path="https://www.researchgate.net/profile/Nogol_Memari2/publication/283551793/figure/download/fig2/AS:695673896833029@1542872990400/Architecture-of-the-deployed-Virtual-honeynet.png"
				/>
				<ArticleImage
					width={350}
					path="https://th.bing.com/th/id/R.3349d8de8e7ad340662f18967f66eb0e?rik=FSU%2b9n9J2daO4w&riu=http%3a%2f%2fimage.slidesharecdn.com%2fhoneypothoneynet-120427190956-phpapp02%2f95%2fhoneypot-honeynet-6-728.jpg%3fcb%3d1335553876&ehk=4mlFfftK8rF8VWNssmu3FxnourLqUjAjFONMUQke1Qo%3d&risl=&pid=ImgRaw&r=0"
				/>
				<div ref={funcionRef}>
					<ArticleSubtitle title="&#x1F937; ¿Cómo funcionan?" />
				</div>
				<p className="leading-loose py-2 text-justify text-sm">
					Implementar las HoneyNets con la finalidad de identificar a los
					hackers no es un trabajo fácil, por lo que se ayuda de varios
					componentes que trabajan en conjunto para poder brindar dicho
					servicio. De este modo, los HoneyNets se conforman de:
				</p>
				<ul className="pl-2 text-sm">
					<li className="pb-1 pt-3">
						<span className="italic font-semibold"> Honeypots</span>. Sistemas
						informáticos configurados para atrapar a los hackers.
					</li>
					<li className="py-1">
						<span className="italic font-semibold">
							Servicios y Aplicaciones
						</span>
						. Los hackers deben estar convencidos que están dentro de un sitio
						legítimo.
					</li>
					<li className="py-1">
						<span className="italic font-semibold">
							Usuarios y Actividad no Legítima
						</span>
						. Las HoneyNets no tienen otro uso adicional además de atrapar a los
						piratas informáticos.
					</li>
					<li className="pt-1 pb-3">
						<span className="italic font-semibold">HoneyWalls.</span> Es
						necesario estudiar y aprender de lo que sucede dentro de un ataque
						hacia un HoneyNet, por lo que el sistema debe registrar información
						exacta sobre el tráfico que se tiene dentro y fuera del honeypot.
					</li>
				</ul>
				<p className="leading-loose py-2 text-justify text-sm">
					Al atraer al hacker, éste entra dentro de una honeypot para que, al
					estar ahí, trate de adentrarse más al sistema y ahí es cuando gana
					acceso a la honeynet, donde empieza el registro de sus movimientos
					para futuro análisis.
				</p>
			</ArticleContent>
		</Article>
	);
}
