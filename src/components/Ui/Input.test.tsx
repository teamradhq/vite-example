import React from 'react';
import {
  render,
  fireEvent as user,
} from '@testing-library/react';

import { Input } from './Input';
import { uuid } from '@src/services/uuid';

jest.mock('@src/services/uuid');
const mockUuid = jest.mocked(uuid);

const defaultProps = {
  value: 'some-value',
};

const renderInput = (props = {}) => {
  return render(<Input {...{
    ...defaultProps,
    ...props,
  }} />);
};

const setup = async (props= {}) => {
  const utils = renderInput(props);
  const input = await utils.findByTestId('ui-input');

  return {
    input,
    utils,
  };
};

describe('components.Ui.Input', () => {
  beforeAll(() => {
    mockUuid.mockReturnValue('random-string');
  });

  type ValueTest = [string, Partial<Props.Ui.Input>, string];

  const valueTests: ValueTest[] = [
    ['provided value', { value: 'some-value' }, 'some-value'],
    ['no value', { value: '' }, ''],
  ];

  it.each(valueTests)('should render a component with %s', async (_, props, expected) => {
    expect.assertions(2);

    const { input } = await setup(props);

    expect(input.tagName).toBe('INPUT');
    expect(input.getAttribute('value')).toBe(expected);
  });

  it('should update value on change', async () => {
    expect.assertions(1);

    const { input } = await setup();
    user.change(input, { target: { value: 'abc' } });
    input.blur();

    expect(input.getAttribute('value')).toBe('abc');
  });

  it('should call supplied change handler', async () => {
    expect.assertions(1);
    const onChange = jest.fn();
    const { input } = await setup({ onChange });
    user.change(input, { target: { value: 'abc' } });
    input.blur();

    expect(onChange).toHaveBeenCalledTimes(1);
  });

  type AttributeTest = [
    string,
    Partial<Props.Ui.Input>,
    Partial<Props.Ui.Input>,
  ];
  const attributeTests: AttributeTest[] = [
    ['assign provided name to name and id', { name: 'name' }, { name: 'name', id: 'name' }],
    ['assign random name and id', {  }, { name: 'random-string', id: 'random-string' }],
    ['assign provided name and id', { name: 'name', id: 'id' }, { name: 'name', id: 'id' }],
  ];
  it.each(attributeTests)('should %s', async (_, props, expected) => {
    expect.assertions(2);

    const { input } = await setup(props);

    expect(input.getAttribute('name')).toBe(expected.name);
    expect(input.getAttribute('id')).toBe(expected.id);
  });
});
