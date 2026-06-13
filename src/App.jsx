import { BrowserRouter , Routes, Route} from "react-router-dom";
import Navbar from "./common/Shadowxpressnavbar";
import Home from "./component/Home"
import About from "./component/About";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/"            element={<Home />} />
        <Route path="/about"       element={<About />} />
        {/* <Route path="/services"    element={<Services />} />
        <Route path="/team"        element={<Team />} />
        <Route path="/job-status"  element={<FindJobStatus />} />
        <Route path="/apply"       element={<ApplyNow />} />
        <Route path="/contact"     element={<Contact />} /> */}
      </Routes>
    </BrowserRouter>
  )
}
export default App;
