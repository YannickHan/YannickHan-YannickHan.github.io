import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  const navItems = [
    { path: '/accueil', label: 'STAT' },
    { path: '/projets', label: 'DATA' },
    { path: '/competences', label: 'INV' },
    { path: '/carte', label: 'MAP' },
    { path: '/contact', label: 'RADIO' },
  ];

  return (
    <header className="relative overflow-hidden bg-[#081408] px-3 pt-4 pb-2.5 font-pipboy uppercase tracking-[2px] text-[#14fe17] select-none sm:px-10 sm:pt-5">
      {/* Couche d'effet CRT (Scanlines) */}
      <div className="pipboy-scanlines pointer-events-none absolute inset-0 z-10" />

      {/* Ligne supérieure avec les onglets centrés */}
      <nav className="relative z-20 flex w-full items-end">
        {/* Segment de ligne gauche (même largeur flexible que celui de droite) */}
        <div className="h-[2px] w-4 shrink-0 bg-[#14fe17] shadow-[0_0_8px_#14fe17] sm:w-12" />

        {/* Liste des onglets élargie sur tout l'espace disponible */}
        <ul className="m-0 flex flex-1 list-none justify-center p-0">
          {navItems.map((item) => (
            <li key={item.path} className="relative flex-1">
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  [
                    'block border-2 px-2 py-2 text-center text-sm font-bold no-underline transition-colors duration-150 sm:px-8 sm:py-2.5 sm:text-2xl',
                    '[text-shadow:0_0_6px_rgba(20,254,23,0.7)]',
                    isActive
                      ? 'border-[#14fe17] border-b-[#081408] shadow-[0_-4px_10px_-4px_#14fe17,inset_0_4px_12px_-6px_#14fe17]'
                      : 'border-transparent border-b-[#14fe17] hover:bg-[#14fe17]/25',
                  ].join(' ')
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Segment de ligne droit */}
        <div className="h-[2px] w-4 shrink-0 bg-[#14fe17] shadow-[0_0_8px_#14fe17] sm:w-12" />
      </nav>
    </header>
  );
}

export default Navbar;