import { expect, test } from '@playwright/experimental-ct-react';
import { Component } from './Component';

test.describe('Button', () => {
  test('first', async ({ mount }) => {
    const component = await mount(<Component>Button</Component>);

    await expect(component).toHaveText('Button');
  });
});
