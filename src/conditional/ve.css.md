import { style, styleVariants } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { theme } from "../theme";

/**
 * Use @vanilla-extract/recipes
 *
 * This library is mostly for variants but can also be used for simple boolean cases
 * Full type-safety at the cost of a sizable boilerplate
 *
 * This is the recommended way
 */
const recipeVariants = recipe({
  base: {
    color: theme.colors.grape[3],
  },
  variants: {
    isVisible: {
      true: {
        visibility: "visible",
      },
      false: {
        visibility: "hidden",
      },
    },
  },
  // this is optional
  defaultVariants: {
    isVisible: true,
  },
});

/**
 * Use data attributes of html elements
 *
 * This has no type safety but is fairly flexible
 */
const dataAttributes = style({
  color: theme.colors.grape[3],
  visibility: "hidden",

  selectors: {
    ['&[data-visibility="true"]']: {
      visibility: "visible",
    },
  },
});

/**
 * Use composition
 *
 * This is easy to write when there's only 1 variable
 */
const base = style({
  color: theme.colors.grape[3],
});
const composition = styleVariants({
  visible: [base],
  hidden: [base, { visibility: "hidden" }],
});

export default {
  base,
  composition,
  dataAttributes,
  recipeVariants,
};
