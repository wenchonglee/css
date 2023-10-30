import { Box, Button } from "@mantine/core";
import { clsx } from "clsx";
import { useState } from "react";
import styles from "./cm.module.css";

export const CMConditional = () => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <Box p="md">
      <Button size="compact-sm" onClick={() => setIsVisible((prev) => !prev)}>
        Toggle visibility
      </Button>

      <div
        className={clsx(styles.base, {
          [styles.hidden]: !isVisible,
        })}
      >
        clsx
      </div>
    </Box>
  );
};
