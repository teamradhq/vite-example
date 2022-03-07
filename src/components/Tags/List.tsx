import { FC } from 'react';
import { ListItem } from '@src/components/Tags/ListItem';

export const List: FC<Props.Tags.List> = function TagList(props) {
  const tags = props?.tags?.length ? props.tags : [];
  const children = props.children || tags.map((tag, index) => (
    <ListItem index={index} key={tag.key} />
  ));

  return (
    <ul className="tags-list">
      {children}
    </ul>
  );
};
