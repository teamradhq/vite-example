export function setDocumentTitle(prefix?: string) {
  const title = String(process.env.APP_TITLE);

  document.title = (prefix ? `${prefix} | ${title}` : title);
}
