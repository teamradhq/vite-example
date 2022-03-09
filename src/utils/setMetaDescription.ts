/**
 * Create a meta description element and attach it to document head.
 */
function createMetaElement() {
  const meta = document.createElement('meta');

  meta.setAttribute('name', 'description');
  meta.setAttribute('content', '');

  document.head.appendChild(meta);

  return meta;
}

/**
 * Get the meta description from document head.
 *
 */
function getMeta() {
  const element = document.head
    .querySelector<HTMLMediaElement>('meta[name=description]');

  return element ? element : createMetaElement();
}

/**
 * Set the meta description `content`.
 *
 * @param content
 */
export function setMetaDescription(content: string) {
  getMeta().setAttribute('content', content);
}
