import { uuid } from '@src/services/uuid';

/**
 * Generate a unique key for a tag.
 */
export const tagKey = () => uuid({ prefix: 'tag' });
