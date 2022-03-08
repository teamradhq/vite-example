import { prefixSuffix } from '@src/utils/prefixSuffix';

/**
 * Set document title to the app name and add prefix.
 *
 * @param prefix
 */
export function setDocumentTitle(prefix?: string) {
  const value = String(process.env.APP_TITLE);
  const isHome = prefix?.toLowerCase().trim() === 'home';

  document.title = (!isHome && prefix
      ? prefixSuffix({ prefix, value }, ' | ')
      : value
  );
}
