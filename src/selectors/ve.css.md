import { globalStyle, style } from "@vanilla-extract/css";
import { theme } from "../theme";

const root = style({
  padding: theme.spacing.md,
  ":first-child": {
    color: theme.colors.red[6],
  },
  // This will show type errors even though it technically works
  // "& .test": {
  //   color: "red",
  // },
});

const child = style({
  selectors: {
    [`${root} &`]: {
      color: theme.colors.cyan[6],
    },
  },
});

globalStyle(`${root} > .third-party-classname`, {
  color: theme.colors.violet[6],
});

export default {
  child,
  root,
};
