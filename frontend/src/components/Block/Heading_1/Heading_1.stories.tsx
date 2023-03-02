import { ComponentMeta, ComponentStory } from "@storybook/react";
import * as React from "react";

import { Heading_1 } from "./Heading_1";

export default {
  title: "BlogBlock/Heading_1",
  component: Heading_1,
  argTypes: {
    text: {
      control: { type: "text" },
    },
  },
} as ComponentMeta<typeof Heading_1>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Heading_1> = (args) => {
  return (
    <div className="container h-screen w-screen bg-gray-900 px-4 pt-8 font-thin text-white">
      <Heading_1 {...args} />
    </div>
  );
};
export const Default = Template.bind({});
Default.args = { text: "default Text \nあれこれこれこれこういう文章" };
