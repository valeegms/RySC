import { useRef } from "react";
import { ContentLink } from "./ui";
import { ArticleBanner } from "./ui/Article/Article";
import IndexCard from "./ui/IndexCard";
import { Intro } from "./SeguridadWeb/Intro";
import SSL from "./SeguridadWeb/SSL";

export const SeguridadWeb = () => {
	const seguridadRef = useRef<HTMLDivElement | null>(null);
	const sslRef = useRef<HTMLDivElement | null>(null);

	return (
		<section className="bg-gray-100">
			<ArticleBanner path="./RySC/assets/img/placeholder.JPG" />
			<div className="flex gap-8 mx-4">
				{/* index */}
				<IndexCard>
					<ContentLink
						linkTitle="¿Qué es Seguridad en la Web?"
						refSetter={seguridadRef}
					/>
					<ContentLink linkTitle="SSL" refSetter={sslRef} />
				</IndexCard>
				{/* contenido */}
				<article className="w-3/5 bg-white px-8 py-8 gap-1">
					<div ref={seguridadRef}>
						<Intro />
					</div>
					<div ref={sslRef}>
						<SSL />
					</div>
				</article>
			</div>
		</section>
	);
};
