/** Prerender variants for optional `[[locale]]` (English unprefixed, `/no`, `/en` redirect targets). */
export function localeParamEntries() {
	return [{ locale: undefined }, { locale: 'no' as const }, { locale: 'en' as const }];
}
