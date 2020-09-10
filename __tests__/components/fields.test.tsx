/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { create } from 'react-test-renderer';

import Fields from '@/components/Fields';

describe('Component: Fields', () => {
  const props = {
    data: {
      title: 'test',
      fields: [
        {
          title: 'test2',
          levels: [1, 0, 0, 0, 0],
        },
      ],
    },
  };

  it('should render correctly', () => {
    create(<Fields {...props} />);
  });
});
