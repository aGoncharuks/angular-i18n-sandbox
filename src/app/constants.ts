import { Locale } from './types';

export const LOCALES: Locale[] = [
	{
		displayName: 'English',
		localeId: 'en',
		rootUrl: 'http://localhost:4200'
	},
	{
		displayName: 'Latvian',
		localeId: 'lv',
		rootUrl: 'http://localhost:4300'
	},
	{
		displayName: 'Chinese',
		localeId: 'zh',
		rootUrl: 'http://localhost:4400'
	}
]

export const DEFAULTS = {
	locale: LOCALES[0]
}
