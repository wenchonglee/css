import { CodeHighlightTabs } from "@mantine/code-highlight";
import { Card, Stack, Text, Title } from "@mantine/core";
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
    <Text></Text>

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
            fileName: "VEConditional.tsx",
            code: vetsx,
            language: "tsx",
          },
        ]}
      />
    </Card>

    <Title order={2}>CSS Modules</Title>
    <Text></Text>

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
            fileName: "CMConditional.tsx",
            code: cmtsx,
            language: "tsx",
          },
        ]}
      />
    </Card>
  </Stack>
);
