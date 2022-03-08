import {
  ChangeEventHandler,
  useState,
} from 'react';

import { DEFAULT_GROUP } from '@src/constants';
import { useAppSelector, useAppDispatch } from '@src/store/hooks';
import { editTag } from '@src/store/tagsSlice';
import {
  selectActiveDialog,
  selectActiveTag,
} from '@src/store/tagsSlice/selectors';
import {
  Button,
  Input,
} from '@src/components/Ui';
import { CloseDialog } from '@src/components/Tags/CloseDialog';

export function EditForm() {
  const dispatch = useAppDispatch();
  const activeDialog = useAppSelector(selectActiveDialog);
  const activeTag = useAppSelector(selectActiveTag);
  const [values, setValues] = useState({
    name: activeTag?.name || '',
    group: activeTag?.group || '',
  });

  if (activeDialog !== 'edit' || !activeTag) {
    return null;
  }


  type ChangeFunction = (key: keyof typeof values) => (
    ChangeEventHandler<HTMLInputElement>
  );
  /**
   * When form input changes, we update its value unless the
   * new value is empty. This is because an empty value will
   * be substituted for the previous tag name.
   *
   * @param key
   */
  const onChange: ChangeFunction = (key) => (e) => {
    const { value } = e.currentTarget;

    if (value.length < 1) {
      return;
    }

    setValues({
      ...values,
      [key]: value,
    });
  };

  /* Reset input value to stored tag name on exit. */
  const cancelTag = () => {
    setValues({
      name: activeTag.name,
      group: values.group,
    });
  };

  const saveTag = () => {
    dispatch(editTag({
      ...activeTag,
      name: values.name || activeTag.name,
      group: values.group || activeTag.group,
    }));

    cancelTag();
  };

  const inputNames = {
    name: `${activeTag.key}-name`,
    group:  `${activeTag.key}-group`,
  };

  return (
    <div className="dialog tag-edit">
      <CloseDialog text={'X'} onClick={cancelTag} />
      <strong>
          Edit: {name}
      </strong>
      <div>
        <label htmlFor={inputNames.name}>Name</label>
        <Input
          name={inputNames.name}
          value={values.name || activeTag.name}
          onChange={onChange('name')}
        />
      </div>
      <div>
        <label htmlFor={inputNames.group}>Group</label>
        <Input
          name={inputNames.group}
          value={values.group || activeTag.group || DEFAULT_GROUP}
          onChange={onChange('group')}
        />
      </div>
      <div>
        <CloseDialog text={'Cancel'} onClick={cancelTag} />
        <Button text={'Save'} onClick={saveTag} />
      </div>
    </div>
  );
}
