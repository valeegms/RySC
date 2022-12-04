export default function SectionCard(props: any) {
	return (
		<div className="card-container h-80">
			<div
				className={`bg-violet-100 h-full flex flex-col card items-center w-96 px-12 py-8 rounded-md`}
			>
				{props.children}
			</div>
		</div>
	);
}

export function SectionCardAmber(props: any) {
	return (
		<div className="card-container h-80">
			<div
				className={`bg-amber-100 h-full flex flex-col card items-center w-96 px-12 py-8 rounded-md`}
			>
				{props.children}
			</div>
		</div>
	);
}

export function SectionCardBack(props: any) {
	return (
		<section className="back flex bg-gradient-to-t from-indigo-400 via-violet-400 to-amber-100 items-center justify-center w-full h-full">
			<div>
				<h3 className=" text-gray-800 text-lg font-semibold">Secciones</h3>
				<div className="flex flex-col gap-4">{props.children}</div>
			</div>
		</section>
	);
}

export const SectionPhoto: React.FC<{
	width?: number;
	height?: number;
	path: string;
}> = ({ width, height, path }) => {
	return (
		<img className="m-auto" width={width} height={height} src={path} alt="" />
	);
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
