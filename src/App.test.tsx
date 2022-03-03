/**
 * @jest-environment jsdom
 */
import React from 'react';
import {
  render,
} from '@testing-library/react';

import App from '@src/App';

const renderApp = () => render(<App />);

describe('app', () => {
  it('should render the App', async () => {
    expect.assertions(1);

    const { findByText } = renderApp();

    await expect(findByText('Counter')).resolves
      .toBeTruthy();
  });
});
