export const Badge: React.FC<{ title: string }> = ({ title }) => {
	return (
		<span className="text-sm bg-violet-200 px-4 py-1 rounded-full font-semibold">
			{title}
		</span>
	);
};
