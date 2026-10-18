import { Navbar } from "./components/Navbar";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { rootTheme } from "./components/Theme/Theme";
import { Footer } from "./components/Footer";
import { Suspense, useCallback, useEffect, useRef, useState } from "react";
import { Route, Routes } from "react-router";
import { Landing } from "./pages/Landing";
import { Contact } from "./pages/Contact";

function App() {
  const [heroElement, setHeroElement] = useState<HTMLDivElement | null>(null)
  const heroRef = useCallback((node: HTMLDivElement | null) => {
    setHeroElement(node)
  }, []);


  const navRef = useRef<HTMLDivElement | null>(null);
  const footerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (navRef.current) document.documentElement.style.setProperty('--nav-height', `${navRef.current.offsetHeight}px`)
    if (footerRef.current) document.documentElement.style.setProperty('--footer-height', `${footerRef.current.offsetHeight}px`)
  }, []);

  return (
    <ThemeProvider theme={rootTheme}>
      <CssBaseline />
      <Navbar navRef={navRef} heroElement={heroElement} />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Landing heroRef={heroRef} />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/portfolio" element={<Landing heroRef={heroRef} />} />
            <Route path="/resume" element={<Landing heroRef={heroRef} />} />
          </Routes>
        </Suspense>
      <Footer footerRef={footerRef} />
    </ThemeProvider>
  );
}

export default App;
