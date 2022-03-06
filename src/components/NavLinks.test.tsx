import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createMemoryHistory } from 'history';

import {
  render,
} from '@testing-library/react';

import { NavLinks } from '@src/components/NavLinks';

const renderButton = (history: ReturnType<typeof createMemoryHistory>) => {
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
    const history = createMemoryHistory();
    history.push('/');

    const result = await renderButton(history).findByText('Home');

    expect(result).toHaveTextContent('Home');
  });
});
