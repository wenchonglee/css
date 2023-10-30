import { Box, Button } from "@mantine/core";
import { useState } from "react";
import styles from "./ve.css";

export const VEConditional = () => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <Box p="md">
      <Button size="compact-sm" onClick={() => setIsVisible((prev) => !prev)}>
        Toggle visibility
      </Button>

      <div className={styles.recipeVariants({ isVisible })}>recipes</div>

      <div className={styles.dataAttributes} data-visibility={isVisible}>
        data-attributes
      </div>

      <div className={styles.composition[isVisible ? "visible" : "hidden"]}>composition</div>
    </Box>
  );
};
