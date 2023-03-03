import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

test('render App components', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
});
