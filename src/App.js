import "./App.css";
import { useAuth } from "./contexts/AuthContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Home from "./pages/Home";
import Matches from "./pages/Matches";

function App() {
  const { user } = useAuth();
  // QUESTION: should I even make the route unavailable if there is no option to navigate to it on the tool bar
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Main" element={<Main />} />
        { user != null ? (
        <Route path="/Matches" element={<Matches />} />
        ) : null}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
