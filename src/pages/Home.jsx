import React, { useState } from 'react';
import VaultBoyWalk from '../assets/images/VaultBoyWalk';

function Home() {
  // Gestion des sous-onglets STATUS / SPECIAL / PERKS
  const [activeSubTab, setActiveSubTab] = useState('STATUS');

  const subTabs = ['STATUS', 'SPECIAL', 'PERKS'];
  const activeIndex = subTabs.indexOf(activeSubTab);

  // Largeur fixe d'un onglet en rem (8rem = 128px = w-32) pour le centrage automatique
  const tabWidthRem = 8;
  const translateOffset = -(activeIndex * tabWidthRem + tabWidthRem / 2);

  // Données pour l'onglet SPECIAL (Compétences clés)
  const specialStats = [
    {
      letter: 'S',
      name: 'STRENGTH (Architecture & Back-End)',
      level: 8,
      desc: 'Conception robuste, API REST, Spring Boot, Java, Python et bases de données SQL/MariaDB.',
    },
    {
      letter: 'P',
      name: 'PERCEPTION (UI / UX & Détail)',
      level: 9,
      desc: 'Intégration fidèle, interfaces réactives et souci du détail visuel.',
    },
    {
      letter: 'E',
      name: 'ENDURANCE (Résolution de problèmes)',
      level: 8,
      desc: 'Débogage méthodique, persévérance et optimisation des performances.',
    },
    {
      letter: 'C',
      name: 'CHARISMA (Travail d’équipe & Comm.)',
      level: 8,
      desc: 'Communication claire, gestion de projet Agile et collaboration Git.',
    },
    {
      letter: 'I',
      name: 'INTELLIGENCE (Algorithmique & Systèmes)',
      level: 9,
      desc: 'Structures de données, C/C++, VHDL, DevOps et apprentissage rapide.',
    },
    {
      letter: 'A',
      name: 'AGILITY (Front-End & Mobile)',
      level: 9,
      desc: 'Maîtrise de React, Tailwind CSS, Flutter, React Native et JavaScript moderne.',
    },
    {
      letter: 'L',
      name: 'LUCK (Créativité & Prototypage)',
      level: 8,
      desc: 'Idées originales, conception d’outils sur mesure et veille technologique.',
    },
  ];

  // Données pour l'onglet PERKS (Formation & Expériences)
  const perksList = [
    {
      title: 'INGÉNIEUR LOGICIEL — EFREI PARIS',
      rank: '2025 - 2028',
      desc: 'Cycle ingénieur en informatique : développement web, cloud computing, bases de données et architecture logicielle.',
    },
    {
      title: 'DÉVELOPPEUR CAPTEURS & WEB — UQAC (CANADA)',
      rank: 'STAGE 6 MOIS',
      desc: 'Conception d’une application web centralisant en temps réel des données EEG et eye-tracking via un serveur Python.',
    },
    {
      title: 'DÉVELOPPEUR MOBILE FLUTTER — ARCSOLU',
      rank: 'STAGE 4 MOIS',
      desc: 'Développement d’une application mobile dédiée au secteur de la restauration avec communication Bluetooth Low Energy (BLE).',
    },
  ];

  return (
    <section className="mx-auto flex w-full max-w-4xl flex-1 flex-col px-3 pt-1 pb-4 font-pipboy text-[#14fe17] select-none sm:px-6">
      
      {/* =========================================================
          1. SOUS-ONGLETS COULISSANTS (L'onglet actif se centre au milieu)
      ========================================================= */}
      <div className="relative mb-4 h-9 w-full overflow-hidden">
        {/* Dégradés latéraux pour fondre les bords */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-[#081408] to-transparent sm:w-20" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-[#081408] to-transparent sm:w-20" />

        {/* Piste horizontale centrée sur 50% de l'écran */}
        <div
          className="absolute top-0 left-1/2 flex items-center transition-transform duration-300 ease-out"
          style={{ transform: `translateX(${translateOffset}rem)` }}
        >
          {subTabs.map((tab) => {
            const isSelected = activeSubTab === tab;
            return (
              <button
                key={tab}
                onClick={() => setActiveSubTab(tab)}
                className={`w-32 shrink-0 cursor-pointer text-center text-base font-bold tracking-widest uppercase transition-all duration-200 sm:text-xl ${
                  isSelected
                    ? 'scale-105 text-[#14fe17] [text-shadow:0_0_8px_#14fe17]'
                    : 'text-[#14fe17]/35 hover:text-[#14fe17]/75'
                }`}
              >
                {tab}
              </button>
            );
          })}
        </div>
      </div>

      {/* =========================================================
          2. CONTENU CENTRAL (Centré verticalement avec my-auto)
      ========================================================= */}
      {activeSubTab === 'STATUS' && (
        <div className="my-auto flex flex-col items-center py-2">
          
          {/* Zone Vault Boy + 6 barres d'état */}
          <div className="relative flex w-full max-w-md flex-col items-center">
            {/* Barre Tête */}
            <div
              title="Vision & Conception"
              className="mb-2 h-2.5 w-11 bg-[#14fe17] shadow-[0_0_8px_#14fe17]"
            />

            {/* Rangée centrale : Jauges gauches + Vault Boy + Jauges droites */}
            <div className="flex w-full items-center justify-center gap-8 sm:gap-14">
              {/* Colonne jauges gauches */}
              <div className="flex flex-col justify-between gap-16 sm:gap-20">
                <div
                  title="Front-End & UI"
                  className="h-2.5 w-11 bg-[#14fe17] shadow-[0_0_8px_#14fe17]"
                />
                <div
                  title="Algorithmique & C/C++"
                  className="h-2.5 w-11 bg-[#14fe17] shadow-[0_0_8px_#14fe17]"
                />
              </div>

              {/* Illustration Vault Boy détaillée */}
              <div className="relative flex items-center justify-center">
                <VaultBoyWalk className="h-48 w-auto sm:h-56" />
              </div>

              {/* Colonne jauges droites */}
              <div className="flex flex-col justify-between gap-16 sm:gap-20">
                <div
                  title="Back-End & API"
                  className="h-2.5 w-11 bg-[#14fe17] shadow-[0_0_8px_#14fe17]"
                />
                <div
                  title="Bases de données & Cloud"
                  className="h-2.5 w-11 bg-[#14fe17] shadow-[0_0_8px_#14fe17]"
                />
              </div>
            </div>

            {/* Barre Pieds */}
            <div
              title="Architecture & Déploiement"
              className="mt-2 h-2.5 w-11 bg-[#14fe17] shadow-[0_0_8px_#14fe17]"
            />
          </div>

          {/* Blocs de statistiques d'équipement (Projets / Technologies) */}
          <div className="mt-4 flex items-center gap-4">
            {/* Bloc 1 : Arme -> Projets */}
            <div className="flex items-center gap-1.5" title="Projets réalisés">
              <div className="flex h-11 w-13 items-center justify-center bg-[#14fe17]/20 p-2 shadow-[inset_0_0_8px_rgba(20,254,23,0.3)]">
                <svg viewBox="0 0 24 24" className="h-7 w-7 fill-[#14fe17]">
                  <path d="M2 7h17l3 3v3h-5v5h-4v-5H8l-2 4H2v-4l2-3V7z" />
                </svg>
              </div>
              <div className="flex h-11 flex-col items-center justify-center bg-[#14fe17]/20 px-2.5 text-xs font-bold sm:text-sm">
                <span>⌖</span>
                <span>18</span>
              </div>
            </div>

            {/* Bloc 2 : Casque -> Stack & Outils */}
            <div className="flex items-center gap-1.5" title="Technologies & Résistance aux bugs">
              <div className="flex h-11 w-13 items-center justify-center bg-[#14fe17]/20 p-2 shadow-[inset_0_0_8px_rgba(20,254,23,0.3)]">
                <svg viewBox="0 0 24 24" className="h-7 w-7 fill-[#14fe17]">
                  <path d="M12 4a8 8 0 0 0-8 8v3h16v-3a8 8 0 0 0-8-8zm-9 12h18v2H3v-2z" />
                </svg>
              </div>
              <div className="flex h-11 flex-col items-center justify-center bg-[#14fe17]/20 px-2.5 text-xs font-bold sm:text-sm">
                <span>⚡</span>
                <span>5</span>
              </div>
              <div className="flex h-11 flex-col items-center justify-center bg-[#14fe17]/20 px-2.5 text-xs font-bold sm:text-sm">
                <span>☢</span>
                <span>10</span>
              </div>
            </div>
          </div>

          {/* Nom et titre */}
          <h1 className="mt-3 text-xl font-bold tracking-widest [text-shadow:0_0_8px_#14fe17] sm:text-2xl">
            Yannick Han
          </h1>
          <p className="mt-0.5 text-center text-xs text-[#14fe17]/80 sm:text-sm">
            INGÉNIEUR LOGICIEL — DÉVELOPPEUR FULL-STACK
          </p>
        </div>
      )}

      {/* ONGLET SPECIAL */}
      {activeSubTab === 'SPECIAL' && (
        <div className="my-auto grid grid-cols-1 gap-3 py-2 sm:grid-cols-2">
          {specialStats.map((stat) => (
            <div
              key={stat.letter}
              className="border border-[#14fe17]/40 bg-[#14fe17]/10 p-3 transition-colors hover:bg-[#14fe17]/20"
            >
              <div className="flex items-center justify-between text-base font-bold sm:text-lg">
                <span>{stat.name}</span>
                <span className="bg-[#14fe17] px-2 text-[#081408]">
                  {stat.level}/10
                </span>
              </div>
              <p className="mt-1.5 text-xs leading-relaxed text-[#14fe17]/85">
                {stat.desc}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* ONGLET PERKS */}
      {activeSubTab === 'PERKS' && (
        <div className="my-auto flex flex-col gap-3 py-2">
          {perksList.map((perk) => (
            <div
              key={perk.title}
              className="border border-[#14fe17]/50 bg-[#14fe17]/15 p-4 transition-colors hover:bg-[#14fe17]/25"
            >
              <div className="flex items-center justify-between font-bold">
                <span className="text-sm sm:text-lg">★ {perk.title}</span>
                <span className="shrink-0 border border-[#14fe17] px-2 py-0.5 text-xs">
                  {perk.rank}
                </span>
              </div>
              <p className="mt-2 text-xs text-[#14fe17]/85 sm:text-sm">
                {perk.desc}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* =========================================================
          3. BARRE INFÉRIEURE (Collée tout en bas grâce à mt-auto)
          (Supprimez ce bloc si vous l'avez déjà mis dans Footer.jsx)
      ========================================================= */}
      <footer className="mt-auto grid grid-cols-12 items-center gap-2 pt-4 text-xs font-bold tracking-wider sm:text-base">
        <div className="col-span-3 bg-[#14fe17]/25 px-2.5 py-1.5 [text-shadow:0_0_4px_#14fe17]">
          HP 100/100
        </div>

        <div className="col-span-6 flex items-center gap-2 bg-[#14fe17]/25 px-3 py-1.5 [text-shadow:0_0_4px_#14fe17]">
          <span className="shrink-0">LEVEL 26</span>
          <div className="h-3.5 flex-1 border-2 border-[#14fe17] p-0.5">
            <div className="h-full w-3/4 bg-[#14fe17] shadow-[0_0_6px_#14fe17]" />
          </div>
        </div>

        <div className="col-span-3 bg-[#14fe17]/25 px-2.5 py-1.5 text-right [text-shadow:0_0_4px_#14fe17]">
          AP 90/90
        </div>
      </footer>
    </section>
  );
}

export default Home;