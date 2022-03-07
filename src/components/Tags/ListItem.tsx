import { useAppSelector, useAppDispatch } from '@src/store/hooks';
import { setActiveDialog } from '@src/store/tagsSlice';
import { selectTags } from '@src/store/tagsSlice/selectors';

import { Button } from '@src/components/Ui';

export function ListItem({ index }: Props.Tags.ListItem) {
  const dispatch = useAppDispatch();

  const { name } = useAppSelector(selectTags)[index];

  const openEditDialog = () => {
    dispatch(setActiveDialog({
      dialog: 'edit',
      index,
    }));
  };

  const openDeleteDialog = () => {
    dispatch(setActiveDialog({
      dialog: 'delete',
      index,
    }));
  };

  return (
    <li className="tag-list-item">
            <span className="tag-label">
              {index} :: {name}
            </span>
      <ul className="tag-actions">
        <li>
          <Button text={'Edit'} onClick={openEditDialog}/>
        </li>
        <li>
          <Button text={'Delete'} onClick={openDeleteDialog}/>
        </li>
      </ul>
    </li>
  );
}
