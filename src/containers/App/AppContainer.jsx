import { useEffect, useState } from "react";
import { Outlet, useLocation, Link, useNavigate } from "react-router-dom";

// css & images
import logo from "../../assets/logo.png";
import styles from "./styles.module.css";

// mui
import { TextField } from "@mui/material";

export default function AppContainer() {
  const [search, setSearch] = useState("");

  // routing stuff
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    console.log(location.pathname);
    if (location.pathname === "/") {
      navigate("/search");
    }
  }, []);

  return (
    <>
      <div className={styles.topBar}>
        <Link to="/search">
          <img
            src={logo}
            alt="logo"
            className={styles.logo}
            draggable="false"
          />
        </Link>
        {location.pathname === "/search" && (
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
        )}
      </div>
      <Outlet context={[search, setSearch]} />
    </>
  );
}
