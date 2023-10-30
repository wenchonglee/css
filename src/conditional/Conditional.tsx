import { CodeHighlightTabs } from "@mantine/code-highlight";
import { Card, Stack, Text, Title } from "@mantine/core";
import { CMConditional } from "./CMConditional";
import cmtsx from "./CMConditional.tsx?raw";
import { VEConditional } from "./VEConditional";
import vetsx from "./VEConditional.tsx?raw";
import cmcss from "./cm.module.css?raw";
import vecss from "./ve.css.md?raw";

export const Conditional = () => (
  <Stack>
    <Title order={1} ta="center">
      Conditional
    </Title>

    <Title order={2}>Vanilla Extract</Title>
    <Text>
      There are a few ways to write conditional styles with Vanilla Extract. Currently, using recipes has the most
      boiler-plate but is fully type-safe and easy to extend from if needed.
    </Text>

    <Card p={0} withBorder>
      <VEConditional />
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
      <code>clsx</code> is the easiest utility to reason about, but you'd have to write a lot of classes if the use-case
      is complex.
    </Text>

    <Card p={0} withBorder>
      <CMConditional />
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
