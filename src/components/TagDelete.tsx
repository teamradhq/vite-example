import {
  useAppSelector,
  useAppDispatch,
} from '@src/store/hooks';
import {
  deleteTag,
} from '@src/store/tagsSlice';

import { TagDialogClose } from '@src/components/TagDialogClose';
import { Button } from '@src/components/Button';
import { selectActiveDialog, selectActiveTag } from '@src/store/tagsSlice/selectors';

export function TagDelete() {
  const dispatch = useAppDispatch();

  const activeDialog = useAppSelector(selectActiveDialog);
  const activeTag = useAppSelector(selectActiveTag);

  if (activeDialog !== 'delete' || !activeTag) {
    return null;
  }

  const onClick = () => {
    dispatch(deleteTag(activeTag));
  };

  const { name } = activeTag;
  return (
    <div className="dialog tag-delete">
      <TagDialogClose />
      <div>
        <h4>Warning!</h4>
        <p>You are about to delete the tag <strong>{name}</strong>!</p>
        <p>Are you sure you want to continue?</p>
      </div>
      <div>
        <Button text="Ok" onClick={onClick} />
        <TagDialogClose text="Cancel" />
      </div>
    </div>
  );
}
