import { ArticleBanner } from "./ui/Article/Article";
import ContentCard, { ContentPhoto, ContentTitle } from "./ui/ContentCard";
import { NavLink } from "react-router-dom";

export const SeguridadWeb = () => {
	return (
		<section>
			<ArticleBanner path="https://th.bing.com/th/id/R.41d685fbecf480b193ae0e360664525a?rik=qK2Xd46sWODkZA&pid=ImgRaw&r=0" />
			<div className="flex gap-8 mx-4 justify-center">
				<ContentCard>
					<ContentPhoto
						width={250}
						path="https://th.bing.com/th/id/R.463c3a3340d4d5eac83877acc3e4143c?rik=mlHs7VrD%2f0jcRg&pid=ImgRaw&r=0"
					/>
					<ContentTitle title="Introducción" />
					<button className="xl:text-md text-sm bg-violet-700 mr-4 py-1 px-6 float-right rounded-[4px] text-white font-medium hover:bg-[#5B21B6] cursor-pointer">
						<NavLink to="/seguridad-web/Intro">Leer</NavLink>
					</button>
				</ContentCard>
				<ContentCard>
					<ContentPhoto
						width={250}
						path="https://th.bing.com/th/id/OIP.0_05fwtp6wOeNCBZURoRsgHaE8?pid=ImgDet&rs=1"
					/>
					<ContentTitle title="HTTPS" />
					<button className="xl:text-md text-sm bg-violet-700 mr-4 py-1 px-6 float-right rounded-[4px] text-white font-medium hover:bg-[#5B21B6] cursor-pointer">
						<NavLink to="/seguridad-web/HTTPS">Leer</NavLink>
					</button>
				</ContentCard>
				<ContentCard>
					<ContentPhoto
						width={250}
						path="https://www.knownhost.com/blog/wp-content/uploads/2019/04/SSL-1.jpg"
					/>
					<ContentTitle title="SSL" />
					<button className="xl:text-md text-sm bg-violet-700 mr-4 py-1 px-6 float-right rounded-[4px] text-white font-medium hover:bg-[#5B21B6] cursor-pointer">
						<NavLink to="/seguridad-web/SSL">Leer</NavLink>
					</button>
				</ContentCard>
			</div>
		</section>
	);
};
