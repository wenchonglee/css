import { Box, Slider } from "@mantine/core";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import { useState } from "react";
import styles from "./ve.css";

export const VEDynamic = () => {
  const [fontSize, setFontSize] = useState(16);

  return (
    <Box p="xl">
      <Slider value={fontSize} onChange={setFontSize} />

      <div className={styles.root} style={assignInlineVars({ [styles.fontSize]: `${fontSize}px` })}>
        Dynamic CSS variables
      </div>
    </Box>
  );
};
