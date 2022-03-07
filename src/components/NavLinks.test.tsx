import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import {
  render,
} from '@testing-library/react';

import { NavLinks } from '@src/components/NavLinks';

const renderButton = () => {
  return render(
    <BrowserRouter>
      <NavLinks />
      <main>
        <Routes>
          <Route path={'/'} element={<>Home</>} />
          <Route path={'/about'} element={<>About</>} />
          <Route path={'/stuff'} element={<>Stuff</>} />
        </Routes>
      </main>
    </BrowserRouter>,
  );
};

describe('components.NavLinks', () => {
  it('should render the component', async () => {
    expect.assertions(1);

    const result = await renderButton().findByText('Home');

    expect(result).toHaveTextContent('Home');
  });
});
