export default function MemberCard(props: any) {
	return (
		<div className="border-2 w-[400px] text-center border-gray-800 rounded-md px-6 py-2 flex flex-col items-center">
			{props.children}
		</div>
	);
}

export const MemberPhoto: React.FC<{
	width?: number;
	height?: number;
	path: string;
}> = ({ width, height, path }) => {
	return <img width={width} height={height} src={path} alt="" />;
};

export const MemberName: React.FC<{
	name: string;
}> = ({ name }) => {
	return <h1 className="text-xl mt-3 font-semibold text-gray-800">{name}</h1>;
};
