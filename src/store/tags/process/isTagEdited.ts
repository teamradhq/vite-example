
/**
 * Check for changes between `previous` and `current` tag state.
 *
 * @param previous
 * @param current
 */
export function isTagEdited(previous: State.Tags.Tag, current: State.Tags.Tag): boolean {
  const editableKeys: (keyof State.Tags.Tag)[] = [
    'name',
    'group',
  ];

  for (const key of editableKeys) {
    if (previous[key] !== current[key]) {
      return true;
    }
  }

  return false;
}
