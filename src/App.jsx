import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";

// pages
import Search from "./pages/Search/Search.jsx";
import JobPage from "./pages/Job/JobPage.jsx";
import NoMatch from "./pages/NoMatch/NoMatch.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Search />} />;
        <Route path="job">
          <Route path=":jobId" element={<JobPage />} />
        </Route>
        <Route path="/*" element={<NoMatch />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
