/** @type {import('next').NextConfig} */
const nextConfig = {
	webpack(config) {
		const fileLoaderRule = config.module.rules.find((rule) =>
			rule.test?.test?.('.svg')
		);
		config.module.rules.push(
			{
				...fileLoaderRule,
				test: /\.svg$/i,
				resourceQuery: /url/ // *.svg?url
			},
			{
				test: /\.svg$/i,
				resourceQuery: { not: /url/ }, // exclude if *.svg?url
				use: ['@svgr/webpack']
			}
		);
		fileLoaderRule.exclude = /\.svg$/i;
		return config;
	},
	images: {
		formats: ['image/avif', 'image/webp'],
		remotePatterns: [
			{
				hostname: 'localhost'
			}
		],
		domains: ['uploadthing.com']
	}
};

module.exports = nextConfig;
