import { useState, useEffect } from "react";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";

// logo
import logo from "../../assets/logo.png";

// ui library
import {
  Button,
  TextField,
  Select,
  InputLabel,
  MenuItem,
  FormControl,
} from "@mui/material";

// icons
import SearchIcon from "@mui/icons-material/Search";

// custom components
import JobCard from "../../components/JobCard/JobCard";

//queries
import query from "../../queries/query";

export default function Search() {
  //jobs
  const [jobList, setJobList] = useState([]);
  const [jobId, setJobId] = useState([]);
  const [resultNumber, setResultNumber] = useState(0);

  // input states
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [domain, setDomain] = useState("");
  const [contract, setContract] = useState("");

  //load
  const [loaded, setLoaded] = useState(false);

  // first load, search for every job
  useEffect(() => {
    const res = query(search, location, domain, contract);
    setJobList(res[0]);
    setResultNumber(res[0].length);
    setJobId(res[1]);
    setLoaded(true);
    console.log(res[0]);
  }, []);

  function searchJobs() {
    let res = query(search, location, domain, contract);
    setJobList(res[0]);
    setJobId(res[1]);
    setResultNumber(res[0].length);
    console.log(res[0]);
  }

  // for testing purpose
  // useEffect(() => {
  //   console.log(location);
  // }, [location]);

  return (
    <>
      <div className={styles.topBar}>
        <Link to="/">
          <img
            src={logo}
            alt="logo"
            className={styles.logo}
            draggable="false"
          />
        </Link>
        <TextField
          id="search"
          label="Search"
          variant="outlined"
          className={styles.searchBar}
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </div>
      <div className={styles.body}>
        <div className={styles.filters}>
          <TextField
            id="location"
            label="Location"
            variant="outlined"
            className={styles.filter}
            value={location}
            onChange={(e) => {
              setLocation(e.target.value);
            }}
          />

          <FormControl className={styles.filter}>
            <InputLabel>Domaine</InputLabel>
            <Select
              label="Domaine"
              value={domain}
              onChange={(e) => {
                setDomain(e.target.value);
              }}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="technologie">Technologie</MenuItem>
              <MenuItem value="data science">Data Science</MenuItem>
              <MenuItem value="publicité">Publicité</MenuItem>
              <MenuItem value="construction">Construction</MenuItem>
              <MenuItem value="administration">Administration</MenuItem>
              <MenuItem value="consulting">Consulting</MenuItem>
              <MenuItem value="banque">Banque</MenuItem>
              <MenuItem value="arts">Arts</MenuItem>
              <MenuItem value="industrie">Industrie</MenuItem>
              <MenuItem value="services">Services</MenuItem>
              <MenuItem value="comptabilité">Comptabilité</MenuItem>
            </Select>
          </FormControl>

          <FormControl className={styles.filter}>
            <InputLabel>Contrat</InputLabel>
            <Select
              label="Contrat"
              value={contract}
              onChange={(e) => {
                setContract(e.target.value);
              }}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="cdi">CDI</MenuItem>
              <MenuItem value="cdd">CDD</MenuItem>
              <MenuItem value="interim">Interim</MenuItem>
              <MenuItem value="alternance">Alternance</MenuItem>
            </Select>
          </FormControl>

          <Button
            size="large"
            variant="contained"
            endIcon={<SearchIcon />}
            className={styles.filter}
            onClick={searchJobs}
          >
            Search
          </Button>
        </div>

        <div className={styles.results}>
          <p>{resultNumber} Found</p>
          <div className={styles.resultList}>
            {loaded &&
              jobList.map((element) => {
                return (
                  <JobCard
                    title={element.title}
                    createdAt={element.createdAt}
                    contractType={element.contractType}
                    domain={element.domain}
                    location={element.location}
                    salary={element.salary}
                    id={jobId[jobList.indexOf(element)]}
                  />
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
}
