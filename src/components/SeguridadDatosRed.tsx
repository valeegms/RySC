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
						path="https://th.bing.com/th/id/OIP.mnoj4yP-m5SaCn2VLaP5twHaD4?pid=ImgDet&rs=1"
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
						path="https://th.bing.com/th/id/R.44ac55dceb490c9362cfcfec697f372a?rik=oOwF1Eg9yoWteA&pid=ImgRaw&r=0"
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
						path="https://linuxsecurity.com/images/articles/features/HoneynetsThumbnail.png"
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
