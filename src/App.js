
import Homepage from "./pages/homepage/Homepage.";
import Topbar from "./components/topbar/Topbar";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
// import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/Context";

function App() {
  const{ user} = useContext(Context)
  return (
    <>
     
      <BrowserRouter>
      <Topbar />
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/register" element={user? <Homepage />:<Register />} />
          <Route exact path="/login" element={user? <Homepage />:<Login />} />
          <Route path="/write" element={user ? <Write/> : <Register/>} />
          <Route path="/settings" element={user ? <Settings />: <Register/>} />
           <Route path="/post/:postId" element={<Single />} /> 
        </Routes>
      </BrowserRouter> 
   

    </>
  );
}

export default App;
