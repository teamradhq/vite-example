import { useAppDispatch } from '@src/store/hooks';
import { setActiveDialog } from '@src/store/tagsSlice';

import { Button } from '@src/components/Ui/Button';
import { MouseEventHandler } from 'react';

export function TagDialogClose(props: Partial<Props.Ui.Button> = {}) {
  const dispatch = useAppDispatch();

  const closeDialog: MouseEventHandler<HTMLButtonElement> = (e) => {
    if (props.onClick) {
      props.onClick(e);
    }

    dispatch(setActiveDialog({
      dialog: null,
    }));
  };

  return (
    <Button text={props.text || 'X'} onClick={closeDialog} />
  );
}
