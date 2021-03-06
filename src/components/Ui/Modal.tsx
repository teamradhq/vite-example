import type { FC } from 'react';
import { PropsWithChildren, useState } from 'react';

import { Button } from '@src/components/Ui/Button';

import './Modal.css';

export const Modal: FC<Props.Ui.Modal> = ({
  // text,
  // type,
  children,
  isOpen,
}: PropsWithChildren<Props.Ui.Modal>) => {
  const [isModalOpen, setIsModalOpen] = useState(Boolean(isOpen));

  const onClick = (isOpen: boolean) => () => {
    setIsModalOpen(isOpen);
  };

  if (!isModalOpen) {
    return <>
      <Button text={'Open'} onClick={onClick(true)} />
    </>;
  }

  return (
    <>
      <Button text={'Open'} onClick={onClick(true)} />
      <div className="ui-modal-overlay">
        <div className="ui-modal">
          <Button text={'X'} onClick={onClick(false)} />
          {children}
        </div>
      </div>
    </>
  );
};
