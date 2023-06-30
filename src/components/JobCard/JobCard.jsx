// functional stuff
import { Link } from "react-router-dom";

// styling
import styles from "./styles.module.css";

// MUI
import { Chip } from "@mui/material";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import CorporateFareIcon from "@mui/icons-material/CorporateFare";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Euro } from "@mui/icons-material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

// utils
import dateDiff from "../../utils/dateDiff";

export default function JobCard({
  title,
  createdAt,
  contractType,
  domain,
  location,
  salary,
  id,
}) {
  // routing

  // check if data is here
  if (!title) {
    title = "N/A";
  }
  if (!createdAt) {
    createdAt = "N/A";
  }
  if (!contractType) {
    contractType = "N/A";
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

  // change salary format
  if (salary > 1000) {
    salary = (salary / 1000).toString() + "K";
  }

  // handling dates

  let time = dateDiff(createdAt);

  return (
    <div className={styles.container}>
      <Link to={`/job/${id}`}>
        <div className={styles.card}>
          <div className={styles.info}>
            <div className={styles.basic}>
              <h1 className={styles.title}>{title}</h1>
              <div className={styles.time}>
                <AccessTimeIcon />
                <p>{time}</p>
              </div>
            </div>
            <div className={styles.specs}>
              <Chip
                icon={<BusinessCenterIcon />}
                label={contractType}
                variant="outlined"
              />
              <Chip
                icon={<CorporateFareIcon />}
                label={domain}
                variant="outlined"
              />
              <Chip
                icon={<LocationOnIcon />}
                label={location}
                variant="outlined"
              />
              <Chip icon={<Euro />} label={salary} variant="outlined" />
            </div>
          </div>
          <div className={styles.details}>
            <h2 className={styles.seeDetails}>See details →</h2>
          </div>
        </div>
      </Link>
    </div>
  );
}
