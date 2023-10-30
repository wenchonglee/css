import { AppShell, NavLink } from "@mantine/core";
import { useState } from "react";
import { DX } from "./DX";
import { Conditional } from "./conditional/Conditional";
import { Dynamic } from "./dynamic/Dynamic";
import { Selectors } from "./selectors/Selectors";

const data = [
  { label: "DX", description: "General details", element: <DX /> },
  {
    label: "Conditional",
    element: <Conditional />,
  },
  {
    label: "Selectors",
    element: <Selectors />,
  },
  { label: "Dynamic", element: <Dynamic /> },
];

function App() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <AppShell
      padding="md"
      navbar={{
        width: 200,
        breakpoint: "sm",
      }}
    >
      <AppShell.Navbar>
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

      <AppShell.Main>{data[selectedIndex].element}</AppShell.Main>
    </AppShell>
  );
}

export default App;
