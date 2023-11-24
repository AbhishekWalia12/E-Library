import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";
import Details from "./components/Details";
import Errror from "./components/Errror";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import SurfEBooks from "./components/SurfEBooks";
import TakeQuiz from "./components/TakeQuiz";
import HalfBloodPrince from './components/previews/halfBloodPrince';
import FiftyShadesPreview from "./components/previews/fiftyShades";
import AzkabanPreview from "./components/previews/azkaban";
import InvisibleLifePreview from "./components/previews/invisibleLife";
import LordRingsPreview from "./components/previews/lordRings";
import TimeTravelerPreview from "./components/previews/timeTraveler";

function App() {
  return (
    <>
     < Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/surf-ebooks" element={<SurfEBooks />} />
        <Route path="/take-quiz" element={<TakeQuiz />} />
        <Route path="/login" element={<Login />} />
        <Route path="/details" element={<Details />} />
        <Route path="/previews/harrypotterandthehalfbloodprince" element={< HalfBloodPrince />} />
        <Route path="/previews/thetimetravelerswife" element={<TimeTravelerPreview />} />
        <Route path="/previews/thelordoftherings" element={<LordRingsPreview />} />
        <Route path="/previews/theinvisiblelifeofaddielarue" element={<InvisibleLifePreview />} />
        <Route path="/previews/fiftyshadesofgrey" element={<FiftyShadesPreview />} />
        <Route path="/previews/harrypotterandtheprisonerofazkaban" element={<AzkabanPreview />} />
        <Route path="*" element={<Errror />} />
      </Routes>
    </>
  );
}

export default App;
