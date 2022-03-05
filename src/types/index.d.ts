
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

declare namespace State {
  namespace Tags {
    type Tag = {
      name: string,
      key: string,
      index: number,
      group?: string,
    }

    type New = Partial<Tag> & Pick<Tag, 'name'>

    type Dialog = NullableType<'delete' | 'edit'>;

    type Store = {
      activeDialog: Dialog,
      activeIndex: number,
      data: Tag[],
    };

    namespace Payload {
      type Dialog = {
        dialog: State.Tags.Dialog,
        index?: number,
      };
    }
  }
}
