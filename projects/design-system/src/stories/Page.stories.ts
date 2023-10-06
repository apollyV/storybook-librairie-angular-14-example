import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { within, userEvent } from '@storybook/testing-library';
import { CommonModule } from '@angular/common';

import { ButtonComponent } from './button.component';
import { HeaderComponent } from './header.component';
import { PageComponent } from './page.component';

const meta: Meta<PageComponent> = {
  title: 'Example/Page',
  component: PageComponent,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/angular/configure/story-layout
    layout: 'fullscreen',
  },
  decorators: [
    moduleMetadata({
      declarations: [ButtonComponent, HeaderComponent],
      imports: [CommonModule],
    }),
  ],
};

export default meta;
type Story = StoryObj<PageComponent>;

export const LoggedOut: Story = {
  render: (args: PageComponent) => ({
    props: args,
  }),
};

// More on interaction testing: https://storybook.js.org/docs/angular/writing-tests/interaction-testing
export const LoggedIn: Story = {
  render: (args: PageComponent) => ({
    props: args,
  }),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const loginButton = await canvas.getByRole('button', {
      name: /Log in/i,
    });
    await userEvent.click(loginButton);
  },
};
