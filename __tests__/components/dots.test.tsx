/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { create } from 'react-test-renderer';

import Dots from '@/components/Dots';

describe('Component: Dots', () => {
  const props = {
    levels: [1, 1, 0, 0, 0],
  };

  it('should render correctly', () => {
    create(<Dots {...props} />);
  });
});
