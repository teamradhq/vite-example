import { FC } from 'react';
import { ListItem } from '@src/components/Tags/ListItem';

import './List.css';

const mapListItem = ({
  index,
  key,
  name,
  group,
}: State.Tags.Tag) => (
  <ListItem
    index={index}
    key={key}
    name={name}
    group={group}
  />
);

export const List: FC<Props.Tags.List> = function TagList(props) {
  const tags = props?.tags?.length ? props.tags : [];
  const children = props.children || tags.map(mapListItem);

  return (
    <ul className="tag-list" data-testid="tag-list">
      {children}
    </ul>
  );
};
