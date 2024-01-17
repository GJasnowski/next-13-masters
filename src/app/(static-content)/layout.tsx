import { type ReactNode } from "react";

export default function StaticContentLayout({ children }: { children: ReactNode }) {
	return <div className="p-8">{children}</div>;
}
