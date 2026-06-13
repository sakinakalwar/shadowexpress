import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar  from "./common/Shadowxpressnavbar";
import Footer  from "./Pages/Footer";
import Home    from "./component/Home";
import About   from "./component/About";
import Services      from "./Pages/Services";
import Team          from "./Pages/Team";
import FindJobStatus from "./Pages/FindJobStatus";
import ApplyNow      from "./Pages/ApplyNow";
import Contact       from "./Pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/"               element={<Home />}          />
        <Route path="/about"          element={<About />}         />
        <Route path="/services"       element={<Services />}      />
        <Route path="/team"           element={<Team />}          />
        <Route path="/find-job-status" element={<FindJobStatus />} />
        <Route path="/apply"          element={<ApplyNow />}      />
        <Route path="/contact"        element={<Contact />}       />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
