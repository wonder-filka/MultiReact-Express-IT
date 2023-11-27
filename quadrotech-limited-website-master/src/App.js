import "./App.scss";
import { Home } from "./pages/Home";
import { Services } from "./pages/Services";
import { Industries } from "./pages/Industries";
import { Cases } from "./pages/Cases";
import { Reviews } from "./pages/Reviews";
import { Contacts } from "./pages/Contacts";
import { Test } from "./pages/Test";
import { Route, Routes } from "react-router-dom";
import CaseItem from "./components/Case/Case";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="services" element={<Services />} />
        <Route path="industries" element={<Industries />} />
        <Route path="cases" element={<Cases />} />
        <Route path="reviews" element={<Reviews />} />
        <Route path="contacts" element={<Contacts />} />
        <Route path="test" element={<Test />} />
        <Route path="/cases/:id" element={<CaseItem />} />
      </Routes>
    </>
  );
}

export default App;
