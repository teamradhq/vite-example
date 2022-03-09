import { prefixSuffix } from '@src/utils';

/**
 * Set document title to the app name and add prefix.
 *
 * @param prefix
 */
export function setDocumentTitle(prefix?: string) {
  const isHome = prefix?.toLowerCase().trim() === 'home';
  let value = String(process.env.APP_TITLE);

  if (prefix && !isHome) {
    value = prefixSuffix({
      prefix,
      value,
    }, ' | ');
  }

  document.title = value;
}
