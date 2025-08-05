import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import { Button, Text } from 'react-native';
import LoginScreen from '../src/LoginScreen';

test('displays error message on failed login', async () => {
  let renderer: ReactTestRenderer.ReactTestRenderer;
  await ReactTestRenderer.act(async () => {
    renderer = ReactTestRenderer.create(<LoginScreen />);
  });

  const button = renderer.root.findByType(Button);

  await ReactTestRenderer.act(async () => {
    await button.props.onPress();
  });

  const errorTexts = renderer.root
    .findAllByType(Text)
    .filter(node => node.props.children === 'Login failed: Invalid credentials or network issue');
  expect(errorTexts.length).toBe(1);
});
