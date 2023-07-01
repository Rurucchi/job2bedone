import styles from "./styles.module.css";

export default function NoMatch() {
  return (
    <>
      <div className={styles.body}>
        <h1 className={styles.notFound}>404 Page Not Found!</h1>
      </div>
    </>
  );
}
