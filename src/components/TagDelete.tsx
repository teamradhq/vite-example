import {
  useAppSelector,
} from '@src/store/hooks';
import {
  selectActiveDialog,
  selectActiveTag,
} from '@src/store/tagsSlice';

import { TagDialogClose } from '@src/components/TagDialogClose';

export function TagDelete() {
  const activeDialog = useAppSelector(selectActiveDialog);
  const activeTag = useAppSelector(selectActiveTag);

  if (activeDialog !== 'delete' || !activeTag) {
    return null;
  }

  return (
    <div className="tag-delete">
      <strong>
          Delete: {activeTag.name}
      </strong>
      <TagDialogClose />
    </div>
  );
}
