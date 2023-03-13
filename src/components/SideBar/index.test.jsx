import React from 'react';
import { render } from '@testing-library/react';
import SideBar from '.';
import { BrowserRouter } from 'react-router-dom';

test('SideBar page should be rendered', () => {
  render(
    <BrowserRouter>
      <SideBar />
    </BrowserRouter>
  );
});
