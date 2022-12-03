import { NavLink } from "react-router-dom";
import { ContentPhoto, ContentTitle } from "./ui";
import { ArticleBanner } from "./ui/Article/Article";
import ContentCard from "./ui/ContentCard";

export default function IoT() {
	return (
		<section>
			<ArticleBanner path="./assets/img/placeholder.JPG" />
			<div className="flex gap-8 mx-4 justify-center">
				<ContentCard>
					<ContentPhoto
						width={250}
						path="https://th.bing.com/th/id/R.463c3a3340d4d5eac83877acc3e4143c?rik=mlHs7VrD%2f0jcRg&pid=ImgRaw&r=0"
					/>
					<ContentTitle title="Introducción" />
					<button className="xl:text-md text-sm bg-violet-700 mr-4 py-1 px-6 float-right rounded-[4px] text-white font-medium hover:bg-[#5B21B6] cursor-pointer">
						<NavLink to="/RySC/iot/Intro">Leer</NavLink>
					</button>
				</ContentCard>
				<ContentCard>
					<ContentPhoto
						width={250}
						path="https://th.bing.com/th/id/OIP.0_05fwtp6wOeNCBZURoRsgHaE8?pid=ImgDet&rs=1"
					/>
					<ContentTitle title="Sección 1" />
					<button className="xl:text-md text-sm bg-violet-700 mr-4 py-1 px-6 float-right rounded-[4px] text-white font-medium hover:bg-[#5B21B6] cursor-pointer">
						<NavLink to="/RySC/iot/HTTPS">Leer</NavLink>
					</button>
				</ContentCard>
				<ContentCard>
					<ContentPhoto
						width={250}
						height={250}
						path="https://gloify.com/wp-content/uploads/2020/06/SSL-.png"
					/>
					<ContentTitle title="Sección 2" />
					<button className="xl:text-md text-sm bg-violet-700 mr-4 py-1 px-6 float-right rounded-[4px] text-white font-medium hover:bg-[#5B21B6] cursor-pointer">
						<NavLink to="/RySC/iot/SSL">Leer</NavLink>
					</button>
				</ContentCard>
			</div>
		</section>
	);
}
