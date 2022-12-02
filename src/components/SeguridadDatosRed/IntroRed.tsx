import { Badge } from "../ui";
import Article, {
	ArticleTitle,
	ArticleImage,
	ArticleContent,
} from "../ui/Article/Article";

export default function IntroRed() {
	return (
		<Article>
			<Badge title="Seguridad" />
			<ArticleTitle title="Seguridad en la comunicación de datos de una red" />
			<ArticleContent>
				<ArticleImage
					float="right"
					width={350}
					path="./RySC/assets/img/placeholder.JPG"
				/>
				<p className="py-2 text-justify text-sm">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
					turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec
					fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus
					elit sed risus. Maecenas eget condimentum velit, sit amet feugiat
					lectus. Class aptent taciti sociosqu ad litora torquent per conubia
					nostra, per inceptos himenaeos. Praesent auctor purus luctus enim
					egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex.
					Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum
					lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in
					elementum tellus.
				</p>
			</ArticleContent>
		</Article>
	);
}
