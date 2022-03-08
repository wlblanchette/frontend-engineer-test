// Copyright (c) 2016-present, CloudZero, Inc. All rights reserved.
// Licensed under the BSD-style license. See LICENSE file in the project root for full license information.
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
