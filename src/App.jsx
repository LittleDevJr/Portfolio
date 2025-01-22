import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header.jsx';
import Footer from "./components/footer.jsx";
import Home from "./pages/home.jsx";
import MesProjets from "./pages/mesProjets.jsx";
import ProjetDescription from "./pages/projetDescription.jsx";
import NotFound from "./pages/notFound.jsx";

function App(){
  return (
    <div>
      <Router>
        <Header />
        <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/mesProjets" element={<MesProjets />} />
         <Route path="/projetDescription/:id" element={<ProjetDescription />} />
         <Route path="*" element={<NotFound />} />
      </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
