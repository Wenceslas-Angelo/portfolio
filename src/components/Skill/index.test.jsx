import React from 'react';
import { render } from '@testing-library/react';
import Skill from '.';
import { BrowserRouter } from 'react-router-dom';

test('Skill component should be rendered', () => {
  render(
    <BrowserRouter>
      <Skill />
    </BrowserRouter>
  );
});
