import React from "react";

export default function IndexCard(props: any) {
	return (
		<aside className="px-4 py-6 w-80 bg-white h-fit rounded-md mt-6">
			<h1 className="text-2xl font-semibold text-gray-800 mb-1">Contenido</h1>
			<ul>{props.children}</ul>
		</aside>
	);
}

export const ContentLink: React.FC<{
	linkTitle: string;
	refSetter: any;
}> = ({ linkTitle, refSetter }) => {
	const handleScroll = () => {
		window.scrollTo({
			top: refSetter.current?.offsetTop,
			left: 0,
			behavior: "smooth",
		});
	};

	return (
		<li
			onClick={handleScroll}
			className="content-link w-fit cursor-pointer ml-4 mb-1 link font-medium text-gray-400 hover:text-violet-700"
		>
			{linkTitle}
		</li>
	);
};
