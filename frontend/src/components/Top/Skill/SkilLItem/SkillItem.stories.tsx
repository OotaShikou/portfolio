import { ComponentMeta, ComponentStory } from "@storybook/react";
import * as React from "react";

import { SkillItem } from "./SkillItem";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */

  title: "Top/Skill/SkillItem",
  component: SkillItem,
  argTypes: {
    name: {
      control: { type: "text" },
    },
    description: {
      control: { type: "text" },
    },
    imgPath: {
      control: { type: "text" },
    },
  },
} as ComponentMeta<typeof SkillItem>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof SkillItem> = (args) => (
  <SkillItem {...args} />
);

export const Default = Template.bind({});
Default.args = {};
