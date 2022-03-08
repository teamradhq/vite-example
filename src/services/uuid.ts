import { v4 } from 'uuid';

import { prefixSuffix } from '@src/utils/prefixSuffix';

/**
 * Service container for `uuid` which is used for generating unique ids.
 *
 * @param prefix
 * @param suffix
 */
export function uuid({ prefix, suffix }: Partial<PrefixOptions> = {}): string {
  return prefixSuffix({
    value: v4(),
    prefix,
    suffix,
  });
}
