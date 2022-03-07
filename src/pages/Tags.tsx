import { useState, useRef } from 'react';
import { useAppSelector, useAppDispatch } from '@src/store/hooks';
import { addTag } from '@src/store/tagsSlice';
import type {
  ChangeEvent,
  FormEventHandler,
} from 'react';
import { uuid } from '@src/services/uuid';
import './Tags.css';
import { TagListItem } from '@src/components/TagListItem';
import { TagEdit } from '@src/components/TagEdit';
import { TagDelete } from '@src/components/TagDelete';
import { Modal } from '@src/components/Modal';
import {
  selectGroupedTags, selectTags,
} from '@src/store/tagsSlice/selectors';

export function Tags() {
  const dispatch = useAppDispatch();
  const tags = useAppSelector(selectTags);
  const groups = useAppSelector(selectGroupedTags);
  const inputRef = useRef<HTMLInputElement>(null);
  const [addNew, setAddNew] = useState('');

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAddNew(e.currentTarget.value);
  };

  const onSubmit: FormEventHandler = (e) => {
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
      <h3>Tags</h3>
      <form onSubmit={onSubmit}>
        <input type="text"
           value={addNew}
           onChange={onChange}
           ref={inputRef}
        />
      </form>
      <ul className="tags-list">
        {tags.map(({ key, index }) => (
          <TagListItem index={index} key={key} />
        ))}
      </ul>
      <TagEdit />
      <TagDelete />
      <Modal text="Awesome" >
        <h1>This is some Content</h1>
      </Modal>
      <ul className="tag-groups">
        {groups.map(([key, groupTags]) => (
          <div key={uuid()}>
            <h4>{key}</h4>
            <ul className="tags-list">
              {groupTags.map(({ index }) => (
                <TagListItem index={index} key={uuid()} />
              ))}
            </ul>
          </div>
        ))}
      </ul>
    </div>
  );
}
