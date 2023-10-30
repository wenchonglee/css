import { CodeHighlightTabs } from "@mantine/code-highlight";
import { Card, Stack, Title } from "@mantine/core";
import { CMSelector } from "./CMSelector";
import cmtsx from "./CMSelector.tsx?raw";
import { VESelector } from "./VESelector";
import vetsx from "./VESelector.tsx?raw";
import cmcss from "./cm.module.css?raw";
import vecss from "./ve.css.md?raw";

export const Selectors = () => (
  <Stack>
    <Title order={1} ta="center">
      Selectors
    </Title>

    <Title order={2}>Vanilla Extract</Title>
    <Card p={0} withBorder>
      <VESelector />
      <CodeHighlightTabs
        code={[
          {
            fileName: "ve.css.ts",
            code: vecss,
            language: "ts",
          },
          {
            fileName: "VESelector.tsx",
            code: vetsx,
            language: "tsx",
          },
        ]}
      />
    </Card>

    <Title order={2}>CSS Modules</Title>
    <Card p={0} withBorder>
      <CMSelector />
      <CodeHighlightTabs
        code={[
          {
            fileName: "cm.module.css",
            code: cmcss,
            language: "css",
          },
          {
            fileName: "CMSelector.tsx",
            code: cmtsx,
            language: "tsx",
          },
        ]}
      />
    </Card>
  </Stack>
);
