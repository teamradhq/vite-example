import { useState, useRef } from 'react';
import type {
  ChangeEvent,
  FormEventHandler,
} from 'react';
import { uuid } from '@src/services/uuid';

import { useAppSelector, useAppDispatch } from '@src/store/hooks';
import { addTag } from '@src/store/tagsSlice';
import {
  selectGroupedTags,
  selectTags,
} from '@src/store/tagsSlice/selectors';

import { Page } from '@src/pages/Page';
import { List, EditForm, DeleteForm } from '@src/components/Tags';
import { Input, Modal } from '@src/components/Ui';

import './Tags.css';

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
    <Page
      title="Tags"
      slug="tags"
      description="Perform CRUD operations on a set of tags."
    >
      <h3>Tags</h3>
      <form onSubmit={onSubmit}>
        <Input
          value={addNew}
          onChange={onChange}
          ref={inputRef}
        />
      </form>
      <h4>All <span>({tags.length})</span></h4>
      <List tags={tags} />
      <EditForm />
      <DeleteForm />
      <ul className="tag-groups">
        {groups.map(([key, groupTags]) => (
          <div key={uuid()}>
            <h4>{key} <span>({groupTags.length})</span></h4>
            <List tags={groupTags} />
          </div>
        ))}
      </ul>
      <Modal text="Awesome" >
        <h1>This is some Content</h1>
      </Modal>
    </Page>
  );
}
