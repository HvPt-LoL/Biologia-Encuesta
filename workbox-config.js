module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{png,jpeg,html,json,js}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};