import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { render } from '@testing-library/react';

import { NavLinks } from '@src/components/NavLinks';

const renderButton = () => {
  return render(
    <BrowserRouter>
      <NavLinks pages={[
        { path: '/', title: '0', key: '0' },
        { path: '/1', title: '1', key: '1' },
        { path: '/2', title: '2', key: '2' },
        { path: '/3', title: '3', key: '3' },
      ]} />
      <main>
        <Routes>
          <Route path={'/'} element={<>0</>} />
          <Route path={'/1'} element={<>1</>} />
          <Route path={'/2'} element={<>2</>} />
          <Route path={'/3'} element={<>3</>} />
        </Routes>
      </main>
    </BrowserRouter>,
  );
};

describe('components.NavLinks', () => {
  it('should render the component', async () => {
    expect.assertions(1);

    const result = await renderButton().findByText('2');

    expect(result).toHaveTextContent('2');
  });
});
