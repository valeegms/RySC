import { useRef } from "react";
import HoneyNets from "./SeguridadDatosRed/HoneyNets";
import Perimetrales from "./SeguridadDatosRed/Perimetrales";
import IntroRed from "./SeguridadDatosRed/IntroRed";
import { ContentLink } from "./ui";
import { ArticleBanner } from "./ui/Article/Article";
import IndexCard from "./ui/IndexCard";

export const SeguridadDatosWeb = () => {
	const introRef = useRef<HTMLDivElement | null>(null);
	const perimetralesRef = useRef<HTMLDivElement | null>(null);
	const honeynetsRef = useRef<HTMLDivElement | null>(null);

	return (
		<section className="bg-gray-100">
			<ArticleBanner path="src/assets/img/placeholder.JPG" />
			<div className="flex gap-8 mx-4">
				{/* index */}
				<IndexCard>
					<ContentLink linkTitle="Introducción" refSetter={introRef} />
					<ContentLink
						linkTitle="¿Qué son las Redes Perimetrales?"
						refSetter={perimetralesRef}
					/>
					<ContentLink linkTitle="HoneyNets" refSetter={honeynetsRef} />
				</IndexCard>
				{/* contenido */}
				<article className="w-3/5 bg-white px-8 py-8 gap-1">
					<div ref={introRef}>
						<IntroRed />
					</div>
					<div ref={perimetralesRef}>
						<Perimetrales />
					</div>
					<div ref={honeynetsRef}>
						<HoneyNets />
					</div>
				</article>
			</div>
		</section>
	);
};
