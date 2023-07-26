
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "./App.css"
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import Education from "./pages/Education"
import NavigationBar from "./Components/NavigationBar"
import Socials from "./Components/Socials"


function App() {
  return (
    <div className="App">

      <Router>
        <NavigationBar></NavigationBar>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          {/*           index route : defines a default route that opens when website is loaded
 */}          <Route index element={<Home />}></Route>
          <Route path='/projects' element={<Projects />}></Route>
          <Route path='/education' element={<Education />}></Route>
        </Routes>

        <Socials></Socials>
      </Router>
    </div>
  );
}

export default App;
