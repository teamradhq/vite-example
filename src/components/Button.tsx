import { FC } from 'react';
import './Button.css';

export const Button: FC<Props.Button> = ({
  onClick,
  text,
  type,
}: Props.Button) => {
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
