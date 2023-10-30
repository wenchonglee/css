import { Box } from "@mantine/core";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import { useState } from "react";
import styles from "./ve.css";

export const VEDynamic = () => {
  const [fontSize, setFontSize] = useState(16);

  return (
    <Box p="md">
      <input type="number" value={fontSize} onChange={(e) => setFontSize(Number(e.currentTarget.value))} />

      <div className={styles.root} style={assignInlineVars({ [styles.fontSize]: `${fontSize}px` })}>
        Dynamic CSS variables
      </div>
    </Box>
  );
};
