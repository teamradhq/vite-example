import {
  useAppSelector,
  useAppDispatch,
} from '@src/store/hooks';
import {
  editTag,


} from '@src/store/tagsSlice';

import { TagDialogClose } from '@src/components/TagDialogClose';
import { Button } from '@src/components/Button';
import { ChangeEventHandler, useState } from 'react';
import {
  selectActiveDialog,
  selectActiveTag,
} from '@src/store/tagsSlice/selectors';

export function TagEdit() {
  const dispatch = useAppDispatch();
  const activeDialog = useAppSelector(selectActiveDialog);
  const activeTag = useAppSelector(selectActiveTag);
  const [values, setValues] = useState({
    name: activeTag?.name || '',
  });

  if (activeDialog !== 'edit' || !activeTag) {
    return null;
  }

  /**
   * When form input changes, we update its value unless the
   * new value is empty. This is because an empty value will
   * be substituted for the previous tag name.
   *
   * @param e
   */
  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { value } = e.currentTarget;

    if (value.length < 1) {
      return;
    }

    setValues({
      name: value,
    });
  };

  /* Reset input value to stored tag name on exit. */
  const cancelTag = () => {
    setValues({
      name: activeTag.name,
    });
  };

  const saveTag = () => {
    dispatch(editTag({
      ...activeTag,
      ...values,
    }));
  };

  const inputName = `${activeTag.key}-input`;

  return (
    <div className="dialog tag-edit">
      <TagDialogClose text={'X'} onClick={cancelTag} />
      <strong>
          Edit: {name}
      </strong>
      <div>
        <label htmlFor={inputName}>Name</label>
        <input
          id={inputName}
          name={inputName}
          onChange={onChange}
          value={values.name || activeTag.name}
        />
      </div>
      <div>
        <TagDialogClose text={'Cancel'} onClick={cancelTag} />
        <Button text={'Save'} onClick={saveTag} />
      </div>
    </div>
  );
}
