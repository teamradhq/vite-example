/**
 * @jest-environment jsdom
 */
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import {
  render,
} from '@testing-library/react';

import App from '@src/App';

const renderApp = () => render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);

describe('app', () => {
  it('should render the App', async () => {
    expect.assertions(1);

    const { findByText } = renderApp();

    await expect(findByText('Counter')).resolves
      .toBeTruthy();
  });
});
