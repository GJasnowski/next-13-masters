export const Subtitle = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="flex w-full justify-center pb-12">
			<h2 className="text-xl font-bold">{children}</h2>
		</div>
	);
};
