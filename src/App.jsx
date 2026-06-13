
// import About from './pages/About'
// import Services from './pages/Services'
// import Team from './pages/Team'
// import FindJobStatus from './pages/FindJobStatus'
// import ApplyNow from './pages/ApplyNow'
// import Contact from './pages/Contact'

import { BrowserRouter , Routes, Route} from "react-router-dom";
import Navbar from "./common/Shadowxpressnavbar";
import Home from "./component/Home"
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/"            element={<Home />} />
        {/* <Route path="/about"       element={<About />} />
        <Route path="/services"    element={<Services />} />
        <Route path="/team"        element={<Team />} />
        <Route path="/job-status"  element={<FindJobStatus />} />
        <Route path="/apply"       element={<ApplyNow />} />
        <Route path="/contact"     element={<Contact />} /> */}
      </Routes>
    </BrowserRouter>
  )
}
export default App;
