import { ContentPhoto, ContentTitle } from "./ui";
import { ArticleBanner } from "./ui/Article/Article";
import { NavLink } from "react-router-dom";
import ContentCard from "./ui/ContentCard";

export const SeguridadDatosWeb = () => {
	return (
		<section>
			<ArticleBanner
				title="Seguridad en la Comunicación de Datos de la Red"
				path="./assets/img/background.svg"
			/>
			<div className="flex gap-8 mx-4 justify-center">
				<ContentCard>
					<ContentPhoto
						width={250}
						path="https://th.bing.com/th/id/R.463c3a3340d4d5eac83877acc3e4143c?rik=mlHs7VrD%2f0jcRg&pid=ImgRaw&r=0"
					/>
					<ContentTitle title="Introducción" />
					<NavLink to="/seguridad-datos-red/Intro">
						<button className="xl:text-md text-sm bg-violet-700 mr-4 py-1 px-6 float-right rounded-[4px] text-white font-medium hover:bg-[#5B21B6] cursor-pointer">
							Leer
						</button>
					</NavLink>
				</ContentCard>
				<ContentCard>
					<ContentPhoto
						width={250}
						path="https://th.bing.com/th/id/OIP.0_05fwtp6wOeNCBZURoRsgHaE8?pid=ImgDet&rs=1"
					/>
					<ContentTitle title="Redes Perimetrales" />
					<NavLink to="/seguridad-datos-red/redes-perimetrales">
						<button className="xl:text-md text-sm bg-violet-700 mr-4 py-1 px-6 float-right rounded-[4px] text-white font-medium hover:bg-[#5B21B6] cursor-pointer">
							Leer
						</button>
					</NavLink>
				</ContentCard>
				<ContentCard>
					<ContentPhoto
						width={250}
						height={250}
						path="https://gloify.com/wp-content/uploads/2020/06/SSL-.png"
					/>
					<ContentTitle title="HoneyNets" />
					<NavLink to="/seguridad-datos-red/honeynets">
						<button className="xl:text-md text-sm bg-violet-700 mr-4 py-1 px-6 float-right rounded-[4px] text-white font-medium hover:bg-[#5B21B6] cursor-pointer">
							Leer
						</button>
					</NavLink>
				</ContentCard>
			</div>
		</section>
	);
};
