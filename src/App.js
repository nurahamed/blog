import Topbar from "./components/topbar/Topbar";
import Homepage from "./pages/homepage/Homepage.";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";

function App() {
  return (
    <div className="App">
     <Topbar/>
     {/* <Homepage/> */}
     {/* <Single/> */}
     <Write/>
    </div>
  );
}

export default App;
