import { FC } from 'react';
import './Button.css';

export const Button: FC<Props.Ui.Button> = ({
  onClick,
  text,
  type,
}: Props.Ui.Button) => {
  if (onClick) {
    return (
      <button
        className="ui-button"
        type={type || 'button'}
        onClick={onClick}
      >
        <span>{text}</span>
      </button>
    );
  }

  return (
    <button className="ui-button" type={type || 'button'}>
      <span>{text}</span>
    </button>
  );
};
