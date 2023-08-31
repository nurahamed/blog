import Topbar from "./components/topbar/Topbar";
import Homepage from "./pages/homepage/Homepage.";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const user = false;
  return (
    <>
     
      <BrowserRouter>
      <Topbar />
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/login" element={user? <Homepage />:<Login />} />
          <Route path="/register" element={user? <Homepage />:<Register />} />
          <Route path="/write" element={user ? <Write/> : <Register/>} />
          <Route path="/settings" element={user ? <Settings />: <Register/>} />
           <Route path="/post/:postId" element={<Single />} /> 
        </Routes>
      </BrowserRouter> 
   

    </>
  );
}

export default App;
