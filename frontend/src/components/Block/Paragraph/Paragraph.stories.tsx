import { ComponentMeta, ComponentStory } from "@storybook/react";
import * as React from "react";

import { Paragraph } from "./Paragraph";

export default {
  title: "BlogBlock/Paragraph",
  component: Paragraph,
  argTypes: {
    text: {
      control: { type: "text" },
    },
  },
} as ComponentMeta<typeof Paragraph>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Paragraph> = (args) => {
  return (
    <div className="container h-screen w-screen bg-gray-900 px-4 pt-8 font-thin text-white">
      <Paragraph {...args} />
    </div>
  );
};
export const Default = Template.bind({});
Default.args = { text: "default Text \nあれこれこれこれこういう文章" };
