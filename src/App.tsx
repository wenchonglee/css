import { AppShell, Burger, NavLink } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconBrandGithubFilled } from "@tabler/icons-react";
import { useState } from "react";
import { DX } from "./DX";
import { Conditional } from "./conditional/Conditional";
import { Dynamic } from "./dynamic/Dynamic";
import { MantineStyles } from "./mantine-styles/MantineStyles";
import { Selectors } from "./selectors/Selectors";

const data = [
  { label: "DX", description: "General details", element: <DX /> },
  { label: "Conditional", element: <Conditional /> },
  { label: "Selectors", element: <Selectors /> },
  { label: "Dynamic", element: <Dynamic /> },
  { label: "Mantine Styles", element: <MantineStyles /> },
];

function App() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [opened, { toggle }] = useDisclosure();
  return (
    <AppShell
      header={{ height: opened ? 40 : 1 }}
      padding="md"
      navbar={{
        width: 200,
        breakpoint: "sm",
        collapsed: { mobile: !opened },
      }}
    >
      <AppShell.Header>
        <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
      </AppShell.Header>
      <AppShell.Navbar>
        <NavLink
          label="Github"
          href="https://github.com/wenchonglee/css"
          description="Full source code"
          p="md"
          leftSection={<IconBrandGithubFilled size={32} />}
          target="_blank"
        />
        {data.map((item, index) => (
          <NavLink
            key={item.label}
            active={index === selectedIndex}
            label={item.label}
            description={item.description}
            onClick={() => setSelectedIndex(index)}
            p="md"
          />
        ))}
      </AppShell.Navbar>

      <AppShell.Main maw="120ch" m="0 auto">
        {data[selectedIndex].element}
      </AppShell.Main>
    </AppShell>
  );
}

export default App;
