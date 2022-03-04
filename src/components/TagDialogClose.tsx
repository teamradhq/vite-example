import { useAppDispatch } from '@src/store/hooks';
import { setActiveDialog } from '@src/store/tagsSlice';

import { Button } from '@src/components/Button';

export function TagDialogClose(props: Partial<Props.Button> = {}) {
  const dispatch = useAppDispatch();

  const closeDialog = () => {
    dispatch(setActiveDialog({
      dialog: null,
    }));
  };

  return (
    <Button text={props.text || 'X'} onClick={closeDialog} />
  );
}
