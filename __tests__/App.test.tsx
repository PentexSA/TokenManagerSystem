/**
 * @format
 */

import 'react-native';
import React from 'react';
import { create } from 'react-test-renderer';
import App from '../src/App';

// Note: test renderer must be required after react-native.

it('renders correctly', () => {
  create(<App />);
});
