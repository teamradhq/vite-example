
type NullableType<T> = T | null | undefined;

type Spaceship = -1 | 0 | 1;

type ChangeEventHandler<Element> = React.ChangeEventHandler<Element>;
type MouseEventHandler<Element> = React.MouseEventHandler<Element>;

interface PrefixOptions {
  prefix?: string,
  suffix?: string,
  value: string,
}

interface PageEntry {
  path: string,
  title: string,
  key: string,
  Component?: React.FC
}

declare namespace Props {
  interface NavLinks {
    pages: Pick<PageEntry, 'path' | 'title' | 'key'>[]
  }

  interface Page {
    slug: string,
    title: string,
  }

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

  namespace Tags {
    interface List {
      tags?: State.Tags.Tag[],
    }

    interface ListItem {
      index: number;
    }
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
