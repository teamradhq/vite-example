import type { FC } from 'react';
import { PropsWithChildren, useState } from 'react';

import { Button } from '@src/components/Button';

import './Modal.css';

export const Modal: FC<Props.Modal> = ({
  // text,
  // type,
  children,
}: PropsWithChildren<Props.Modal>) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
