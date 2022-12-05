export const NavigateNext: React.FC<{
	text: string;
}> = ({ text }) => {
	return (
		<button className="flex align-middle mb-4 rounded-md font-medium fill-gray-400 text-gray-400  hover:text-violet-700 hover:fill-violet-700">
			{text}
			<svg
				xmlns="http://www.w3.org/2000/svg"
				height="24px"
				viewBox="0 0 24 24"
				width="24px"
			>
				<path d="M0 0h24v24H0V0z" fill="none" />
				<path d="M9.31 6.71c-.39.39-.39 1.02 0 1.41L13.19 12l-3.88 3.88c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0l4.59-4.59c.39-.39.39-1.02 0-1.41L10.72 6.7c-.38-.38-1.02-.38-1.41.01z" />
			</svg>
		</button>
	);
};
export const NavigatePrevious: React.FC<{
	text: string;
}> = ({ text }) => {
	return (
		<button className="flex align-middle mb-4 rounded-md font-medium fill-gray-400 text-gray-400  hover:text-violet-700 hover:fill-violet-700">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				height="24px"
				viewBox="0 0 24 24"
				width="24px"
			>
				<path d="M0 0h24v24H0V0z" fill="none" />
				<path d="M14.91 6.71c-.39-.39-1.02-.39-1.41 0L8.91 11.3c-.39.39-.39 1.02 0 1.41l4.59 4.59c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L11.03 12l3.88-3.88c.38-.39.38-1.03 0-1.41z" />
			</svg>
			{text}
		</button>
	);
};
