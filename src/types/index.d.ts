
type NullableType<T> = T | null | undefined;

type Spaceship = -1 | 0 | 1;

type ChangeEventHandler<Element> = React.ChangeEventHandler<Element>;
type MouseEventHandler<Element> = React.MouseEventHandler<Element>;

declare namespace Props {
  namespace Ui {
    interface Button {
      text: string,
      type?: 'button' | 'submit',
      onClick?: MouseEventHandler<HTMLButtonElement>,
    }

    interface Modal extends Button {
      onCancel?: Modal['onClick'],
      onAccept?: Modal['onClick'],
      isOpen?: boolean,
    }

    interface IFormElement<Element, Value = string> {
      label?: string,
      name?: string,
      id?: string,
      value: Value,
      onChange?: ChangeEventHandler<Element>,
    }

    type Input<Value = string> = IFormElement<HTMLInputElement, Value>
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
      sort: 'name' | 'group',
      sortDirection: 'asc' | 'desc',
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
