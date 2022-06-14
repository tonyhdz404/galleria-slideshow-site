import { Routes, Route, Link } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Homepage from "./pages/Hompage/Homepage";
import Detail from "./pages/Detail/Detail";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="detail" element={<Detail />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
