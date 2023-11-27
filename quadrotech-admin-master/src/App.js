import { Authentication } from "./pages/authentication";
import "./App.css";
import { Home } from "./pages/home";
import { AddCase } from "./pages/addCase";
import { Route, Routes } from "react-router-dom";
import EditCase from "./components/EditCase";
import { CurrentUserProvider } from "./contexts/currentUser";
import CurrentUserChecker from "./components/CurrentUserChecker";

function App() {
  return (
    <>
      <CurrentUserProvider>
        <CurrentUserChecker>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cases/:id" element={<EditCase />} />
            <Route path="/add" element={<AddCase />} />
            <Route path="/login" element={<Authentication />} />
          </Routes>
        </CurrentUserChecker>
      </CurrentUserProvider>
    </>
  );
}

export default App;
