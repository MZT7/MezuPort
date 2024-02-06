// AnimationContainer.js
// import React, { useEffect } from "react";
import Name from "./components/Name";
import Projects from "./components/Projects";
import projectsData from "./my-data.json";
import Resume from "./components/Resume";
import About from "./components/About";
import Footer from "./components/Footer";
import { Toaster } from "./components/ui/sonner";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Work from "./pages/Work";
import Blog from "./pages/Blog";
import BlogHome from "./pages/BlogHome";
import NotFound from "./pages/NotFound";
import { Helmet } from "react-helmet";

const imageUrls = [
  "mezu2.jpg",
  "mezu3.jpg",

  // Add more image URLs as needed
];

const LandingPage = () => (
  <>
    <Helmet>
      <meta charset="utf-8" />
      <title>Mezu Orizu </title>
      <meta name="description" content="Software Engineer" />
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Mezu_Orizu" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta
        name="keywords"
        content="Mezu, Orizu, Software, Graphql, Laravel, full-stack, Nextjs, React, Node"
      />
      <meta property="og:url" content="https://mezuo.netlify.app" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="About Mezu Orizu" />
      <meta
        property="og:description"
        content="Mezu Orizu Portfolio and Projects"
      />
      <meta property="og:image" content="mezu.jpeg" />
      <meta name="twitter:card" content="/mezu.jpeg" />
      <meta name="twitter:site" content="@MezuOristo" />
      <meta name="twitter:creator" content="@MezuOristo" />
      <meta name="twitter:title" content="Mezu Oristo" />
      <meta name="twitter:description" content="About Mezu Oristo" />
      <meta name="twitter:image" content="/Mezu.jpeg" />
      {/* Additional meta tags for SEO */}
    </Helmet>
    <Name />
    <Projects projects={projectsData} />
    <About images={imageUrls} />
    <Toaster />
    <Resume />
  </>
);

const App = () => {
  return (
    <div className="relative mx-auto bg-gray-200">
      <Router>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/project/:id" element={<Work />} />
          <Route path="/Blog" element={<BlogHome />} />
          <Route path="/blog/:slug" element={<Blog />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
};

export default App;
