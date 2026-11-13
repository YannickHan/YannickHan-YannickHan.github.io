import React, { useState } from 'react';

function Radio() {
  const [selectedMissionId, setSelectedMissionId] = useState('lcl-alternance');

  const missions = [
    {
      id: 'lcl-alternance',
      title: 'LCL - Ingénieur d’étude et développement',
      frequency: '94.8 MHz // ALTERNANCE',
      location: 'VILLEJUIF (94) — SUD DE PARIS',
      coords: '48.7927° N, 2.3593° E',
      period: '2026 - 2028',
      status: 'SIGNAL ACTIF',
      description:
        'Conception, développement et maintenance d’applications logicielles au sein des équipes IT LCL à Villejuif. Architecture back-end, développement front-end et intégration continue.',
    },
  ];

  const activeMission =
    missions.find((m) => m.id === selectedMissionId) || missions[0];

  return (
    <section className="mx-auto flex w-full max-w-5xl flex-1 flex-col px-3 pt-2 pb-4 font-pipboy text-[#14fe17] select-none sm:px-6">
      
      {/* En-tête de fréquence */}
      <div className="mb-4 flex flex-wrap items-center justify-between border-b border-[#14fe17]/40 pb-2 text-xs tracking-widest uppercase sm:text-sm">
        <span>FRÉQUENCE : {activeMission.frequency}</span>
        <span className="bg-[#14fe17]/20 px-2 py-0.5 [text-shadow:0_0_6px_#14fe17]">
          {activeMission.status}
        </span>
      </div>

      {/* Contenu principal : 40% Mission à gauche / 60% Carte Paris & Villejuif à droite */}
      <div className="my-auto flex flex-1 flex-col gap-6 md:flex-row">
        
        {/* =========================================================
            COLONNE GAUCHE (40%) : SÉLECTION DE LA MISSION
        ========================================================= */}
        <div className="flex w-full flex-col justify-between md:w-[40%]">
          <div>
            <div className="mb-2 text-xs tracking-widest text-[#14fe17]/70 uppercase">
              TRANSMISSIONS DISPONIBLES
            </div>

            <ul className="m-0 flex list-none flex-col gap-2 p-0">
              {missions.map((mission) => {
                const isSelected = mission.id === selectedMissionId;
                return (
                  <li key={mission.id}>
                    <button
                      onClick={() => setSelectedMissionId(mission.id)}
                      className={`flex w-full cursor-pointer items-center gap-3 px-3 py-2.5 text-left text-sm font-bold tracking-wide transition-colors duration-150 sm:text-base ${
                        isSelected
                          ? 'bg-[#14fe17] text-[#081408] shadow-[0_0_12px_rgba(20,254,23,0.6)]'
                          : 'border border-[#14fe17]/30 bg-[#14fe17]/5 text-[#14fe17] hover:bg-[#14fe17]/20'
                      }`}
                    >
                      {/* Petit carré blanc / lumineux indicateur de sélection à gauche */}
                      <span
                        aria-hidden="true"
                        className={`h-2.5 w-2.5 shrink-0 ${
                          isSelected
                            ? 'bg-white shadow-[0_0_6px_#ffffff]'
                            : 'border border-[#14fe17]/50 bg-transparent'
                        }`}
                      />
                      <span className="leading-snug">{mission.title}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Encart détails de la mission sous la liste */}
          <div className="mt-6 border-t-2 border-[#14fe17]/50 bg-[#14fe17]/10 p-3.5 text-xs leading-relaxed sm:text-sm">
            <div className="mb-1.5 flex items-center justify-between border-b border-[#14fe17]/30 pb-1 font-bold">
              <span>PÉRIODE</span>
              <span>{activeMission.period}</span>
            </div>
            <div className="mb-2 flex items-center justify-between border-b border-[#14fe17]/30 pb-1 font-bold">
              <span>SECTEUR</span>
              <span>VILLEJUIF (94)</span>
            </div>
            <p className="m-0 text-[#14fe17]/90">{activeMission.description}</p>
          </div>
        </div>

        {/* =========================================================
            COLONNE DROITE (60%) : CARTE PARIS + POINT SUR VILLEJUIF
        ========================================================= */}
        <div className="relative flex min-h-[320px] w-full flex-col justify-between overflow-hidden border-2 border-[#14fe17]/50 bg-[#14fe17]/5 p-3 shadow-[inset_0_0_25px_rgba(20,254,23,0.12)] md:w-[60%]">
          
          {/* Grille radar de fond */}
          <div
            className="pointer-events-none absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                'linear-gradient(to right, #14fe17 1px, transparent 1px), linear-gradient(to bottom, #14fe17 1px, transparent 1px)',
              backgroundSize: '32px 32px',
            }}
          />

          {/* Coordonnées en haut de la carte */}
          <div className="relative z-10 flex items-center justify-between text-xs tracking-wider">
            <span>CARTE TACTIQUE : GRAND PARIS</span>
            <span>{activeMission.coords}</span>
          </div>

          {/* SVG : Paris Intra-muros + La Seine + Point sur Villejuif */}
          <div className="relative z-10 my-auto flex items-center justify-center py-2">
            <svg
              viewBox="0 0 460 340"
              className="h-full max-h-[270px] w-auto drop-shadow-[0_0_8px_rgba(20,254,23,0.7)]"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Cercles radar centrés sur Villejuif (x=235, y=242) */}
              <circle
                cx="235"
                cy="242"
                r="45"
                fill="none"
                stroke="#14fe17"
                strokeOpacity="0.25"
                strokeDasharray="4 4"
              />
              <circle
                cx="235"
                cy="242"
                r="95"
                fill="none"
                stroke="#14fe17"
                strokeOpacity="0.18"
                strokeDasharray="5 5"
              />
              <circle
                cx="235"
                cy="242"
                r="150"
                fill="none"
                stroke="#14fe17"
                strokeOpacity="0.12"
              />

              {/* Contour de Paris Intra-muros (Boulevard Périphérique) */}
              <path
                d="
                  M 145 112
                  C 165 88, 205 78, 245 80
                  C 285 82, 318 96, 330 122
                  C 340 144, 332 172, 310 184
                  C 284 196, 250 198, 215 196
                  C 182 194, 152 184, 140 164
                  C 130 146, 134 126, 145 112
                  Z
                "
                fill="#14fe17"
                fillOpacity="0.12"
                stroke="#14fe17"
                strokeWidth="2.8"
              />

              {/* Tracé de la Seine traversant Paris */}
              <path
                d="M 65 182 Q 115 176, 148 156 Q 190 132, 238 144 Q 280 156, 312 182 Q 345 212, 385 268"
                fill="none"
                stroke="#14fe17"
                strokeWidth="2"
                strokeOpacity="0.55"
                strokeDasharray="6 3"
              />

              {/* Étiquette PARIS */}
              <text
                x="235"
                y="128"
                textAnchor="middle"
                fill="#14fe17"
                fillOpacity="0.85"
                fontSize="15"
                fontWeight="bold"
                letterSpacing="4"
              >
                PARIS
              </text>
              <circle cx="235" cy="142" r="2.5" fill="#14fe17" fillOpacity="0.7" />

              {/* Axes de visée sur Villejuif (x=235, y=242) */}
              <line
                x1="235"
                y1="196"
                x2="235"
                y2="320"
                stroke="#14fe17"
                strokeWidth="1"
                strokeOpacity="0.4"
              />
              <line
                x1="120"
                y1="242"
                x2="350"
                y2="242"
                stroke="#14fe17"
                strokeWidth="1"
                strokeOpacity="0.4"
              />

              {/* =====================================================
                  POINT SUR VILLEJUIF (Juste au sud de Paris)
              ===================================================== */}
              <g>
                {/* Onde pulsante */}
                <circle
                  cx="235"
                  cy="242"
                  r="14"
                  fill="none"
                  stroke="#14fe17"
                  strokeWidth="2"
                  className="origin-[235px_242px] animate-ping"
                />

                {/* Carré de ciblage Pip-Boy */}
                <rect
                  x="225"
                  y="232"
                  width="20"
                  height="20"
                  fill="#14fe17"
                  fillOpacity="0.2"
                  stroke="#14fe17"
                  strokeWidth="2"
                />

                {/* Point central lumineux */}
                <circle cx="235" cy="242" r="4.5" fill="#14fe17" />

                {/* Étiquette VILLEJUIF - LCL */}
                <polyline
                  points="245,234 268,215 385,215"
                  fill="none"
                  stroke="#14fe17"
                  strokeWidth="2"
                />
                <rect
                  x="268"
                  y="194"
                  width="124"
                  height="21"
                  fill="#081408"
                  stroke="#14fe17"
                  strokeWidth="1.5"
                />
                <text
                  x="330"
                  y="208"
                  textAnchor="middle"
                  fill="#14fe17"
                  fontSize="12"
                  fontWeight="bold"
                  letterSpacing="1.5"
                >
                  VILLEJUIF (LCL)
                </text>
              </g>
            </svg>
          </div>

          {/* Barre d'onde sonore / signal radio en bas de la carte */}
          <div className="relative z-10 flex items-center justify-between border-t border-[#14fe17]/40 pt-2 text-xs">
            <span>ÉMETTEUR : CAMPUS LCL VILLEJUIF</span>
            <span className="animate-pulse font-bold">▮▮▯▮▮▯▮</span>
          </div>
        </div>
      </div>

      {/* Barre inférieure (HP / LEVEL / AP) */}
      <footer className="mt-4 grid grid-cols-12 items-center gap-2 text-xs font-bold tracking-wider sm:text-base">
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

export default Radio;