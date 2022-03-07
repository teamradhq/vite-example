import { useAppSelector, useAppDispatch } from '@src/store/hooks';
import { deleteTag } from '@src/store/tagsSlice';
import {
  selectActiveDialog,
  selectActiveTag,
} from '@src/store/tagsSlice/selectors';

import { Button } from '@src/components/Ui/Button';
import { CloseDialog } from '@src/components/Tags/CloseDialog';

export function DeleteForm() {
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
      <CloseDialog />
      <div>
        <h4>Warning!</h4>
        <p>You are about to delete the tag <strong>{name}</strong>!</p>
        <p>Are you sure you want to continue?</p>
      </div>
      <div>
        <Button text="Ok" onClick={onClick} />
        <CloseDialog text="Cancel" />
      </div>
    </div>
  );
}
