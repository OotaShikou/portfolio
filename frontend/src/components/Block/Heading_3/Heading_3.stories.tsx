import { ComponentMeta, ComponentStory } from "@storybook/react";
import * as React from "react";

import { Heading_3 } from "./Heading_3";

export default {
  title: "BlogBlock/Heading_3",
  component: Heading_3,
  argTypes: {
    text: {
      control: { type: "text" },
    },
  },
} as ComponentMeta<typeof Heading_3>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Heading_3> = (args) => {
  return (
    <div className="container h-screen w-screen bg-gray-900 px-4 pt-8 font-thin text-white">
      <Heading_3 {...args} />
    </div>
  );
};
export const Default = Template.bind({});
Default.args = { text: "default Text \nあれこれこれこれこういう文章" };
