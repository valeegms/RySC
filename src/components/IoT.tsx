import { NavLink } from "react-router-dom";
import { ContentPhoto, ContentTitle } from "./ui";
import { ArticleBanner } from "./ui/Article/Article";
import ContentCard from "./ui/ContentCard";

export default function IoT() {
	return (
		<section>
			<ArticleBanner
				title="Internet de las Cosas"
				path="./assets/img/background.svg"
			/>
			<div className="flex gap-8 mx-4 justify-center">
				<ContentCard>
					<ContentPhoto
						width={250}
						path="https://www.productliabilityadvocate.com/wp-content/uploads/sites/238/2018/12/181211_IOT-CAIOT-4-2200x1307.jpg"
					/>
					<ContentTitle title="Introducción" />
					<NavLink to="/iot/Intro">
						<button className="xl:text-md text-sm bg-violet-700 mr-4 py-1 px-6 float-right rounded-[4px] text-white font-medium hover:bg-[#5B21B6] cursor-pointer">
							Leer
						</button>
					</NavLink>
				</ContentCard>
				<ContentCard>
					<ContentPhoto
						width={250}
						path="https://i0.wp.com/www.chemicalindustryjournal.co.uk/wp-content/uploads/2017/07/Internet-of-Things.jpeg?fit=4964%2C3144&ssl=1"
					/>
					<ContentTitle title="Datos relevantes" />
					<NavLink to="/iot/datos-relevantes">
						<button className="xl:text-md text-sm bg-violet-700 mr-4 py-1 px-6 float-right rounded-[4px] text-white font-medium hover:bg-[#5B21B6] cursor-pointer">
							Leer
						</button>
					</NavLink>
				</ContentCard>
				<ContentCard>
					<ContentPhoto
						width={250}
						height={250}
						path="https://www.theventuremag.com/wp-content/uploads/2019/03/internet-of-things-1500x1001.jpg"
					/>
					<ContentTitle title="Aplicaciones y servicios" />
					<NavLink to="/iot/aplicaciones-servicios">
						<button className="xl:text-md text-sm bg-violet-700 mr-4 py-1 px-6 float-right rounded-[4px] text-white font-medium hover:bg-[#5B21B6] cursor-pointer">
							Leer
						</button>
					</NavLink>
				</ContentCard>
			</div>
		</section>
	);
}
