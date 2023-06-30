import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";

// pages
import Search from "./pages/Search/Search.jsx";
import JobPage from "./pages/Job/JobPage.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Search />} />;
        <Route path="job">
          <Route path=":jobId" element={<JobPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
