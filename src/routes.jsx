import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Academics from "./pages/Academics";
import Admissions from "./pages/Admissions";
import Faculty from "./pages/Faculty";
import Students from "./pages/Students";
import ContactUs from "./pages/ContactUs";
import Infrastructure from "./pages/Infrastructure";
import { CardProvider } from "./context/CardContext";
import Overview from "./pages/Overview";
import Curriculum from "./pages/Curriculum";
import Method from "./pages/Method";
import { TeachingProvider } from "./context/TeachingContext";
import Email from "./pages/Email";
import Location from "./pages/Location";
import Life from "./pages/Life";
import Council from "./pages/Council";
import Media from "./pages/Media";
import { PhotoProvider } from "./context/PhotoContext";

function AppRoutes() {
  return (
    <PhotoProvider>
      <TeachingProvider>
        <CardProvider>
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/academics" element={<Academics />} />
              <Route path="/admissions" element={<Admissions />} />
              <Route path="/faculty" element={<Faculty />} />
              <Route path="/students" element={<Students />} />
              <Route path="/contact-us" element={<ContactUs />} />
              <Route path="/infra" element={<Infrastructure />} />
              <Route path="/overview" element={<Overview />} />
              <Route path="/curriculum" element={<Curriculum />} />
              <Route path="/method" element={<Method />} />
              <Route path="/email" element={<Email />} />
              <Route path="/location" element={<Location />} />
              <Route path="/life" element={<Life />} />
              <Route path="/council" element={<Council />} />
              <Route path="/media" element={<Media />} />
            </Routes>
          </Router>
        </CardProvider>
      </TeachingProvider>
    </PhotoProvider>
  );
}

export default AppRoutes;
