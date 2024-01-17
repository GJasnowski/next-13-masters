import { type ReactNode } from "react";
import { Navbar } from "@/ui/organisms/Navbar";

export default function WithNavigationLayout({ children }: { children: ReactNode }) {
	return (
		<div>
			<Navbar />
			<div className="flex w-full justify-center">
				<div className="max-w-7xl pb-8 pt-16">{children}</div>
			</div>
		</div>
	);
}
