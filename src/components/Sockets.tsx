import { useRef } from "react";
import { ArticleBanner } from "./ui/Article/Article";
import IndexCard, { ContentLink } from "./ui/IndexCard";
import Intro from "./Sockets/Intro";

export const Sockets = () => {
	const socketsRef = useRef<HTMLDivElement | null>(null);

	return (
		<section className="bg-gray-100">
			<ArticleBanner path="src/assets/img/placeholder.JPG" />
			<div className="flex gap-8 mx-4">
				{/* index */}
				<IndexCard>
					<ContentLink
						linkTitle="¿Qué son los sockets?"
						refSetter={socketsRef}
					/>
				</IndexCard>
				{/* contenido */}
				<article className="w-3/5 bg-white px-8 py-8 gap-1">
					<div ref={socketsRef}>
						<Intro />
					</div>
				</article>
			</div>
		</section>
	);
};
