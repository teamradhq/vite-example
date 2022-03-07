import { RootState } from '@src/store';

const DEFAULT_GROUP = 'Ungrouped';

type TagGroups = {
  [key: string]: State.Tags.Tag[],
};

/**
 * Reduce `tags` to a `TagGroups` object.
 *
 * @param data
 */
function makeTagGroups(data: State.Tags.Tag[]): TagGroups {
  return data.reduce((result: TagGroups, current) => {
    const key = current.group || DEFAULT_GROUP;

    if (!result[key]) {
      result[key] = [];
    }

    result[key].push(current);

    return result;
  }, {});
}

/**
 * Create an alphabetically ordered map of `groups` with the ungrouped
 * collection at the top.
 *
 * @param groups
 */
function mapTagGroups(groups: TagGroups): Map<string, State.Tags.Tag[]> {
  const map = new Map([[DEFAULT_GROUP, [] as State.Tags.Tag[]]]);

  for (const key of Object.keys(groups).sort()) {
    map.set(key, groups[key]);
  }

  return map;
}

/**
 * Build an array of sorted group entries.
 * @param map
 */
function toGroupEntries(map: Map<string, State.Tags.Tag[]>): [
  string,
  State.Tags.Tag[]
][] {
  /** Generate array of sorted group entries. */
  const sorted: [string, State.Tags.Tag[]][] = [];

  for (const [key, value] of map.entries()) {
    sorted.push([key, value]);
  }

  return sorted;
}

/**
 * Get tags sorted into groups.
 *
 * @param state
 */
export const selectGroupedTags = (state: RootState) => {
  const groups = makeTagGroups(state.tags.data);
  const map = mapTagGroups(groups);

  return toGroupEntries(map);
};
