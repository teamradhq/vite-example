import React from 'react';
import {
  render,
  fireEvent as user,
} from '@testing-library/react';

import { Button } from '@src/components/Ui/Button';

const defaultProps = {
  text: 'Test Button',
};

const renderButton = (props?: Partial<Props.Ui.Button>) => {
  return render(<Button {...{
    ...defaultProps,
    ...props,
  }} />);
};

describe('components.Ui.Button', () => {
  it('should render a button with text', async () => {
    expect.assertions(1);

    const result = await renderButton().findByText('Test Button');

    expect(result).toHaveTextContent('Test Button');
  });

  it('should use provided onClick handler', async () => {
    expect.assertions(1);

    const onClick: React.MouseEventHandler<HTMLButtonElement> = jest.fn();
    const button = await renderButton({
      onClick,
      text: 'click',
    }).findByText('click');

    user.click(button);

    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
