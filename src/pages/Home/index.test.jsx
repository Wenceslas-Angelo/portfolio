import React from 'react';
import { render } from '@testing-library/react';
import Home from '.';
import { BrowserRouter } from 'react-router-dom';

test('Home page should be rendered', () => {
  render(
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );
});
