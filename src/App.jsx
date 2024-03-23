import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./Common.css";

// bootstrap css
import "bootstrap/dist/css/bootstrap.min.css";

import BasicLayout from "./layout/BasicLayout";
import Home from "./pages/Home";
import History from "./pages/History";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <BasicLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/history" element={<History />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BasicLayout>
    </BrowserRouter>
  );
}

export default App;
