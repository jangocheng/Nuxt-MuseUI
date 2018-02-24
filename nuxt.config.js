module.exports = {
	/*
	** Headers of the page
	*/
	head: {
		title: 'NUXT',
		meta: [
			{charset: 'utf-8'},
			{name: 'viewport', content: 'width=device-width, initial-scale=1'},
			{hid: 'description', name: 'description', content: 'Nuxt.js project'}
		],
		link: [
			{rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
			{rel: 'stylesheet',  href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,400italic'},
			{rel: 'stylesheet',  href: 'https://fonts.googleapis.com/icon?family=Material+Icons'}
		]

	},
	/*
	** Global CSS
	*/
	css: [
		'~/assets/css/main.css',
		'muse-ui/dist/muse-ui.css',
		'~/assets/css/animate.min.css',
	],
	plugins: [{
		src: '~plugins/MuseUI',
		ssr: true,
	}],
	build: {
		vendor: ['axios','muse-ui'],
		/*
		** Run ESLINT on save
		*/
		extend(config, ctx) {
			// if (ctx.isClient) {
			//   config.module.rules.push({
			//     enforce: 'pre',
			//     test: /\.(js|vue)$/,
			//     loader: 'eslint-loader',
			//     exclude: /(node_modules)/
			//   })
			// }
		}
	}
}
