import { useState, useRef } from 'react';
import {
  selectActiveIndex,
  selectActiveTag,
  selectTags,
  setActiveIndex,
} from '@src/store/tagsSlice';
import { useAppSelector, useAppDispatch } from '@src/store/hooks';
import { addTag } from '@src/store/tagsSlice';
import type {
  ChangeEvent,
  FormEventHandler,
} from 'react';
import { Button } from '@src/components/Button';


type ActiveDialog = 'delete' | 'edit' | null;

import './Tags.css';

export function Tags() {
  const [addNew, setAddNew] = useState('');
  const [activeDialog, setActiveDialog] = useState<ActiveDialog>(null);

  const dispatch = useAppDispatch();
  const tags = useAppSelector(selectTags);
  const activeIndex = useAppSelector(selectActiveIndex);
  const activeTag = useAppSelector(selectActiveTag);
  const inputRef = useRef<HTMLInputElement>(null);

  const toggleIndex = (index: number) => () => {
    dispatch(setActiveIndex(
      activeIndex === index ? -1 : index,
    ));
  };

  const openEditDialog = (index: number) => () => {
    toggleIndex(index);
    setActiveDialog('edit');
  };

  const openDeleteDialog =  (index: number) => () => {
    toggleIndex(index);
    setActiveDialog('delete');
  };

  const closeDialog = () => {
    toggleIndex(-1);
    setActiveDialog(null);
  };

  const updateTag = (e: ChangeEvent<HTMLInputElement>) => {
    setAddNew(e.currentTarget.value);
  };

  const addNewTag: FormEventHandler = (e) => {
    e.preventDefault();

    if (!inputRef.current) {
      return;
    }

    const { value } = inputRef.current;

    dispatch(addTag({ name: value }));
    setAddNew('');
  };

  return (
    <div className="page page-tags">
      <h3>Tags are awesome!</h3>
      <form onSubmit={addNewTag}>
        <input type="text"
           value={addNew}
           onChange={updateTag}
           ref={inputRef}
        />
      </form>
      <ul>
        <li>
          <Button text={'Close'} onClick={closeDialog} />
        </li>
      </ul>
      <ul className="tags-list">
        {tags.map(({ name, key, index }) => (
          <li key={key}>
            <span className="tag-label">
              {index} :: {name}
            </span>
            <ul className="tag-actions">
              <li>
                <Button text={'Edit'} onClick={openEditDialog(index)}/>
              </li>
              <li>
                <Button text={'Delete'} onClick={openDeleteDialog(index)}/>
              </li>
            </ul>
          </li>
        ))}
      </ul>
      <strong>
        {activeTag && activeDialog === 'edit' && (
          <div>Edit: {activeTag.name}</div>
        )}
        {activeTag && activeDialog === 'delete' && (
          <div>Delete: {activeTag.name}</div>
        )}
      </strong>
      <p>
        Active Dialog: {activeDialog || 'none'}
      </p>
      <p>
        Active: <br/> {activeIndex}
      </p>
      <pre>
        {JSON.stringify(activeTag || {}, null, 2)}
      </pre>
    </div>
  );
}
