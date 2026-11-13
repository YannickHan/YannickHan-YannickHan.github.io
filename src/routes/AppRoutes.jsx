import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Home from '../pages/Home';
import Inv from '../pages/Inv';
import Data from '../pages/Data';
import Carte from '../pages/Carte';
import Contact from '../pages/Contact';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/accueil" replace />} />
      <Route path="/accueil" element={<Home />} />
      <Route path="/competences" element={<Inv />} />
      <Route path="/projets" element={<Data />} />
      <Route path="/carte" element={<Carte />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<Navigate to="/accueil" replace />} />
    </Routes>
  );
}

export default AppRoutes;