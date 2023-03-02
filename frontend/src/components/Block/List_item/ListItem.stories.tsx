import { ComponentMeta, ComponentStory } from "@storybook/react";
import * as React from "react";

import { ListItem } from "./ListItem";

export default {
  title: "BlogBlock/ListItem",
  component: ListItem,
  argTypes: {
    text: {
      control: { type: "text" },
    },
  },
} as ComponentMeta<typeof ListItem>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof ListItem> = (args) => {
  return (
    <div className="container h-screen w-screen bg-gray-900 px-4 pt-8 font-thin text-white">
      <ListItem {...args} />
    </div>
  );
};
export const Default = Template.bind({});
Default.args = { text: "default Text \nあれこれこれこれこういう文章" };
