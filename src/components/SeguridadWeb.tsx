import { ArticleBanner } from "./ui/Article/Article";
import ContentCard, { ContentPhoto, ContentTitle } from "./ui/ContentCard";
import { NavLink } from "react-router-dom";

export const SeguridadWeb = () => {
	return (
		<section>
			<ArticleBanner
				title={"Seguridad en la Web"}
				path="./assets/img/background.svg"
			/>
			<div className="flex gap-8 mx-4 justify-center">
				<ContentCard>
					<ContentPhoto
						width={250}
						path="https://th.bing.com/th/id/R.463c3a3340d4d5eac83877acc3e4143c?rik=mlHs7VrD%2f0jcRg&pid=ImgRaw&r=0"
					/>
					<ContentTitle title="Introducción" />
					<NavLink to="/seguridad-web/Intro">
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
					<ContentTitle title="HTTPS" />
					<NavLink to="/seguridad-web/HTTPS">
						<button className="xl:text-md text-sm bg-violet-700 mr-4 py-1 px-6 float-right rounded-[4px] text-white font-medium hover:bg-[#5B21B6] cursor-pointer">
							Leer
						</button>
					</NavLink>
				</ContentCard>
				<ContentCard>
					<ContentPhoto
						width={250}
						path="https://www.knownhost.com/blog/wp-content/uploads/2019/04/SSL-1.jpg"
					/>
					<ContentTitle title="SSL" />
					<NavLink to="/seguridad-web/SSL">
						<button className="xl:text-md text-sm bg-violet-700 mr-4 py-1 px-6 float-right rounded-[4px] text-white font-medium hover:bg-[#5B21B6] cursor-pointer">
							Leer
						</button>
					</NavLink>
				</ContentCard>
			</div>
		</section>
	);
};
