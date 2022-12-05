import { MutableRefObject } from "react";

export default function Article(props: any) {
	return (
		<article className="w-3/4 bg-white px-8 py-8 m-auto">
			{props.children}
		</article>
	);
}

export const ArticleBanner: React.FC<{ path: string; title: string }> = ({
	path,
	title,
}) => {
	return (
		<div className="relative -z-10 p-2 ">
			<img
				className="w-screen rounded-md h-[320px] object-cover"
				src={path}
				alt=""
			/>

			<h1 className="bg-gray-800/50 p-6 w-fit m-auto rounded-md shadow-md absolute top-1/3 left-0 right-0 text-3xl font-bold text-violet-100">
				{title}
			</h1>
			{/* <h1 className="w-fit m-auto absolute top-2/4 left-0 right-0 text-4xl font-bold text-white">
				{title}
			</h1> */}
		</div>
	);
};

export const ArticleImage: React.FC<{
	width?: number;
	height?: number;
	path: string;
	float?: "left" | "right";
}> = ({ width, height, path, float }) => {
	return (
		<img
			width={width}
			height={height}
			className={`float-${float ? float + " mx-2" : "none m-auto"}`}
			src={path}
			alt=""
		/>
	);
};

export const ArticleTitle: React.FC<{
	linkRef?: MutableRefObject<HTMLHeadingElement | null>;
	title: string;
}> = ({ linkRef, title }) => {
	return (
		<h1 ref={linkRef} className="text-4xl mt-3 font-semibold text-violet-700">
			{title}
		</h1>
	);
};

export const ArticleSubtitle: React.FC<{
	linkRef?: MutableRefObject<HTMLHeadingElement | null>;
	title: string;
}> = ({ linkRef, title }) => {
	return (
		<h1 ref={linkRef} className="text-xl font-semibold text-gray-800">
			{title}
		</h1>
	);
};

export const ArticleContent: React.FC<{ children: any }> = ({ children }) => {
	return <div>{children}</div>;
};
