/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { create } from 'react-test-renderer';
import { render, fireEvent, cleanup } from '@testing-library/react-native';
import { View, Text } from 'react-native';

import Tabs from '@/components/Tabs';

describe('Component: Tabs', () => {
  const props = {
    onTabSelected: jest.fn(),
    tabs: [
      {
        info: {
          label: 'label1',
        },
        component: (
          <View>
            <Text>test</Text>
          </View>
        ),
      },
      {
        info: {
          label: 'label2',
        },
        component: (
          <View>
            <Text>test</Text>
            <Text>test2</Text>
          </View>
        ),
      },
    ],
  };
  afterEach(cleanup);
  it('should render correctly', () => {
    create(<Tabs {...props} />);
  });

  it('should show the tabs with the first tab selected', () => {
    const { getByTestId } = render(<Tabs {...props} />);
    expect(getByTestId(`button-0-title`).props.selected).toBeTruthy();
    expect(getByTestId(`button-1-title`).props.selected).toBeFalsy();
  });

  it('should show the tabs with the second tab selected', () => {
    const { getByTestId } = render(<Tabs {...props} />);
    fireEvent.press(getByTestId(`button-1`));
    expect(getByTestId(`button-0-title`).props.selected).toBeFalsy();
    expect(getByTestId(`button-1-title`).props.selected).toBeTruthy();
  });
});
