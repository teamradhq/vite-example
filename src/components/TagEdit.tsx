import {
  useAppSelector,
} from '@src/store/hooks';
import {
  selectActiveDialog,
  selectActiveTag,
} from '@src/store/tagsSlice';

import { TagDialogClose } from '@src/components/TagDialogClose';

export function TagEdit() {
  const activeDialog = useAppSelector(selectActiveDialog);
  const activeTag = useAppSelector(selectActiveTag);

  if (activeDialog !== 'edit' || !activeTag) {
    return null;
  }

  return (
    <div className="dialog tag-edit">
      <TagDialogClose />
      <strong>
          Edit: {name}
      </strong>
    </div>
  );
}
