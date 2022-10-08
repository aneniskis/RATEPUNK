import { Header } from "./components/header/Header";
import { MainContent } from "./components/mainContent/MainContent";
import NotFound from "./components/notFound/NotFound";
import "./index.scss";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/RATEPUNK" element={<Header />}>
          <Route index element={<MainContent />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
