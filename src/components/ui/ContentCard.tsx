export default function ContentCard(props: any) {
	return (
		<article className="mt-8 bg-gray-10 pb-8 shadow-md">
			{props.children}
		</article>
	);
}

export const ContentPhoto: React.FC<{
	width?: number;
	height?: number;
	path: string;
}> = ({ width, height, path }) => {
	return <img width={width} height={height} src={path} alt="" />;
};

export const ContentTitle: React.FC<{
	title: string;
}> = ({ title }) => {
	return (
		<h3 className="text-center text-xl font-semibold mb-2 text-gray-800">
			{title}
		</h3>
	);
};
