import { CodeHighlightTabs } from "@mantine/code-highlight";
import { Card, Code, Stack, Text, Title } from "@mantine/core";
import { CMDynamic } from "./CMDynamic";
import cmtsx from "./CMDynamic.tsx?raw";
import { VEDynamic } from "./VEDynamic";
import vetsx from "./VEDynamic.tsx?raw";
import cmcss from "./cm.module.css?raw";
import vecss from "./ve.css.md?raw";

export const Dynamic = () => (
  <Stack>
    <Title order={1} ta="center">
      Dynamic
    </Title>

    <Title order={2}>Vanilla Extract</Title>
    <Text>
      For styles that have dynamic values, you can use <Code>@vanilla-extract/dynamic</Code> to assign a dynamic CSS
      variable in scope. This makes use of <Code>style</Code> and if your use case is simple, you might choose to do
      that instead of using Vanilla Extract altogether.
    </Text>

    <Card p={0} withBorder>
      <VEDynamic />
      <CodeHighlightTabs
        code={[
          {
            fileName: "ve.css.ts",
            code: vecss, // css,
            language: "ts",
          },
          {
            fileName: "VEDynamic.tsx",
            code: vetsx,
            language: "tsx",
          },
        ]}
      />
    </Card>

    <Title order={2}>CSS Modules</Title>

    <Text>
      Similar to above, you can either assign a CSS variable using <Code>style</Code> for complex classes, or write your
      CSS in <Code>style</Code> for simple cases.
    </Text>

    <Card p={0} withBorder>
      <CMDynamic />
      <CodeHighlightTabs
        code={[
          {
            fileName: "cm.module.css",
            code: cmcss,
            language: "css",
          },
          {
            fileName: "CMDynamic.tsx",
            code: cmtsx,
            language: "tsx",
          },
        ]}
      />
    </Card>
  </Stack>
);
