import { NavLink } from "react-router-dom";
import { Badge, NavigateNext } from "../ui";
import Article, {
	ArticleTitle,
	ArticleImage,
	ArticleContent,
	ArticleSubtitle,
} from "../ui/Article/Article";

export const IntroWeb = () => {
	return (
		<Article>
			<div className="float-right">
				<NavLink to={"/seguridad-web/https"}>
					<NavigateNext text="HTTPS" />
				</NavLink>
			</div>
			<Badge title="Seguridad en la Web" />
			<ArticleTitle title="Seguridad en la Web" />
			<ArticleContent>
				<p className="leading-loose py-2 text-justify text-sm">
					La seguridad web consiste en cada acción o herramienta adoptada para
					evitar que las información o datos sean expuestos o propensos a
					ataques por parte de cibercriminales. Esas medidas también sirven para
					proteger a los usuarios, como los clientes de e-commerce y los
					lectores de blogs, e incluso al host. Los ataques cibercriminales
					pueden ocurrir de varias maneras; a continuación, se enlista algunas
					de las formas en las que se pueden dar los ataque:
				</p>
				<div className="bg-gray-100 px-8 py-4 rounded-md">
					<ArticleSubtitle title="Malware" />
					<p className="leading-loose text-justify text-sm">
						Se trata de un software malicioso que utiliza la distribución del
						spam, para hacer que los cibercriminales accedan a los sitios web
						con el fin de que estos roben datos confidenciales de la empresa o
						clientes.
					</p>
				</div>
				<div className="bg-gray-200 mt-4 px-8 py-4 rounded-md">
					<ArticleSubtitle title="Explotaciones de Vulnerabilidad" />
					<p className="leading-loose text-justify text-sm">
						En este caso, los ciberdelincuentes lo que hacen es una búsqueda de
						las vulnerabilidades y debilidades de los sitios webs y, usan esta
						información para conseguir acceder a ella de forma rápida. La manera
						más frecuente a la hora de realizar este tipo de ciberataques es a
						través de plugins desactualizados.
					</p>
				</div>
				<div className="flex mt-4 gap-8">
					<ArticleImage
						width={250}
						path={
							"https://th.bing.com/th/id/OIP.CMJk-6hHfc4kq2L7MVbFYQHaFB?pid=ImgDet&rs=1"
						}
					/>
					<article className="bg-gray-100 px-8 py-4 rounded-tr-md rounded-br-md">
						<ArticleSubtitle title="Ataques DDoS" />
						<p className="leading-loose text-justify text-sm">
							Los ataques DDoS pueden bloquear el sitio web en su totalidad o
							hacer que funcione de manera muy lenta, consiguiendo así que el
							acceso para los usuarios sea inviable para meterse.
						</p>
					</article>
				</div>
				<div className="bg-gray-200 mt-4 px-8 py-4 rounded-md">
					<ArticleSubtitle title="Desfiguración Web" />
					<p className="leading-loose text-justify text-sm">
						Este tipo de ataque causado por los hackers hace que las páginas
						reemplacen contenido por otro malicioso que es enviado por el
						hacker.
					</p>
				</div>
				<div className="bg-gray-100 mt-4 px-8 py-4 rounded-md">
					<ArticleSubtitle title="Blacklist" />
					<p className="leading-loose text-justify text-sm">
						Lo que causa este ciberataque, es que un sitio puede eliminarse de
						los resultados de búsqueda como Google, Yahoo, etc. si hay algún
						malware activo. Si una web cuenta con este tipo de ataque, se
						mostrará una advertencia.
					</p>
				</div>
			</ArticleContent>
		</Article>
	);
};
