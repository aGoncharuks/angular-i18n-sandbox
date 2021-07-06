import { Locale } from './types';

export const LOCALES: Locale[] = [
	{
		displayName: 'English',
		localeId: 'en',
		rootUrl: 'http://localhost:5200'
	},
	{
		displayName: 'Latvian',
		localeId: 'lv',
		rootUrl: 'http://localhost:5300'
	},
	{
		displayName: 'Chinese',
		localeId: 'zh',
		rootUrl: 'http://localhost:5400'
	}
]

export const DEFAULTS = {
	locale: LOCALES[0]
}
