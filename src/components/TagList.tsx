import { FC } from 'react';
import { TagListItem } from '@src/components/TagListItem';
interface TagListProps {
  tags?: State.Tags.Tag[],
}
export const TagList: FC<TagListProps> = function TagList(props) {
  const tags = props?.tags?.length ? props.tags : [];
  const children = props.children || tags.map((tag, index) => (
    <TagListItem index={index} key={tag.key} />
  ));

  return (
    <ul className="tags-list">
      {children}
    </ul>
  );
};
