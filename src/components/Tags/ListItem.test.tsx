import { render, fireEvent } from '@testing-library/react';

import { useAppDispatch } from '@src/store/hooks';
import { setActiveDialog } from '@src/store/tags';

jest.mock('@src/store/hooks');
jest.mock('@src/store/tags');

const mocks = {
  useAppDispatch: jest.mocked(useAppDispatch),
  setActiveDialog: jest.mocked(setActiveDialog),
};

import { ListItem } from '@src/components/Tags/ListItem';

const Tag = (): State.Tags.Tag => (
  { name: '1', index: 1, key: 'key-1', group: 'group' }
);

const defaultProps: Props.Tags.ListItem = {
  name: 'default',
  key: 'default',
  group: 'default',
  index: -1,
};

const setup = async (props: Partial<Props.Tags.ListItem> = {}) => {
  const utils = render(
    <ul>
      <ListItem {...{
        ...defaultProps,
        ...props,
      }}
      />
    </ul>,
  );

  const item = await utils.findByTestId('list-item');

  return {
    item,
    utils,
  };
};

describe('components.Tags.List', () => {
  it('should render a list item', async () => {
    expect.assertions(1);

    const { item } = await setup({ ...Tag() });

    expect(item).toHaveClass('tag-list-item');
  });

  it('should render tag label', async () => {
    expect.assertions(1);

    const { utils } = await setup({ ...Tag() });
    const label = utils.findByText('1 :: 1 :: (group)');

    expect(label).toBeTruthy();
  });

  it.skip('should open edit dialog', async () => {
    expect.assertions(1);

    const { utils } = await setup({ ...Tag() });
    const edit = await utils.findByText('Edit');
    fireEvent.click(edit);

    expect(mocks.useAppDispatch).toHaveBeenCalled();
    expect(mocks.setActiveDialog).toHaveBeenCalled();
  });
});
