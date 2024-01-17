export const Title = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="flex w-full justify-center pb-24">
			<h1 className="text-3xl font-bold">{children}</h1>
		</div>
	);
};
