import { redirect } from '@sveltejs/kit';
import { building } from '$app/environment';
import { getTranslations } from '$lib/content';
import type { TranslationLocale } from '$lib/translations';
import type { LayoutLoad } from './$types';

export const prerender = true;

export const load: LayoutLoad = ({ params, url }) => {
	if (params.locale === 'en') {
		const path =
			url.pathname === '/en' ? '/' : url.pathname.replace(/^\/en/, '') || '/';
		const search = building ? '' : url.search;
		redirect(308, path + search);
	}

	const locale: TranslationLocale = params.locale === 'no' ? 'no' : 'en';

	return {
		locale,
		content: getTranslations(locale)
	};
};
