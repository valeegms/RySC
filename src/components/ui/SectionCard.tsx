export default function SectionCard(props: any) {
	return (
		<div
			className={`bg-violet-100 flex flex-col card items-center w-96 px-12 py-8 rounded-md`}
		>
			{props.children}
		</div>
	);
}

export function SectionCardAmber(props: any) {
	return (
		<div
			className={`bg-amber-100 flex flex-col card items-center w-96 px-12 py-8 rounded-md`}
		>
			{props.children}
		</div>
	);
}

export function SectionCardBack(props: any) {
	return (
		<div>
			<button>Redes Perímetrales</button>
			<button>HoneyNets</button>
		</div>
	);
}

export const SectionPhoto: React.FC<{
	width?: number;
	height?: number;
	path: string;
}> = ({ width, height, path }) => {
	return <img width={width} height={height} src={path} alt="" />;
};

export const SectionTitle: React.FC<{
	title: string;
}> = ({ title }) => {
	return (
		<h3 className="font-medium pt-6 text-lg text-center text-gray-800">
			{title}
		</h3>
	);
};
