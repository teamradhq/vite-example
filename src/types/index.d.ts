type NullableType<T> = T | null | undefined;

declare namespace Props {
  interface Button {
    text: string,
    type?: 'button' | 'submit',
    onClick?: React.MouseEventHandler<HTMLButtonElement>,
  }

  interface TagListItem {
    index: number;
  }
}
