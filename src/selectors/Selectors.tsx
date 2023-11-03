import { CodeHighlightTabs } from "@mantine/code-highlight";
import { Anchor, Card, Code, Stack, Text, Title } from "@mantine/core";
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
    <Text>
      Coming from <Code>css-in-js</Code>, a big change in Vanilla Extract is{" "}
      <Anchor href="https://vanilla-extract.style/documentation/styling/#complex-selectors">
        its principle to disallow selectors that target another element.
      </Anchor>{" "}
      For example, a simple
      <Code>& .test</Code>
      is not technically allowed in Vanilla Extract.
      <br />
      <br />
      While the principle is sound, you will need to use their <Code>globalStyles</Code> escape hatch if you have a need
      to do this. A use case for this is if you need to target another library's static class
    </Text>
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
    <Text>
      Similar to above, you must use <Code>:global</Code> for targeting a static class
    </Text>
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
