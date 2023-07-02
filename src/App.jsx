import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

// containers
import AppContainer from "./containers/App/AppContainer.jsx";
import JobContainer from "./containers/JobContainer/JobContainer.jsx";

// pages
import Search from "./pages/Search/Search.jsx";
import JobPage from "./pages/Job/JobPage.jsx";
import NoMatch from "./pages/NoMatch/NoMatch.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppContainer />}>
          <Route path="search" element={<Search />} />;
          <Route path="job" element={<JobContainer />}>
            <Route path=":jobId" element={<JobPage />} />
          </Route>
          <Route path="/*" element={<NoMatch />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
