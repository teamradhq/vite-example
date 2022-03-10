import { useAppDispatch } from '@src/store/hooks';
import { setActiveDialog } from '@src/store/tags';

import { Button } from '@src/components/Ui';

import './ListItem.css';

export function ListItem({
 index,
 name,
 group,
}: Props.Tags.ListItem) {
  const dispatch = useAppDispatch();

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
    <li className="tag-list-item" data-testid="list-item">
      <span className="tag-label">
        {index} :: {name} :: ({group})
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
