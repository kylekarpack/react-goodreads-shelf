import React from 'react';
import { linkTo } from '@storybook/addon-links';
import { Welcome } from '@storybook/react/demo';
import { GoodreadsBookshelf } from "../dist/index";

export default {
  title: 'GoodreadsBookshelf',
};

export const Story = () => <GoodreadsBookshelf userId="63515611" apiKey="PsmXJodsWJgBPgTosjdEkQ" />

Story.story = {
  name: 'Default',
};
