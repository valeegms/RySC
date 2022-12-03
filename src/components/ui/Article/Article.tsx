import { MutableRefObject } from "react";

export default function Article(props: any) {
	return (
		<article className="w-3/4 bg-white px-8 py-8 m-auto">
			{props.children}
		</article>
	);
}

export const ArticleBanner: React.FC<{ path: string }> = ({ path }) => {
	return <img className="w-screen h-[320px] object-cover" src={path} alt="" />;
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

export const ArticleContent: React.FC<{ children: any }> = ({ children }) => {
	return <div>{children}</div>;
};
