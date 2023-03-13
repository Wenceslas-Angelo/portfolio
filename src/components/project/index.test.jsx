import React from 'react';
import { render } from '@testing-library/react';
import Project from '.';
import { BrowserRouter } from 'react-router-dom';

test('Project component should be rendered', () => {
  render(
    <BrowserRouter>
      <Project />
    </BrowserRouter>
  );
});
