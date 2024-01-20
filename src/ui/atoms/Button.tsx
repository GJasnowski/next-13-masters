import { type MouseEventHandler, type ReactNode } from "react";

export const Button = ({
	onClick,
	children,
}: {
	onClick: MouseEventHandler;
	children: ReactNode;
}) => {
	return (
		<button className="rounded-full bg-slate-800 px-2 py-1 text-slate-100" onClick={onClick}>
			{children}
		</button>
	);
};
