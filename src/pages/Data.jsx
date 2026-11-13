import React, { useState } from 'react';

function Data() {
  const [activeSubTab, setActiveSubTab] = useState('QUESTS');
  const [selectedIndex, setSelectedIndex] = useState(0);

  const subTabs = ['QUESTS', 'WORKSHOPS'];
  const activeTabIndex = subTabs.indexOf(activeSubTab);

  // Centrage automatique du sous-onglet actif
  const tabWidthRem = 8;
  const translateOffset = -(activeTabIndex * tabWidthRem + tabWidthRem / 2);

  const dataEntries = {
    QUESTS: [
      {
        title: 'Gestion Infrastructures Transport',
        status: 'EN COURS',
        stack: 'Spring Boot • Thymeleaf • JPA • MariaDB',
        summary:
          'Application web full-stack complète permettant de superviser les équipements de stations de transport, déclarer des incidents et piloter les prestataires de maintenance.',
        objectives: [
          'Architecture MVC avec Spring Boot & Spring Data JPA',
          'Authentification sécurisée avec chiffrement BCrypt',
          'Base de données relationnelle MariaDB & gestion des incidents',
        ],
        githubUrl: 'https://github.com/',
      },
      {
        title: 'Plateforme Capteurs EEG & Eye-Tracking',
        status: 'TERMINÉE',
        stack: 'Python • Web Temps Réel • Emotiv EEG',
        summary:
          'Conception et développement d’une application web centralisant et traitant en temps réel les flux biométriques issus de casques EEG et d’eye-trackers.',
        objectives: [
          'Serveur backend Python pour l’acquisition haute fréquence',
          'Visualisation web synchronisée des signaux neurologiques',
          'Développée lors du stage de recherche à l’UQAC (Canada)',
        ],
        githubUrl: 'https://github.com/',
      },
      {
        title: 'App Mobile Restauration & BLE',
        status: 'TERMINÉE',
        stack: 'Flutter • Dart • Bluetooth Low Energy',
        summary:
          'Application mobile métier destinée au secteur de la restauration intégrant une communication matérielle sans fil via protocole Bluetooth Low Energy.',
        objectives: [
          'Interface mobile ergonomique sous Flutter',
          'Implémentation du protocole BLE pour périphériques connectés',
          'Réalisée en stage chez Arcsolu (Paris)',
        ],
        githubUrl: 'https://github.com/',
      },
      {
        title: 'Portfolio Pip-Boy OS v4.0',
        status: 'ACTIVE',
        stack: 'React • React Router • Tailwind CSS • SVG',
        summary:
          'Portfolio interactif reproduisant fidèlement l’ergonomie, les animations et l’esthétique CRT du Pip-Boy 3000 Mark IV de Fallout 4.',
        objectives: [
          'Navigation SPA avec HashRouter compatible GitHub Pages',
          'Illustrations vectorielles SVG sur mesure (Vault Boy, cartes)',
          'Système de sous-onglets coulissants et effet scanlines',
        ],
        githubUrl: 'https://github.com/',
      },
    ],
    WORKSHOPS: [
      {
        title: 'EFREI Paris — Cycle Ingénieur Logiciel',
        status: '2025 - 2028',
        stack: 'Paris, France • Grande École du Numérique',
        summary:
          'Formation d’ingénieur en informatique spécialisée en génie logiciel, combinée à une alternance chez LCL en tant qu’Ingénieur d’étude et développement.',
        objectives: [
          'Programmation Web, Orientée Objet, Cloud Computing & Bases de données',
          'Architecture matérielle & VHDL',
          'Responsable Communication de l’association Hock’Efrei',
        ],
      },
      {
        title: 'UQAC — Échange Universitaire & Stage',
        status: '2024 - 2025',
        stack: 'Chicoutimi, Québec, Canada',
        summary:
          'Année académique internationale suivie d’un stage de 6 mois en tant qu’assistant développeur au sein du laboratoire de recherche.',
        objectives: [
          'Cours avancés en Intelligence Artificielle, DevOps et Recherche Opérationnelle',
          'Développement d’une plateforme web temps réel pour capteurs EEG',
          'Immersion complète en environnement anglophone et nord-américain',
        ],
      },
      {
        title: "IUT d'Orsay — BUT Informatique",
        status: '2022 - 2025',
        stack: 'Université Paris-Saclay • Gif-sur-Yvette',
        summary:
          'Obtention du Bachelor Universitaire de Technologie (BUT) spécialisé en réalisation d’applications : conception, développement et validation.',
        objectives: [
          'Maîtrise des fondamentaux algorithmiques, C/C++, Java et SQL',
          'Conduite de projets en équipe et génie logiciel',
          'Stage de développement mobile Flutter chez Arcsolu',
        ],
      },
    ],
  };

  const currentList = dataEntries[activeSubTab] || [];
  const activeEntry = currentList[selectedIndex] || currentList[0];

  const handleTabChange = (tab) => {
    setActiveSubTab(tab);
    setSelectedIndex(0);
  };

  return (
    <section className="mx-auto flex w-full max-w-5xl flex-1 flex-col px-3 pt-1 pb-4 font-pipboy text-[#14fe17] select-none sm:px-6">
      
      {/* 1. SOUS-ONGLETS COULISSANTS (QUESTS | WORKSHOPS) */}
      <div className="relative mb-4 h-9 w-full overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-[#081408] to-transparent sm:w-20" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-[#081408] to-transparent sm:w-20" />

        <div
          className="absolute top-0 left-1/2 flex items-center transition-transform duration-300 ease-out"
          style={{ transform: `translateX(${translateOffset}rem)` }}
        >
          {subTabs.map((tab) => {
            const isSelected = activeSubTab === tab;
            return (
              <button
                key={tab}
                onClick={() => handleTabChange(tab)}
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

      {/* 2. JOURNAL DE QUÊTES : LISTE À GAUCHE (45%) / DÉTAILS À DROITE (55%) */}
      <div className="my-auto flex flex-1 flex-col gap-6 md:flex-row">
        
        {/* Colonne gauche : Liste des projets / étapes */}
        <div className="flex w-full flex-col md:w-[45%]">
          <ul className="m-0 flex list-none flex-col gap-2 p-0">
            {currentList.map((item, idx) => {
              const isSelected = idx === selectedIndex;
              return (
                <li key={item.title}>
                  <button
                    onClick={() => setSelectedIndex(idx)}
                    className={`flex w-full cursor-pointer items-center gap-3 px-3 py-2.5 text-left text-sm font-bold tracking-wide transition-colors duration-150 sm:text-base ${
                      isSelected
                        ? 'bg-[#14fe17] text-[#081408] shadow-[0_0_10px_rgba(20,254,23,0.5)]'
                        : 'text-[#14fe17] hover:bg-[#14fe17]/20'
                    }`}
                  >
                    <span
                      className={`h-2.5 w-2.5 shrink-0 ${
                        isSelected
                          ? 'bg-white shadow-[0_0_6px_#ffffff]'
                          : 'border border-[#14fe17]/50 bg-transparent'
                      }`}
                    />
                    <span className="leading-snug">{item.title}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Colonne droite : Détail de la quête et objectifs */}
        {activeEntry && (
          <div className="flex w-full flex-col justify-between border-2 border-[#14fe17]/40 bg-[#14fe17]/5 p-4 md:w-[55%]">
            <div>
              {/* En-tête de la mission */}
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#14fe17]/40 pb-2">
                <span className="bg-[#14fe17]/20 px-2 py-0.5 text-xs font-bold">
                  STATUT : {activeEntry.status}
                </span>
                <span className="text-xs text-[#14fe17]/80">
                  {activeEntry.stack}
                </span>
              </div>

              <h2 className="mt-3 text-lg font-bold tracking-wider sm:text-xl">
                {activeEntry.title}
              </h2>

              <p className="mt-2 text-xs leading-relaxed text-[#14fe17]/90 sm:text-sm">
                {activeEntry.summary}
              </p>

              {/* Liste des objectifs (façon Fallout 4) */}
              <div className="mt-5">
                <div className="mb-2 text-xs font-bold tracking-widest text-[#14fe17]/75 uppercase">
                  OBJECTIFS ACCOMPLIS :
                </div>
                <ul className="m-0 flex list-none flex-col gap-2 p-0 text-xs sm:text-sm">
                  {activeEntry.objectives.map((obj, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span className="mt-1 h-2.5 w-2.5 shrink-0 bg-[#14fe17] shadow-[0_0_5px_#14fe17]" />
                      <span>{obj}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Lien GitHub si disponible */}
            {activeEntry.githubUrl && (
              <div className="mt-6 border-t border-[#14fe17]/30 pt-3 text-right">
                <a
                  href={activeEntry.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block border border-[#14fe17] bg-[#14fe17]/15 px-4 py-1.5 text-xs font-bold tracking-widest uppercase transition-colors hover:bg-[#14fe17] hover:text-[#081408] sm:text-sm"
                >
                  [ VOIR LE CODE SUR GITHUB ]
                </a>
              </div>
            )}
          </div>
        )}
      </div>

      {/* 3. BARRE INFÉRIEURE (HP / LEVEL / AP) */}
      <footer className="mt-4 grid grid-cols-12 items-center gap-2 pt-2 text-xs font-bold tracking-wider sm:text-base">
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

export default Data;