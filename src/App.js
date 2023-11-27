import Homepage from "./pages/homepage/Homepage";
import Topbar from "./components/topbar/Topbar";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/Context";

function App() {
  const { user } = useContext(Context);

  return (
    <>
      <BrowserRouter>
        <Topbar />
        <Routes>
          {/* Always render Homepage for the root path */}
          <Route path="/" element={<Homepage />} />

          {/* Conditional rendering for other routes */}
          <Route
            path="/register"
            element={user ? <Navigate to="/" /> : <Register />}
          />
          <Route
            path="/login"
            element={user ? <Navigate to="/" /> : <Login />}
          />
          <Route
            path="/write"
            element={user ? <Write /> : <Navigate to="/register" />}
          />
          <Route
            path="/settings"
            element={user ? <Settings /> : <Navigate to="/register" />}
          />

          {/* Single post route */}
          <Route path="/post/:postId" element={<Single />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
