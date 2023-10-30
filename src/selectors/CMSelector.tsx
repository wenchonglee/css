import styles from "./cm.module.css";

export const CMSelector = () => (
  <div className={styles.root}>
    <div>This is red</div>
    <div className={styles.test}>This is cyan</div>
  </div>
);
