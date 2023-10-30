import { Box } from "@mantine/core";
import { useState } from "react";
import styles from "./cm.module.css";

export const CMDynamic = () => {
  const [fontSize, setFontSize] = useState(16);

  return (
    <Box p="md">
      <input type="number" value={fontSize} onChange={(e) => setFontSize(Number(e.currentTarget.value))} />

      <div className={styles.root} style={{ "--example-size": `${fontSize}px` } as React.CSSProperties}>
        Dynamic CSS variables
      </div>

      <div style={{ fontSize }}>Just React styles</div>
    </Box>
  );
};
