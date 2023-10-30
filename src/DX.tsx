import { Anchor, Box, Text } from "@mantine/core";

export const DX = () => {
  return (
    <Box p="md">
      <Text>
        <ul>
          <li>
            VSCode extension for css vars doesn't work well with the current Mantine css file: there are a lot of
            duplicate vars and scoped vars
          </li>
          <li>
            We need to use{" "}
            <Anchor href="https://www.npmjs.com/package/typescript-plugin-css-modules#recommended-usage">
              typescript-plugin-css-modules
            </Anchor>{" "}
            to have some intellisense when importing classes. A "gotcha" for vscode is that we need to also tell vscode
            to use the workspace Typescript.
          </li>
        </ul>
      </Text>
    </Box>
  );
};
