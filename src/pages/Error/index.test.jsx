import React from 'react';
import { render } from '@testing-library/react';
import Error from '.';

test('Error page should be rendered', () => {
  render(<Error />);
});
