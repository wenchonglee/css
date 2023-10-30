import { Text, createTheme } from "@mantine/core";
import { themeToVars } from "@mantine/vanilla-extract";

export const baseTheme = createTheme({
  components: {
    Text: Text.extend({
      defaultProps: {
        size: "sm",
      },
    }),
  },
});
export const theme = themeToVars(baseTheme);
