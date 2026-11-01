export const DEPRECATION_REASON =
  "Goodreads no longer allows anonymous access to shelf data: the public shelf pages now require a login session and the shelf RSS feeds have been removed. See https://github.com/kylekarpack/react-goodreads-shelf#deprecation for details and alternatives.";

let hasWarned = false;

export const warnDeprecated = (): void => {
  if (hasWarned) return;
  hasWarned = true;
  // eslint-disable-next-line no-console
  console.warn(`react-goodreads-shelf is deprecated and no longer fetches data. ${DEPRECATION_REASON}`);
};