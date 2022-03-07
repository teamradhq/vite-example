import {
  render,
  fireEvent,
} from '@testing-library/react';

import { Modal } from './Modal';
import { PropsWithChildren } from 'react';


type Properties = PropsWithChildren<Props.Ui.Modal>;

const defaultProps: Properties = {
  text: 'Testing',
  children: <p>Content</p>,
};

const setup = async (props: Partial<Properties> = {}) => {
  const utils = render(<Modal {...{
    ...defaultProps,
    ...props,
  }} />);

  return {
    utils,
  };
};

describe('components.Ui.Modal', () => {
  it('should not render modal if not open', async () => {
    expect.assertions(1);

    const { utils } = await setup({
      isOpen: false,
    });

    expect(utils.container).not.toHaveTextContent('OpenXContent');
  });

  it('should render modal if open', async () => {
    expect.assertions(1);

    const { utils } = await setup({
      isOpen: true,
    });

    const modal = await utils.findByText('Content');

    expect(modal).toHaveTextContent('Content');
  });

  it('should open modal when button is clicked', async () => {
    expect.assertions(1);

    const { utils } = await setup({
      isOpen: false,
    });
    const button = await utils.findByText('Open');
    fireEvent.click(button);
    const modal = await utils.findByText('Content');

    expect(modal).toHaveTextContent('Content');
  });

  it('should close modal when button is clicked', async () => {
    expect.assertions(1);

    const { utils } = await setup({
      isOpen: true,
    });
    const button = await utils.findByText('X');
    fireEvent.click(button);

    expect(utils.container).not.toHaveTextContent('OpenXContent');
  });
});
