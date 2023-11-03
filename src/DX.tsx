import { Anchor, Box, List, Title } from "@mantine/core";

export const DX = () => {
  return (
    <Box p="md">
      <Title order={2}>Vanilla Extract</Title>
      <List withPadding my="md">
        <List.Item>Some of the features of Vanilla Extract require their supporting libraries</List.Item>
        <List.Item>Because of the way theme works, we always need to import a constant for theming</List.Item>
      </List>
      <Title order={2}>CSS Modules</Title>
      <List withPadding my="md">
        <List.Item>
          To get intellisense when importing classes, we need to use{" "}
          <Anchor href="https://www.npmjs.com/package/typescript-plugin-css-modules#recommended-usage">
            typescript-plugin-css-modules
          </Anchor>
          . A "gotcha" for VSCode is that we must configure it to use workspace Typescript instead of user.
        </List.Item>
        <List.Item>
          To get intellisense for CSS variables, the only choices are either of these VSCode extensions:{" "}
          <Anchor href="https://marketplace.visualstudio.com/items?itemName=phoenisx.cssvar">CSS Var Complete</Anchor>{" "}
          or{" "}
          <Anchor href="https://marketplace.visualstudio.com/items?itemName=vunguyentuan.vscode-css-variables">
            CSS Variable Autocomplete
          </Anchor>
          .
          <br />
          However, both extensions basically use a CSS file to discover variables and they don't work well with Mantine.
          There are a lot of duplicate vars and scoped vars
        </List.Item>
      </List>
    </Box>
  );
};
