import React, { useState } from 'react';

function Inv() {
  const [activeCategory, setActiveCategory] = useState('WEAPONS');
  const [selectedIndex, setSelectedIndex] = useState(0);

  const categories = ['WEAPONS', 'APPAREL', 'AID', 'MISC'];
  const activeCatIndex = categories.indexOf(activeCategory);

  // Centrage automatique du sous-onglet actif
  const tabWidthRem = 7.5;
  const translateOffset = -(activeCatIndex * tabWidthRem + tabWidthRem / 2);

  const inventoryData = {
    WEAPONS: [
      {
        name: 'Java / Spring Boot',
        type: 'ARMEMENT BACK-END',
        mastery: '90%',
        context: 'EFREI / Projets Web',
        weight: '2.5',
        value: '★★★★★',
        description:
          'Développement d’applications web robustes avec Spring Boot, Spring Data JPA, Thymeleaf et sécurité BCrypt.',
      },
      {
        name: 'React & Tailwind CSS',
        type: 'ARMEMENT FRONT-END',
        mastery: '92%',
        context: 'Interfaces SPA & UI',
        weight: '1.8',
        value: '★★★★★',
        description:
          'Création d’interfaces modulaires, routage dynamique avec React Router et design sur mesure responsive.',
      },
      {
        name: 'Python (FastAPI / Scripts)',
        type: 'POLYVALENT & DATA',
        mastery: '88%',
        context: 'Stage UQAC / Backend',
        weight: '1.5',
        value: '★★★★☆',
        description:
          'Traitement de flux de données en temps réel (capteurs EEG et eye-tracking) et automatisation serveur.',
      },
      {
        name: 'Flutter & React Native',
        type: 'ARMEMENT MOBILE',
        mastery: '85%',
        context: 'Stage Arcsolu',
        weight: '2.0',
        value: '★★★★☆',
        description:
          'Développement d’applications mobiles multiplateformes et communication matérielle via Bluetooth Low Energy (BLE).',
      },
      {
        name: 'C / C++ & VHDL',
        type: 'BAS NIVEAU & MATÉRIEL',
        mastery: '80%',
        context: 'EFREI / FPGA',
        weight: '3.2',
        value: '★★★★☆',
        description:
          'Programmation système, gestion de la mémoire, concurrence multithread et conception logique sur FPGA.',
      },
      {
        name: 'SQL / MariaDB',
        type: 'BASE DE DONNÉES',
        mastery: '88%',
        context: 'Architecture Données',
        weight: '1.4',
        value: '★★★★★',
        description:
          'Modélisation relationnelle, requêtes optimisées, gestion d’incidents et persistance de données.',
      },
    ],
    APPAREL: [
      {
        name: 'Git & GitHub Actions',
        type: 'ÉQUIPEMENT DEVOPS',
        mastery: '92%',
        context: 'CI/CD & Versioning',
        weight: '0.5',
        value: '★★★★★',
        description:
          'Gestion de branches collaboratives, revues de code et déploiement automatisé (GitHub Pages, workflows).',
      },
      {
        name: 'Linux / WSL Ubuntu',
        type: 'ENVIRONNEMENT SYSTÈME',
        mastery: '86%',
        context: 'Administration & CLI',
        weight: '1.0',
        value: '★★★★☆',
        description:
          'Configuration d’environnements de développement sous shell Linux, scripts de démarrage et gestion de serveurs.',
      },
      {
        name: 'Docker & Cloud Hosting',
        type: 'INFRASTRUCTURE',
        mastery: '78%',
        context: 'Déploiement',
        weight: '2.1',
        value: '★★★★☆',
        description:
          'Conteneurisation d’applications et déploiement sur plateformes cloud (Render, Railway, Fly.io).',
      },
    ],
    AID: [
      {
        name: 'Langues (FR / CN / EN)',
        type: 'COMPÉTENCE SOCIALE',
        mastery: '100%',
        context: 'International',
        weight: '0.1',
        value: '★★★★★',
        description:
          'Français natif, Chinois natif et Anglais courant (validé par une année d’échange universitaire au Canada).',
      },
      {
        name: 'Communication & Gestion',
        type: 'LEADERSHIP ASSOCIATIF',
        mastery: '90%',
        context: "Hock'Efrei (2025-2028)",
        weight: '0.5',
        value: '★★★★★',
        description:
          'Responsable Communication : création de visuels événementiels et stratégie digitale pour l’association sportive.',
      },
      {
        name: 'Méthodes Agiles / Scrum',
        type: 'ORGANISATION ÉQUIPE',
        mastery: '85%',
        context: 'Projets Ingénieur',
        weight: '0.2',
        value: '★★★★☆',
        description:
          'Découpage en sprints, rédaction de spécifications techniques et collaboration en équipe pluridisciplinaire.',
      },
    ],
    MISC: [
      {
        name: 'Simulation de Vol (MSFS 2024)',
        type: 'PASSION AVIATION',
        mastery: '85%',
        context: 'Setup Stream Deck & HOTAS',
        weight: '4.5',
        value: '★★★★★',
        description:
          'Pilotage virtuel, configuration de macros matérielles Elgato Stream Deck et passion pour l’aéronautique.',
      },
      {
        name: 'Hockey sur Glace',
        type: 'SPORT COMPÉTITIF',
        mastery: '88%',
        context: "Équipe D4L4 Hock'Efrei",
        weight: '3.8',
        value: '★★★★★',
        description:
          'Ailier extérieur en compétition universitaire : esprit d’équipe, réactivité et endurance.',
      },
      {
        name: 'Photographie & RawTherapee',
        type: 'CRÉATION VISUELLE',
        mastery: '82%',
        context: 'Post-traitement RAW',
        weight: '1.2',
        value: '★★★★☆',
        description:
          'Prise de vue et développement numérique d’images haute dynamique.',
      },
    ],
  };

  const currentItems = inventoryData[activeCategory] || [];
  const activeItem = currentItems[selectedIndex] || currentItems[0];

  const handleCategoryChange = (cat) => {
    setActiveCategory(cat);
    setSelectedIndex(0);
  };

  return (
    <section className="mx-auto flex w-full max-w-5xl flex-1 flex-col px-3 pt-1 pb-4 font-pipboy text-[#14fe17] select-none sm:px-6">
      
      {/* 1. SOUS-ONGLETS COULISSANTS (WEAPONS | APPAREL | AID | MISC) */}
      <div className="relative mb-4 h-9 w-full overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-[#081408] to-transparent sm:w-20" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-[#081408] to-transparent sm:w-20" />

        <div
          className="absolute top-0 left-1/2 flex items-center transition-transform duration-300 ease-out"
          style={{ transform: `translateX(${translateOffset}rem)` }}
        >
          {categories.map((cat) => {
            const isSelected = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`w-[7.5rem] shrink-0 cursor-pointer text-center text-sm font-bold tracking-widest uppercase transition-all duration-200 sm:text-lg ${
                  isSelected
                    ? 'scale-105 text-[#14fe17] [text-shadow:0_0_8px_#14fe17]'
                    : 'text-[#14fe17]/35 hover:text-[#14fe17]/75'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* 2. CONTENU PRINCIPAL : LISTE À GAUCHE / FICHE TECHNIQUE À DROITE */}
      <div className="my-auto flex flex-1 flex-col gap-6 md:flex-row">
        
        {/* Liste des items (50%) */}
        <div className="flex w-full flex-col md:w-1/2">
          <ul className="m-0 flex list-none flex-col gap-1.5 p-0">
            {currentItems.map((item, idx) => {
              const isSelected = idx === selectedIndex;
              return (
                <li key={item.name}>
                  <button
                    onClick={() => setSelectedIndex(idx)}
                    className={`flex w-full cursor-pointer items-center justify-between px-3 py-2 text-left text-sm font-bold tracking-wide transition-colors duration-150 sm:text-base ${
                      isSelected
                        ? 'bg-[#14fe17] text-[#081408] shadow-[0_0_10px_rgba(20,254,23,0.5)]'
                        : 'text-[#14fe17] hover:bg-[#14fe17]/20'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className={`h-2.5 w-2.5 shrink-0 ${
                          isSelected
                            ? 'bg-white shadow-[0_0_6px_#ffffff]'
                            : 'border border-[#14fe17]/50 bg-transparent'
                        }`}
                      />
                      <span>{item.name}</span>
                    </div>
                    <span className="text-xs opacity-80">{item.mastery}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Fiche technique détaillée (50%) */}
        {activeItem && (
          <div className="flex w-full flex-col justify-between border-2 border-[#14fe17]/40 bg-[#14fe17]/5 p-4 md:w-1/2">
            <div>
              <div className="border-b border-[#14fe17]/40 pb-2">
                <div className="text-xs text-[#14fe17]/70">{activeItem.type}</div>
                <h2 className="mt-0.5 text-lg font-bold tracking-wider sm:text-xl">
                  {activeItem.name}
                </h2>
              </div>

              {/* Tableau de statistiques façon Pip-Boy */}
              <div className="mt-4 flex flex-col gap-1.5 text-xs sm:text-sm">
                <div className="flex justify-between bg-[#14fe17]/20 px-3 py-1.5">
                  <span>MAÎTRISE</span>
                  <span className="font-bold">{activeItem.mastery}</span>
                </div>
                <div className="flex justify-between bg-[#14fe17]/15 px-3 py-1.5">
                  <span>CONTEXTE</span>
                  <span className="font-bold">{activeItem.context}</span>
                </div>
                <div className="flex justify-between bg-[#14fe17]/20 px-3 py-1.5">
                  <span>POIDS (COMPLEXITÉ)</span>
                  <span className="font-bold">{activeItem.weight}</span>
                </div>
                <div className="flex justify-between bg-[#14fe17]/15 px-3 py-1.5">
                  <span>ÉVALUATION</span>
                  <span className="font-bold">{activeItem.value}</span>
                </div>
              </div>

              <p className="mt-4 text-xs leading-relaxed text-[#14fe17]/90 sm:text-sm">
                {activeItem.description}
              </p>
            </div>

            {/* Jauge visuelle de maîtrise en bas de la fiche */}
            <div className="mt-6 border-t border-[#14fe17]/30 pt-3">
              <div className="mb-1 flex justify-between text-xs">
                <span>NIVEAU D'OPÉRATIONNALITÉ</span>
                <span>{activeItem.mastery}</span>
              </div>
              <div className="h-3 w-full border border-[#14fe17] p-0.5">
                <div
                  className="h-full bg-[#14fe17] shadow-[0_0_6px_#14fe17] transition-all duration-300"
                  style={{ width: activeItem.mastery }}
                />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* 3. BARRE INFÉRIEURE (POIDS / CAPACITÉ / CAPS) */}
      <footer className="mt-4 grid grid-cols-12 items-center gap-2 pt-2 text-xs font-bold tracking-wider sm:text-base">
        <div className="col-span-4 bg-[#14fe17]/25 px-2.5 py-1.5 [text-shadow:0_0_4px_#14fe17]">
          STACK 15/20
        </div>
        <div className="col-span-4 bg-[#14fe17]/25 px-2.5 py-1.5 text-center [text-shadow:0_0_4px_#14fe17]">
          EFREI ING2
        </div>
        <div className="col-span-4 bg-[#14fe17]/25 px-2.5 py-1.5 text-right [text-shadow:0_0_4px_#14fe17]">
          READY 100%
        </div>
      </footer>
    </section>
  );
}

export default Inv;