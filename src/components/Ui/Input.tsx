import { FC, useState } from 'react';
import { uuid } from '@src/services/uuid';

export const Input: FC<Props.Ui.Input> = function Input(props) {
  const [value, setValue] = useState('');

  const name = props.name || uuid();
  const id = props.id || name;

  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    if (props.onChange) {
      props.onChange(e);
    }

    setValue(e.currentTarget.value);
  };

  return (
    <input
      data-testid="ui-input"
      name={name}
      id={id}
      value={value || props.value}
      onChange={onChange}
    />
  );
};
