import { v4 } from 'uuid';

export type DefineKeyOptions = {
  prefix?: string,
  suffix?: string,
}

/**
 * Service container for `uuid` which is used for generating unique ids.
 *
 * @param prefix
 * @param suffix
 */
export function uuid({ prefix, suffix }: DefineKeyOptions = {}): string {
  let result = '';
  if (prefix) {
    result += `${prefix}-`;
  }

  result += v4();

  if (suffix) {
    result += `-${suffix}`;
  }

  return result;
}
