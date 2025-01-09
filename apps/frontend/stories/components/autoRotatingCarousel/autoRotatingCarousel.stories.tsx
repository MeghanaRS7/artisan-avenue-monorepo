import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import AutoRotatingCarousel, {
} from "./autoRotatingCarousel";

import grid1 from "../../../src/images/grid/grid1.svg";
import grid2 from "../../../src/images/grid/grid2.svg";
import grid3 from "../../../src/images/grid/grid3.svg";
import grid4 from "../../../src/images/grid/grid4.jpg";
import grid5 from "../../../src/images/grid/grid5.jpg";
import grid6 from "../../../src/images/grid/grid6.jpg";

export default {
  title: "Components/AutoRotatingCarousel",
  component: AutoRotatingCarousel,
  args: {
    title: "Artsian Avenue",
    slides: [
      {
        image: grid1,
        categoryTitle: "Pots",
      },
      {
        image: grid2,
        categoryTitle: "Plates",
      },
      {
        image: grid3,
        categoryTitle: "Dinnerware",
      },
      {
        image: grid4,
        categoryTitle: "Baking",
      },
      {
        image: grid5,
        categoryTitle: "Bowls",
      },
      {
        image: grid6,
        categoryTitle: "Mugs",
      },
    ],
  },
  argTypes: {
    title: {
      control: "text",
      description: "Main title of the carousel",
    },
    slides: {
      control: "object",
      description: "Array of slides with images and category titles",
    },
  },
} as Meta<typeof AutoRotatingCarousel>;

const Template: StoryFn<typeof AutoRotatingCarousel> = (args) => (
  <AutoRotatingCarousel {...args} />
);

export const Default = Template.bind({});
Default.args = {
  title: "Artsian Avenue",
  slides: [
    {
      image: grid1,
      categoryTitle: "Pots",
    },
    {
      image: grid2,
      categoryTitle: "Plates",
    },
    {
      image: grid3,
      categoryTitle: "Dinnerware",
    },
    {
      image: grid4,
      categoryTitle: "Baking",
    },
    {
      image: grid5,
      categoryTitle: "Bowls",
    },
    {
      image: grid6,
      categoryTitle: "Mugs",
    },
  ],
};
