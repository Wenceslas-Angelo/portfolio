import React from 'react';
import { render } from '@testing-library/react';
import Work from '.';
import { BrowserRouter } from 'react-router-dom';

test('Work page should be rendered', () => {
  render(
    <BrowserRouter>
      <Work />
    </BrowserRouter>
  );
});
