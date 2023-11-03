import { Box, TextInput } from "@mantine/core";
import styles from "./cm.module.css";

export const CMMantine = () => {
  return (
    <Box p="xl">
      <TextInput
        label="Label"
        description="description"
        placeholder="Placeholder"
        classNames={{
          root: styles.root,
          description: styles.description,
        }}
      />
    </Box>
  );
};
