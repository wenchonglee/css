import { Box, Slider } from "@mantine/core";
import { useState } from "react";
import styles from "./cm.module.css";

export const CMDynamic = () => {
  const [fontSize, setFontSize] = useState(16);

  return (
    <Box p="xl">
      <Slider value={fontSize} onChange={setFontSize} />

      <div className={styles.root} style={{ "--example-size": `${fontSize}px` } as React.CSSProperties}>
        Dynamic CSS variables
      </div>

      <div style={{ fontSize }}>Just React styles</div>
    </Box>
  );
};
