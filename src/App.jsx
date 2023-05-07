import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/main";
import BCS from "./pages/bcs";
import RouteChangeTracker from "./components/googleAnalytics";

function App() {
  return (
    <BrowserRouter>
      <RouteChangeTracker />
      <Routes>
        <Route path="/" element={<BCS />} />
        <Route path="/main" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
