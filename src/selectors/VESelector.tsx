import styles from "./ve.css";

export const VESelector = () => (
  <div className={styles.root}>
    <div>This is red</div>
    <div className={styles.child}>This is cyan</div>
  </div>
);
