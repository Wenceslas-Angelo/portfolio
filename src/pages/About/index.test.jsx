import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import About from '.';

test('About page should be rendered', () => {
  render(
    <BrowserRouter>
      <About />
    </BrowserRouter>
  );
});
