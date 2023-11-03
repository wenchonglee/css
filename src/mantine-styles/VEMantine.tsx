import { Box, TextInput } from "@mantine/core";
import styles from "./ve.css";

export const VEMantine = () => {
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
