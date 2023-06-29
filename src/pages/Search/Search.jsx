import { useState } from "react";
import styles from "./styles.module.css";

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

// import mock data
import { offers } from "../../data/offers.json";

// custom components

export default function Search() {
  //

  return (
    <>
      <div className={styles.topBar}>
        <img src="src\assets\logo.png" alt="logo" className={styles.logo} />
        <TextField
          id="search"
          label="Search"
          variant="outlined"
          className={styles.searchBar}
        />
      </div>
      <div className={styles.body}>
        <div className={styles.filters}>
          <TextField
            id="location"
            label="Location"
            variant="outlined"
            className={styles.filter}
          />

          <FormControl className={styles.filter}>
            <InputLabel>Domaine</InputLabel>
            <Select label="Age">
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="technologie">Technologie</MenuItem>
              <MenuItem value="data science">Data Science</MenuItem>
              <MenuItem value="publicité">Publicité</MenuItem>
              <MenuItem value="construction">Construction</MenuItem>
              <MenuItem value="ressources humaines">
                Ressources humaines
              </MenuItem>
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
            <Select label="Age">
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
          >
            Search
          </Button>
        </div>

        <div className={styles.results}></div>
      </div>
    </>
  );
}
