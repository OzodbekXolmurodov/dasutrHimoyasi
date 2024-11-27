import { Route, Routes } from "react-router-dom";
import "./App.css";
import Bos from "./pages/bos/Bos";
import Leaut from "./pages/leaut/Leaut";
import Admin from "./pages/admen/Admin";
import Creat from "./pages/admen/creat/Creat";
import Moneg from "./pages/admen/maneg/Moneg";
import Auth from "./pages/auth/Auth";
import Login from "./pages/login/Login";

function App() {
  return (
    <>
      {/* <Header /> */}
      <Routes>
        <Route path="" element={<Leaut />}>
          <Route path="/prodacts" element={<Bos />} />
          <Route path="/login" element={<Login />} />

          <Route path="/" element={<Auth />}>
            <Route path="admin" element={<Admin />}>
              <Route path="creat" element={<Creat />} />
              <Route path="moneg" element={<Moneg />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
