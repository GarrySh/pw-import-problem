import { expect, test } from '@playwright/experimental-ct-react';
import { Component } from './Component';

test.describe('Input', () => {
  test('first', async ({ mount }) => {
    const component = await mount(<Component value="value" />);

    await expect(component).toHaveValue('value');
  });
});
