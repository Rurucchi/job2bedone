import styles from "./styles.module.css";
import { useParams, Link } from "react-router-dom";
import { useState } from "react";

// logo
import logo from "../../assets/logo.png";

// mui
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";

// utils
import getJobByIndex from "../../queries/getJobByIndex";
import dateDiff from "../../utils/dateDiff";

// icons
import { Chip } from "@mui/material";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import CorporateFareIcon from "@mui/icons-material/CorporateFare";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Euro } from "@mui/icons-material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

export default function JobPage() {
  let { jobId } = useParams();
  let job = getJobByIndex(jobId);
  console.log(job);

  // apply handling
  const [open, setOpen] = useState(false);

  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = () => {
    setOpen(true);
  };

  let time = dateDiff(job.createdAt);

  return (
    <>
      <div className={styles.app}>
        <div className={styles.topBar}>
          <Link to="/">
            <img src={logo} alt="logo" className={styles.logo} />
          </Link>
        </div>
        <div className={styles.body}>
          <div className={styles.head}>
            <h1 className={styles.title}>{job.title}</h1>
            <div className={styles.time}>
              <AccessTimeIcon />
              <p>{time}</p>
            </div>
          </div>
          <div className={styles.description}>
            <p>{job.description}</p>
          </div>

          <div className={styles.specs}>
            <Chip
              icon={<BusinessCenterIcon />}
              label={job.contractType}
              variant="outlined"
            />
            <Chip
              icon={<CorporateFareIcon />}
              label={job.domain}
              variant="outlined"
            />
            <Chip
              icon={<LocationOnIcon />}
              label={job.location}
              variant="outlined"
            />
            <Chip icon={<Euro />} label={job.salary} variant="outlined" />
          </div>
          <Tooltip
            PopperProps={{
              disablePortal: true,
            }}
            onClose={handleTooltipClose}
            open={open}
            disableFocusListener
            disableHoverListener
            disableTouchListener
            title="This feature is not implemented yet!"
          >
            <Button
              variant="contained"
              size="large"
              onClick={handleTooltipOpen}
            >
              Apply
            </Button>
          </Tooltip>
        </div>
      </div>
    </>
  );
}
