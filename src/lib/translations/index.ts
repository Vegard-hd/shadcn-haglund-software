export type { Itranslations } from './Itranslations';

import { englishTranslations } from './en';
import { norwegianTranslations } from './no';
import type { Itranslations } from './Itranslations';

export type TranslationLocale = 'en' | 'no';

export const translations: Record<TranslationLocale, Itranslations> = {
	en: englishTranslations,
	no: norwegianTranslations
};

export function getTranslations(locale: string = 'en'): Itranslations {
	return locale.toLowerCase().startsWith('no') ? translations.no : translations.en;
}

export const content = getTranslations('en');

