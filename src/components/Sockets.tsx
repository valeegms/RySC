import { ArticleBanner } from "./ui/Article/Article";
import { NavLink } from "react-router-dom";
import { ContentPhoto, ContentTitle } from "./ui";
import ContentCard from "./ui/ContentCard";

export const Sockets = () => {
	return (
		<section>
			<ArticleBanner
				title="Programación de aplicaciones con Sockets"
				path="./assets/img/background.svg"
			/>
			<div className="flex gap-8 mx-4 justify-center">
				<ContentCard>
					<ContentPhoto
						width={250}
						path="https://th.bing.com/th/id/R.463c3a3340d4d5eac83877acc3e4143c?rik=mlHs7VrD%2f0jcRg&pid=ImgRaw&r=0"
					/>
					<ContentTitle title="Introducción" />
					<NavLink to="/sockets/Intro">
						<button className="xl:text-md text-sm bg-violet-700 mr-4 py-1 px-6 float-right rounded-[4px] text-white font-medium hover:bg-[#5B21B6] cursor-pointer">
							Leer
						</button>
					</NavLink>
				</ContentCard>
				<ContentCard>
					<ContentPhoto width={250} path="./assets/img/imagen5.png" />
					<ContentTitle title="Sockets TCP en Java" />
					<NavLink to="/sockets/sockets-tcp-java">
						<button className="xl:text-md text-sm bg-violet-700 mr-4 py-1 px-6 float-right rounded-[4px] text-white font-medium hover:bg-[#5B21B6] cursor-pointer">
							Leer
						</button>
					</NavLink>
				</ContentCard>
				<ContentCard>
					<ContentPhoto
						width={250}
						height={250}
						path="./assets/img/Imagen7.png"
					/>
					<ContentTitle title="Sockets UDP en Java" />
					<NavLink to="/sockets/sockets-udp-java">
						<button className="xl:text-md text-sm bg-violet-700 mr-4 py-1 px-6 float-right rounded-[4px] text-white font-medium hover:bg-[#5B21B6] cursor-pointer">
							Leer
						</button>
					</NavLink>
				</ContentCard>
			</div>
		</section>
	);
};
