import { render } from '@testing-library/react';

import { List } from '@src/components/Tags/List';
import { ListItem } from '@src/components/Tags/ListItem';
jest.mock('@src/components/Tags/ListItem');

const mockItem = jest.mocked(ListItem);

const Tags = (): State.Tags.Tag[] => [
  { name: '1', index: 1, key: 'key-1' },
  { name: '2', index: 2, key: 'key-2' },
  { name: '3', index: 3, key: 'key-3' },
  { name: '4', index: 4, key: 'key-4' },
];

const setup = async (props= {}) => {
  const utils = render(<List {...props} />);

  const list = await utils.findByTestId('tag-list');

  return {
    list,
    utils,
  };
};


describe('components.Tags.List', () => {
  beforeAll(() => {
    mockItem.mockImplementation((props) => (
      <div>
        {Object.values(props).join('::')}
      </div>
    ));
  });

  it('should render a list', async () => {
    expect.hasAssertions();

    const { list } = await setup({ tags: Tags() });

    expect(list).toHaveClass('tag-list');
  });

  it('should render all items in the list', async () => {
    expect.hasAssertions();

    const { list } = await setup({ tags: Tags() });

    expect(list.children).toHaveLength(4);
  });

  it('should render provided children', async () => {
    expect.hasAssertions();

    const { list } = await setup({
      children: [
        <div key={1}>span</div>,
        <div key={2}>span</div>,
      ],
    });

    expect(list.children).toHaveLength(2);
  });

  it('should favour children over tags', async () => {
    expect.hasAssertions();

    const { list } = await setup({
      tags: Tags(),
      children: [
        <div key={1}>span</div>,
        <div key={2}>span</div>,
      ],
    });

    expect(list.children).toHaveLength(2);
  });
});
