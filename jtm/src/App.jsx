import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import ScrollToTop from "./components/ScroolToTop/ScrollToTop";
import ScrollToTopButton from './components/ScroolToTop/ScrollToTopButton';

const Home = lazy(() => import("./pages/Home/Home"));
const AboutPage = lazy(() => import("./pages/AboutPage/AboutPage"));
const Featured = lazy(() => import("./pages/Featured/Featured"));
const Contact = lazy(() => import("./pages/Contact/Contact"));
const Error = lazy(() => import("./components/Error/Error"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <NavBar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/featured" element={<Featured />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <ScrollToTopButton/>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
