/** @type {import('next').NextConfig} */

const nextConfig = {
	experimental: {
		typedRoutes: true,
	},
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "loremflickr.com",
				pathname: "**",
			},
		],
	},
	async redirects() {
		return [{ source: "/products", destination: "/products/1", permanent: false }];
	},
};

module.exports = nextConfig;
