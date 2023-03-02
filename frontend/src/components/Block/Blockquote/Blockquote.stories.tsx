import { ComponentMeta, ComponentStory } from "@storybook/react";
import * as React from "react";

import { Blockquote } from "./Blockquote";

export default {
  title: "BlogBlock/Blockquote",
  component: Blockquote,
  argTypes: {
    text: {
      control: { type: "text" },
    },
  },
} as ComponentMeta<typeof Blockquote>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Blockquote> = (args) => {
  return (
    <div className="bg-gray-900 container w-screen pt-8 px-4 font-thin text-white h-screen">
      <Blockquote {...args} />
    </div>
  );
}
export const Default = Template.bind({});
Default.args = {text: "default Text \nあれこれこれこれこういう文章"};
