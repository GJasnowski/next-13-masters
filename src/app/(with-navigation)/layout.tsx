import { type ReactNode } from "react";
import { Navbar } from "@/ui/organisms/Navbar";

export default function WithNavigationLayout({ children }: { children: ReactNode }) {
	return (
		<div>
			<Navbar />
			<div className="p-8">{children}</div>
		</div>
	);
}
