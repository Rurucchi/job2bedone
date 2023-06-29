import { BrowserRouter, Route, Routes } from "react-router-dom";

// pages
import Search from "./pages/Search/Search.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Search />} />;
      </Routes>
    </BrowserRouter>
  );
}

export default App;
