import type { Handle } from '@sveltejs/kit';

function htmlLangFromPath(pathname: string): string {
	return pathname === '/no' || pathname.startsWith('/no/') ? 'no' : 'en';
}

export const handle: Handle = async ({ event, resolve }) => {
	const lang = htmlLangFromPath(event.url.pathname);
	return resolve(event, {
		transformPageChunk: ({ html }) => html.replaceAll('__SK_LANG__', lang)
	});
};
