import { AboutSection } from "./components/AboutSection";
import { ContactSection } from "./components/Contact/ContactSection";
import { WorkExperienceSection } from "./components/Experience/WorkExperienceSection";
import { Navbar } from "./components/Navbar";
import { Splash } from "./components/Splash";

function App() {
  return (
    <>
      <Navbar />
      <Splash />
      <AboutSection />
      <WorkExperienceSection />
      <ContactSection />
    </>
  );
}

export default App;
