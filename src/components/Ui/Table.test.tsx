import {
  render,
  fireEvent,
} from '@testing-library/react';

import { Table } from './Table';
import { PropsWithChildren } from 'react';

type TestData = {
  order: number,
  title: string,
  price: number,
}

type Properties = PropsWithChildren<Props.Ui.Table<TestData>>;

const defaultProps: Properties = {
  data: [
    { order: 1, title: 'First', price: 12.99 },
    { order: 2, title: 'Second', price: 1.50 },
    { order: 3, title: 'Third', price: 200.00 },
  ],
};

const setup = async (props: Partial<Properties> = {}) => {
  const utils = render(<Table {...{
    ...defaultProps,
    ...props,
  }} />);

  const table = await utils.findByTestId('ui-table');

  return {
    utils,
    table,
  };
};

describe('components.Ui.Table', () => {
  it('should render a table', async () => {
    expect.assertions(1);

    const { table } = await setup();

    expect(table.tagName).toBe('TABLE');
  });
});
