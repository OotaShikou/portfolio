import { ComponentMeta, ComponentStory } from "@storybook/react";
import * as React from "react";

import { Todo } from "./Todo";

export default {
  title: "BlogBlock/Todo",
  component: Todo,
  argTypes: {
    inputId: {
      control: { type: "text" },
    },
    text: {
      control: { type: "text" },
    },
    checked: {
      control: {type: "boolean"}
    }
  },
} as ComponentMeta<typeof Todo>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Todo> = (args) => {
  return (
    <div className="bg-gray-900 container w-screen pt-8 px-4 font-thin text-white h-screen">
      <Todo {...args} />
    </div>
  );
}
export const Default = Template.bind({});
Default.args = {
  text: "Todo Default Text",
  inputId: "iahetnvgoht",
  checked: true,
};
