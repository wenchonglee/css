import { CodeHighlightTabs } from "@mantine/code-highlight";
import { Card, Code, Stack, Text, Title } from "@mantine/core";
import { CMMantine } from "./CMMantine";
import cmtsx from "./CMMantine.tsx?raw";
import { VEMantine } from "./VEMantine";
import vetsx from "./VEMantine.tsx?raw";
import cmcss from "./cm.module.css?raw";
import vecss from "./ve.css.md?raw";

export const MantineStyles = () => (
  <Stack>
    <Title order={1} ta="center">
      Mantine Styles
    </Title>

    <Title order={2}>Vanilla Extract</Title>
    <Text>
      Unless you use <Code>globalStyles</Code> (which is not recommended), you have to pass in individual classes using
      the <Code>classNames</Code> prop
    </Text>

    <Card p={0} withBorder>
      <VEMantine />
      <CodeHighlightTabs
        code={[
          {
            fileName: "ve.css.ts",
            code: vecss, // css,
            language: "ts",
          },
          {
            fileName: "VEConditional.tsx",
            code: vetsx,
            language: "tsx",
          },
        ]}
      />
    </Card>

    <Title order={2}>CSS Modules</Title>

    <Text>
      Similar to above, you have to pass in individual classes using the <Code>classNames</Code> prop
    </Text>

    <Card p={0} withBorder>
      <CMMantine />
      <CodeHighlightTabs
        code={[
          {
            fileName: "cm.module.css",
            code: cmcss,
            language: "css",
          },
          {
            fileName: "CMConditional.tsx",
            code: cmtsx,
            language: "tsx",
          },
        ]}
      />
    </Card>
  </Stack>
);
