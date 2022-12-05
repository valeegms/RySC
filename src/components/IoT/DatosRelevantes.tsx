import { NavLink } from "react-router-dom";
import { Badge, NavigateNext, NavigatePrevious } from "../ui";
import Article, { ArticleContent, ArticleTitle } from "../ui/Article/Article";

export default function DatosRelevantes() {
	window.scrollTo(0, 0);
	return (
		<Article>
			<div className="flex w-full justify-between">
				<NavLink to={"/iot/Intro"}>
					<NavigatePrevious text="Introducción" />
				</NavLink>
				<NavLink to={"/iot/aplicaciones-servicios"}>
					<NavigateNext text="Aplicaciones y Servicios" />
				</NavLink>
			</div>
			<Badge title="IoT" />
			<ArticleTitle title="Datos relevantes en la historia del IoT" />
			<ArticleContent>
				<p className="leading-loose py-2 text-justify text-sm">
					Algunos aspectos destacados en la historia de la IoT son los
					siguientes:
				</p>
				<div className="flex gap-8 items-center">
					<article className="w-6/12">
						<section className="bg-violet-100 flex gap-2 px-8 py-4 rounded-md mt-2">
							<span>&#x1F4A1;</span>
							<section className="flex gap-8 items-center">
								<p className="leading-loose text-justify text-sm">
									El término “Internet de las Cosas” fue utilizado por primera
									vez por Kevin Ashton en 1999 que estaba trabajando en el campo
									de la tecnología RFID en red (identificación por
									radiofrecuencia) y tecnologías de detección emergentes. Sin
									embargo, la IoT "nació" en algún momento entre 2008 y 2009.
								</p>
								<img
									style={{ borderRadius: 4, height: 180 }}
									width={120}
									src="https://th.bing.com/th/id/OIP.10e0S1J4RYNd1MbZ8ZW5nQHaLH?pid=ImgDet&rs=1"
									alt=""
								/>
								<p className="leading-loose py-2 text-justify text-sm"></p>
							</section>
						</section>
						<section className="bg-violet-100 flex gap-2 px-8 py-4 rounded-md mt-2">
							<span>&#x1F4A1;</span>
							<section className="flex gap-8">
								<p className="leading-loose text-justify text-sm">
									En 2010, el número de objetos físicos cotidianos y
									dispositivos conectados a Internet fue de alrededor de 12,5
									mil millones. En la actualidad hay cerca de 25 mil millones de
									dispositivos conectados a la IoT. Más o menos un dispositivo
									inteligente por persona.
								</p>
								<p className="leading-loose py-2 text-justify text-sm"></p>
							</section>
						</section>
					</article>
					<iframe
						style={{ margin: "4px auto", borderRadius: 4 }}
						width="560"
						height="315"
						src="https://www.youtube.com/embed/IxgtaqnpSJQ"
						title="YouTube video player"
						frameBorder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen
					></iframe>
				</div>
			</ArticleContent>
		</Article>
	);
}
