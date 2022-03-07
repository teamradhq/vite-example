import {
  useAppSelector,
  useAppDispatch,
} from '@src/store/hooks';
import {
  setActiveDialog,
} from '@src/store/tagsSlice';
import { Button } from '@src/components/Ui/Button';
import { selectTags } from '@src/store/tagsSlice/selectors';


export function TagListItem({ index }: Props.TagListItem) {
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
