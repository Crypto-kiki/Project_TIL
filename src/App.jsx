import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/main";
import BCS from "./pages/bcs";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BCS />} />
        <Route path="/main" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
