import { style } from "@vanilla-extract/css";
import { theme } from "../theme";

const root = style({
  outline: `2px solid ${theme.colors.orange[6]}`,
  padding: "4px",
});

const description = style({
  color: theme.colors.lime[6],
});

// this will work but you shouldn't do this
// globalStyle(`${root} .mantine-TextInput-description`, {
//   color: theme.colors.lime[6],
// });

export default {
  root,
  description,
};
