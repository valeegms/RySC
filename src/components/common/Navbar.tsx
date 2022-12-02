import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
	const [isClicked, setIsClicked] = useState(false);

	const clickHandler = () => {
		setIsClicked(!isClicked);
	};
	return (
		<nav className="bg-white flex items-center justify-between drop-shadow py-2 px-4">
			<Link className="flex gap-2" to="/RySC">
				<img src="./logo.svg" alt="" />
				<div className="">
					<span className="font-bold ">Ry</span>
					<span className="font-bold text-violet-700">SC</span>
				</div>
			</Link>
			<section className="flex align-middle gap-4">
				<span>
					<button
						onClick={clickHandler}
						className="flex place-items-center cursor-pointer gap-2 lg:text-base text-sm font-medium text-gray-400 p-2 hover:text-violet-700"
					>
						<p className="">Seguridad</p>
						<img
							src={
								isClicked
									? "./assets/img/expand_less.svg"
									: "./assets/img/expand_more.svg"
							}
							alt=""
						/>
					</button>
					<div
						className={
							isClicked
								? "flex flex-col absolute bg-white p-2 shadow-md right-[16rem]"
								: "hidden"
						}
					>
						<NavLink
							to="/seguridad-web"
							className="cursor-pointer text-gray-400 px-4 py-2 hover:bg-violet-200 hover:text-violet-700"
						>
							Seguridad en la web
						</NavLink>
						<NavLink
							to="/seguridad-datos-red"
							className="cursor-pointer text-gray-400 px-4 py-2 hover:bg-violet-200 hover:text-violet-700"
						>
							Seguridad en la comunicación de datos de una red
						</NavLink>
					</div>
				</span>
				<NavLink
					className="lg:text-base text-sm font-medium text-gray-400 p-2 hover:text-violet-700"
					to="/sockets"
				>
					Sockets
				</NavLink>
				<NavLink
					className="lg:text-base text-sm font-medium text-gray-400 p-2 hover:text-violet-700"
					to="/iot"
				>
					IoT
				</NavLink>
				<NavLink
					className="lg:text-base text-sm font-medium text-gray-400 p-2 hover:text-violet-700"
					to="/nosotros"
				>
					Nosotros
				</NavLink>
			</section>
		</nav>
	);
};
