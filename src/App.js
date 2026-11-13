import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import AppRoutes from './routes/AppRoutes';

function App() {
  return (
    <Router>
      {/* Conteneur parent : occupe exactement 100% de la hauteur de l'écran */}
      <div className="relative flex min-h-screen flex-col justify-between bg-[#081408] font-pipboy text-[#14fe17]">
        {/* Effet CRT par-dessus l'ensemble */}
        <div className="pipboy-scanlines pointer-events-none fixed inset-0 z-50" />

        {/* 1. HAUT : La Navbar ne rétrécit jamais */}
        <div className="relative z-20 shrink-0">
          <Navbar />
        </div>

        {/* 2. MILIEU : Prend exactement tout l'espace libre entre la Navbar et le Footer */}
        <main className="relative z-10 flex flex-1 flex-col">
          <AppRoutes />
        </main>

        {/* 3. BAS : Le Footer reste collé tout en bas */}
        <div className="relative z-20 shrink-0">
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;