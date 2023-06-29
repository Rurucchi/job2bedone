import { useState } from "react";
import "./App.css";

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

function App() {
  // get user data

  return (
    <>
      <div className="topBar">
        <img src="src\assets\logo.png" alt="logo" className="logo" />
        <TextField
          id="search"
          label="Search"
          variant="outlined"
          className="searchBar"
        />
      </div>
      <div className="body">
        <div className="filters">
          <TextField
            id="location"
            label="Location"
            variant="outlined"
            className="filter"
          />

          <FormControl className="filter">
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

          <FormControl className="filter">
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
            className="filter"
          >
            Search
          </Button>
        </div>

        <div className="results"></div>
      </div>
    </>
  );
}

export default App;
