import { useRef } from "react";
import Intro from "./IoT/Intro";
import { ContentLink } from "./ui";
import { ArticleBanner } from "./ui/Article/Article";
import IndexCard from "./ui/IndexCard";

export default function IoT() {
	const iotRef = useRef<HTMLDivElement | null>(null);

	return (
		<section className="bg-gray-100">
			<ArticleBanner path="./RySC/assets/img/placeholder.JPG" />
			<div className="flex gap-8 mx-4">
				{/* index */}
				<IndexCard>
					<ContentLink linkTitle="¿Qué es IoT?" refSetter={iotRef} />
				</IndexCard>
				{/* contenido */}
				<article className="w-3/5 bg-white px-8 py-8 gap-1">
					<div ref={iotRef}>
						<Intro />
					</div>
				</article>
			</div>
		</section>
	);
}
