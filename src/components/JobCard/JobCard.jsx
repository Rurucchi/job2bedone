import styles from "./styles.module.css";

export default function JobCard(
  title,
  createdAt,
  contractType,
  job,
  domain,
  location,
  salary,
  id
) {
  if (!title) {
    title = "N/A";
  }
  if (!createdAt) {
    createdAt = "N/A";
  }
  if (!contractType) {
    contractType = "N/A";
  }
  if (!job) {
    job = "N/A";
  }
  if (!domain) {
    domain = "N/A";
  }
  if (!location) {
    location = "N/A";
  }
  if (!salary) {
    salary = "N/A";
  }

  return (
    <div>
      <div className={styles.info}></div>
      <div className={styles.details}></div>
    </div>
  );
}
