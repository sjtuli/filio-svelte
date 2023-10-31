import { getLocaleFromNavigator, init, register } from 'svelte-i18n';

register('en', () => import('$lib/en.json'));
register('en-US', () => import('$lib/en-US.json'));

init({
  fallbackLocale: 'en',
  initialLocale: getLocaleFromNavigator(),
  ignoreTag: false,
});
