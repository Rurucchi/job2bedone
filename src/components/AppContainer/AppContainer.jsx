import { useState } from "react";

export default function AppContainer() {
  const [searchPage, setSearchPage] = useState();
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
    </>
  );
}
