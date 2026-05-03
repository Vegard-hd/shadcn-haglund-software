import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {

		alias: {
			'$lib': 'src/lib',
			'$components': 'src/lib/components',
			'$utils': 'src/lib/utils',
			'$stores': 'src/lib/stores',
			'$routes': 'src/routes'
		},

		adapter: adapter({
			// default options are shown. On some platforms
			// these options are set automatically — see below

			pages: 'build',
			assets: 'build',
			fallback: undefined,
			precompress: false,
			strict: true
		})
	}
};

export default config;