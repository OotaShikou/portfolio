import { ComponentMeta, ComponentStory } from "@storybook/react";
import * as React from "react";

import { Skill } from "./Skill";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */

  title: "Top/Skill",
  component: Skill,
  argTypes: {
    // variant: {
    //   options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
    //   control: { type: 'select' },
    // },
    // children: {
    //   control: { type: 'text' },
    // },
  },
} as ComponentMeta<typeof Skill>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Skill> = (args) => <Skill {...args} />;

export const Default = Template.bind({});
Default.args = {};
